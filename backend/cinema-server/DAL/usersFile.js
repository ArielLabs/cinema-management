import jsonfile from "jsonfile";

const usersFile = "data/users.json";

export const initialUsers = async (admin) => {
  await jsonfile.writeFile(usersFile, { users: [admin] }, { spaces: 2 });
};
