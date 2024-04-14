import jsonfile from "jsonfile";

const permissionsFile = "data/permissions.json";

export const initialPermissions = async (admin) => {
  await jsonfile.writeFile(
    permissionsFile,
    { permissions: [admin] },
    { spaces: 2 }
  );
};

export const readPermissions = async () => {
  return await jsonfile.readFile(permissionsFile);
};

export const writePermissions = async (user) => {
  const { permissions: allUsersPermissions } = await jsonfile.readFile(
    permissionsFile
  );
  allUsersPermissions.push(user);

  await jsonfile.writeFile(
    permissionsFile,
    { permissions: allUsersPermissions },
    { spaces: 2 }
  );
};
