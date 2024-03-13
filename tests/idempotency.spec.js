import "jest";
import User from "../src/user_1.js";

// This shows tests that are not idempotent meaning that they do not always produce the same result on every run

describe("User Idempotency", () => {
  let user;

  beforeEach(() => {
    user = User();
  });

  // TODO: This only passes sometimes and not other times
  it("should be able to login and logout successfully", () => {
    expect(user.id()).toEqual(1);
  });
});