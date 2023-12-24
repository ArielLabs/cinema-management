import axios from "axios";

const membersURL = "https://jsonplaceholder.typicode.com/users";

export const getMembers = async () => {
  return axios.get(membersURL);
};
