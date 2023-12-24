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

  await memberModel.insertMany(members);
};

export const hasMembers = async () => {
  const countMembers = await memberModel.countDocuments({});
  return countMembers > 0;
};
