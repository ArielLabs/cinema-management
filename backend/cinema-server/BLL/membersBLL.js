import axios from "axios";
import { SUBSCRIPTIONS_API } from "../environment.js";

export const getMembers = async () => {
  const response = await axios.get(`${SUBSCRIPTIONS_API}/members`);
  const { message: members } = response.data;
  return members;
};

export const getMember = async (id) => {
  const response = await axios.get(`${SUBSCRIPTIONS_API}/members/${id}`);
  const { message: member } = response.data;
  return member;
};

export const createMember = async (member) => {
  const response = await axios.post(`${SUBSCRIPTIONS_API}/members`, member);
  const { message } = response.data;
  return message;
};
