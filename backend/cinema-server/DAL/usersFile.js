import jsonfile from "jsonfile";

const usersFile = "data/users.json";

export const initialUsers = async (admin) => {
  await jsonfile.writeFile(usersFile, { users: [admin] }, { spaces: 2 });
};

export const readUsers = async () => {
  return await jsonfile.readFile(usersFile);
};

export const writeUser = async (user) => {
  const { users: allUsers } = await jsonfile.readFile(usersFile);

  allUsers.push(user);
  await jsonfile.writeFile(usersFile, { users: allUsers }, { spaces: 2 });
};
