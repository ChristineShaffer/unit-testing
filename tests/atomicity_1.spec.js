import "jest";
import User from "../src/user_1.js";

// This shows tests that are not atomic meaning they are dependent on tests being run before them and cannot be run in
// any order within the test suite

const user = User();

describe("User Atomicity", () => {
  // TODO: If we put this second, the suite fails
  it("should initially be logged out", () => {
    expect(user.isLoggedIn()).toBe(false);
  });

  it("should be able to login and logout successfully", () => {
    user.login();
    expect(user.isLoggedIn()).toBe(true);

    user.logout();
    expect(user.isLoggedIn()).toBe(false);

    user.login();
    expect(user.isLoggedIn()).toBe(true);
  });
});
