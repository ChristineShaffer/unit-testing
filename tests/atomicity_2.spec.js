import checkFieldsOnComponent from "../src/check_fields_on_component.js";
import descriptionValid from "../src/description_valid.js";

// This shows tests that are not atomic meaning they are dependent on tests being run before them and cannot be run in
// any order within the test suite

describe("some unit", () => {
  const myComponent = {
    name: "Derp",
    id: 1,
    description: "Some description!",
  };

  // TODO: If we put this second, the test fails
  describe("unit b", () => {
    it("should validate description length being too long", () => {
      expect(descriptionValid(myComponent)).toBeFalsy();
    });
  });

  describe("unit a", () => {
    it("should check the description fields", () => {
      expect(checkFieldsOnComponent(myComponent, {description: "Some description!"})).toBeTruthy();
    });

    it("should validate components with missing fields", () => {
      delete myComponent.description;

      expect(checkFieldsOnComponent(myComponent, {id: 1})).toBeTruthy();
    });
  });
});