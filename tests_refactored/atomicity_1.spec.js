import "jest";
import User from "../src/user_1.js";

// This shows tests that are atomic meaning they can be run in any order and still produce the same result

// Solution: Recreate the user object for each test so that they do not affect other tests

describe("User Atomicity", () => {
  let user;

  // Note: you could create user at the beginning of every it block but if its common functionality, just move it into
  // a beforeEach
  beforeEach(() => {
    user = User();
  });

  it("should be able to login and logout successfully", () => {
    user.login();
    expect(user.isLoggedIn()).toBe(true);

    user.logout();
    expect(user.isLoggedIn()).toBe(false);

    user.login();
    expect(user.isLoggedIn()).toBe(true);
  });

  it("should initially be logged out", () => {
    expect(user.isLoggedIn()).toBe(false);
  });
});
