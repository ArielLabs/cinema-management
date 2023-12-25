import jsonfile from "jsonfile";

const permissionsFile = "data/permissions.json";

export const initialPermissions = async (admin) => {
  await jsonfile.writeFile(permissionsFile, { permissions: [admin] });
};
