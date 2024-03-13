import "jest";
import User from "../src/user_3.js";

// This shows tests that are idempotent meaning that they always produce the same results, no matter how many times
// they are run

// Solution: Specify the user ID through dependency injection (i.e. pass it into User() constructor)

const user_id_generator = () => 1;

describe("User Idempotency", () => {
  let user;

  beforeEach(() => {
    user = User(user_id_generator);
  });

  it("should be able to login and logout successfully", () => {
    expect(user.id()).toEqual(1);
  });
});