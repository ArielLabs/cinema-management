import axios from "axios";

const membersURL = "https://jsonplaceholder.typicode.com/users";

export const getMembersFromAPI = async () => {
  return axios.get(membersURL);
};
