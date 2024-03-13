const User = () => {
  let loggedIn = false;
  let userId = Math.floor(Math.random() * 10) + 1;

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