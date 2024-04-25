import jsonfile from "jsonfile";

const usersFile = "data/users.json";

export const readUsers = async () => {
  return await jsonfile.readFile(usersFile);
};

export const writeUsers = async (users) => {
  await jsonfile.writeFile(usersFile, { users }, { spaces: 2 });
};
