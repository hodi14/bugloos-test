import usersData from "../Data/users.json";

// this util function allows us to search for a user via their email and password and return if they have wrong password, don't exist or the information is correct.

const findUser = (inputUser) => {
  const users = JSON.parse(localStorage.getItem("users")) || usersData;
  const foundUser = users?.find((user) => user.email === inputUser.email);

  if (foundUser) {
    if (foundUser.password === inputUser.password) return foundUser;

    return "password";
  }
  return false;
};

export default findUser;
