import usersData from "../Data/users.json";

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
