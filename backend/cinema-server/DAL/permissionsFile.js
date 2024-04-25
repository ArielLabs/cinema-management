import jsonfile from "jsonfile";

const permissionsFile = "data/permissions.json";

export const readPermissions = async () => {
  return await jsonfile.readFile(permissionsFile);
};

export const writePermissions = async (usersPermissions) => {
  await jsonfile.writeFile(
    permissionsFile,
    { permissions: usersPermissions },
    { spaces: 2 }
  );
};
