import userModel from "../models/userModel.js";
import { readUsers, writeUsers } from "../DAL/usersFile.js";
import { readPermissions, writePermissions } from "../DAL/permissionsFile.js";
import { personalInfo, permissions } from "../constants/admin.js";
import { ADMIN_EMAIL, ADMIN_PASSWORD } from "../environment.js";
import { sendEmail } from "../services/mail/mail.js";
import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";

export const insertAdmin = async () => {
  const saltRounds = 10;
  const password = await hash(ADMIN_PASSWORD, saltRounds);

  const admin = {
    Email: ADMIN_EMAIL,
    Password: password,
  };

  const userAdmin = new userModel(admin);
  const { _id } = await userAdmin.save();

  const detailsAdmin = {
    _id,
    ...personalInfo,
  };

  const permissionsAdmin = {
    _id,
    Permissions: permissions,
  };

  await Promise.all([
    writeUsers([detailsAdmin]),
    writePermissions([permissionsAdmin]),
  ]);
};

export const hasUsers = async () => {
  const usersCount = await userModel.countDocuments();
  return usersCount > 0;
};

export const getUsers = async () => {
  const allUsersDB = await userModel.find();
  const { users: allUsersFile } = await readUsers();
  const { permissions: allUsersPermissions } = await readPermissions();

  const usersFullData = [];
  for (const user of allUsersDB) {
    const userDetails = allUsersFile.find((u) => u._id == user._id);
    const { Permissions } = allUsersPermissions.find((u) => u._id == user._id);
    const { movies, subscriptions } = Permissions;

    const moviesPermissions = movies.map((permission) => {
      return {
        id: uuidv4(),
        permission,
      };
    });
    const subscriptionsPermissions = subscriptions.map((permission) => {
      return {
        id: uuidv4(),
        permission,
      };
    });

    usersFullData.push({
      ...userDetails,
      Email: user.Email,
      moviesPermissions,
      subscriptionsPermissions,
    });
  }
  return usersFullData;
};

export const getUser = async (id) => {
  const { Email } = await userModel.findById(id);
  const [{ users: allUsers }, { permissions: allUsersPermissions }] =
    await Promise.all([readUsers(), readPermissions()]);

  const userDetails = allUsers.find((user) => user._id === id);
  const { Permissions } = allUsersPermissions.find((user) => user._id === id);

  const permissionList = ["View", "Create", "Delete", "Edit"];

  const moviesPermissions = permissionList.map((p) => {
    return {
      permission: p,
      checked: Permissions.movies.includes(p),
    };
  });

  const subscriptionsPermissions = permissionList.map((p) => {
    return {
      permission: p,
      checked: Permissions.subscriptions.includes(p),
    };
  });

  return {
    ...userDetails,
    Email,
    moviesPermissions,
    subscriptionsPermissions,
  };
};

export const getUserPermissions = async (id) => {
  const { users } = await readUsers();
  const userDetails = users.find((u) => u._id === id.toString());

  const { permissions } = await readPermissions();
  const { Permissions: userPermissions } = permissions.find(
    (p) => p._id === id.toString()
  );

  return {
    role: userDetails.Role,
    fullName: `${userDetails.FirstName} ${userDetails.LastName}`,
    permissions: userPermissions,
  };
};

export const createUser = async (newUser) => {
  const { FirstName, LastName, Email, SessionTimeOut, Permissions } = newUser;
  const tempPassword = await hash(uuidv4(), 10);

  const user = await userModel.findOne({ Email: Email });
  if (user) {
    throw new Error("User already exists");
  }

  const docUser = new userModel({ Email: Email, Password: tempPassword });
  const { _id } = await docUser.save();

  const detailsUser = {
    _id,
    FirstName,
    LastName,
    SessionTimeOut,
    Role: "User",
    CreatedDate: new Date().toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
  };

  const detailsPermissions = {
    _id,
    Permissions,
  };

  const [{ users: allUsers }, { permissions: allUsersPermissions }] =
    await Promise.all([readUsers(), readPermissions()]);

  allUsers.push(detailsUser);
  allUsersPermissions.push(detailsPermissions);

  await Promise.all([
    writeUsers(allUsers),
    writePermissions(allUsersPermissions),
  ]);

  const fullname = `${FirstName} ${LastName}`;
  await sendEmail(Email, fullname);

  return "Saved successfully!";
};

export const updateUser = async (userId, detailsUser) => {
  const { Email } = await userModel.findById(userId);
  if (Email !== detailsUser.Email) {
    const fullname = `${detailsUser.FirstName} ${detaild.LastName}`;
    await userModel.findByIdAndUpdate(userId, { Email: detailsUser.Email });
    await sendEmail(detailsUser.Email, fullname);
  }

  const [{ users: allUsers }, { permissions: allUsersPermissions }] =
    await Promise.all([readUsers(), readPermissions()]);

  const userIdx = allUsers.findIndex((user) => user._id === userId);
  const userPermissionsIdx = allUsersPermissions.findIndex(
    (user) => user._id === userId
  );

  const { CreatedDate } = allUsers[userIdx];

  const updatedUser = {
    _id: userId,
    FirstName: detailsUser.FirstName,
    LastName: detailsUser.LastName,
    SessionTimeOut: detailsUser.SessionTimeOut,
    Role: detailsUser.Role,
    CreatedDate,
  };

  const updatedUserPermissions = {
    _id: userId,
    Permissions: detailsUser.Permissions,
  };

  allUsers[userIdx] = updatedUser;
  allUsersPermissions[userPermissionsIdx] = updatedUserPermissions;

  await Promise.all([
    writeUsers(allUsers),
    writePermissions(allUsersPermissions),
  ]);

  return "Updated successfully!";
};

export const deleteUser = async (userId) => {
  await userModel.findByIdAndDelete(userId);

  const [{ users: allUsers }, { permissions: allUsersPermissions }] =
    await Promise.all([readUsers(), readPermissions()]);

  const updatedUsers = allUsers.filter((user) => user._id !== userId);

  const updatedPermissionsUsers = allUsersPermissions.filter(
    (user) => user._id !== userId
  );

  await Promise.all([
    writeUsers(updatedUsers),
    writePermissions(updatedPermissionsUsers),
  ]);
  return "Deleted successfully!";
};
