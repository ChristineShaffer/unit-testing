import "jest";
import User from "../src/user_2.js";
import generate_user_id from "../src/generate_user_id.js";

// This shows tests that are idempotent meaning that they always produce the same results, no matter how many times
// they are run

// Solution: Move the function that generates the user ID outside of the User_1 file and stub it

jest.mock("../src/generate_user_id.js", () => ({
  __esModule: true,
  default: jest.fn().mockReturnValue(1),
}));

describe("User Idempotency", () => {
  let user;

  beforeEach(() => {
    user = User();
  });

  it("should be able to login and logout successfully", () => {
    expect(user.id()).toEqual(1);
  });
});