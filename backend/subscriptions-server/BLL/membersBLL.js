import memberModel from "../models/memberModel.js";
import { getRandomPhone } from "../utils/members.js";
import { getMembersFromAPI } from "../DAL/membersWS.js";

export const insertMembers = async () => {
  const { data: allMembers } = await getMembersFromAPI();

  const members = allMembers.map((member) => {
    return {
      Name: member.name,
      Email: member.email,
      City: member.address.city,
      Phone: getRandomPhone(),
    };
  });

  await memberModel.insertMany(members);
};

export const hasMembers = async () => {
  const countMembers = await memberModel.countDocuments({});
  return countMembers > 0;
};

export const getMembers = async () => {
  return await memberModel.aggregate([
    {
      $lookup: {
        from: "subscriptions",
        localField: "_id",
        foreignField: "MemberId",
        as: "subscriptions",
      },
    },
    {
      $unwind: {
        path: "$subscriptions",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "screenings",
        localField: "subscriptions.Screenings",
        foreignField: "_id",
        as: "screenings",
      },
    },
    {
      $unwind: {
        path: "$screenings",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $lookup: {
        from: "movies",
        localField: "screenings.MovieId",
        foreignField: "_id",
        as: "screenings.movie",
        pipeline: [
          {
            $project: {
              Name: 1,
            },
          },
        ],
      },
    },
    {
      $unwind: {
        path: "$screenings.movie",
        preserveNullAndEmptyArrays: true,
      },
    },
    {
      $group: {
        _id: "$_id",
        Name: { $first: "$Name" },
        Email: { $first: "$Email" },
        City: { $first: "$City" },
        Phone: { $first: "$Phone" },
        Screenings: {
          $push: {
            _id: "$screenings._id",
            Movie: "$screenings.movie",
            Date: "$screenings.Date",
            Hall: "$screenings.Hall",
            Hour: "$screenings.Hour",
          },
        },
      },
    },
    {
      $sort: {
        _id: 1,
      },
    },
  ]);
};

export const getMember = async (id) => {
  return await memberModel.findById(id);
};

export const createMember = async (member) => {
  const newMember = new memberModel(member);
  await newMember.save();
  return "Saved successfully!";
};

export const updateMember = async (id, member) => {
  await memberModel.findByIdAndUpdate(id, member);
  return "Updated successfully!";
};

export const deleteMember = async (id) => {
  return await memberModel.findByIdAndDelete(id);
};
