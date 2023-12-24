import memberModel from "../models/memberModel.js";
import { getMembers } from "../DAL/membersWS.js";

export const insertMembers = async () => {
  const { data: allMembers } = await getMembers();

  const members = allMembers.map((member) => {
    return {
      Name: member.name,
      Email: member.email,
      City: member.address.city,
    };
  });

  return await memberModel.insertMany(members);
};

export const hasMembers = async () => {
  const countMembers = await memberModel.countDocuments({});
  if (countMembers > 0) {
    return true;
  }
  return false;
};
