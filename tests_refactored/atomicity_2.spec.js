import checkFieldsOnComponent from "../src/check_fields_on_component.js";
import descriptionValid from "../src/description_valid.js";

describe("some unit", () => {
  let myComponent;

  beforeEach(() => {
    myComponent = {
      name: "Derp",
      id: 1,
      description: "Some description!",
    };
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

  describe("unit b", () => {
    it("should validate description length as being too long", () => {
      expect(descriptionValid(myComponent)).toBeFalsy();
    });
  });
});