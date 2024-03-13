import "jest";
import User from "../src/user_1.js";

// This shows tests that are idempotent meaning that they always produce the same results, no matter how many times
// they are run

// Solution: Validate the properties of the user ID instead of the specifics

describe("User Idempotency", () => {
  let user;

  beforeEach(() => {
    user = User();
  });

  it("should be able to login and logout successfully", () => {
    const userId = user.id();
    expect(typeof userId).toBe("number");
    expect(userId).toBeGreaterThanOrEqual(1);
    expect(userId).toBeLessThanOrEqual(10);
  });
});