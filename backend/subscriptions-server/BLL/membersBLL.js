import memberModel from "../models/memberModel.js";
import { getMembersFromAPI } from "../DAL/membersWS.js";

export const insertMembers = async () => {
  const { data: allMembers } = await getMembersFromAPI();

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

export const getMembers = async () => {
  return await memberModel.find({});
};

export const getMember = async (id) => {
  return await memberModel.findById(id);
};

export const createMember = async (member) => {
  const newMember = new memberModel(member);
  await newMember.save();
};

export const updateMember = async (id, member) => {
  return await memberModel.findByIdAndUpdate(id, member);
};

export const deleteMember = async (id) => {
  return await memberModel.findByIdAndDelete(id);
};
