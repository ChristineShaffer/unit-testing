import generate_user_id from "./generate_user_id.js";

const User = () => {
  let loggedIn = false;
  let userId = generate_user_id();

  const login = () => {
    loggedIn = true;
  }

  const logout = () => {
    loggedIn = false;
  }

  const isLoggedIn = () => {
    return loggedIn;
  }

  const id = () => {
    return userId;
  }

  return {
    login,
    logout,
    isLoggedIn,
    id,
  };
}

export default User;