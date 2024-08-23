import axios from "axios";
import { getSubscriptionsApi } from "../utils/api.js";

const SUBSCRIPTIONS_API = getSubscriptionsApi();

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

export const updateMember = async (id, member) => {
  const response = await axios.put(`${SUBSCRIPTIONS_API}/members/${id}`, member);
  const { message } = response.data;
  return message;
};

export const deleteMember = async (id) => {
  const response = await axios.delete(`${SUBSCRIPTIONS_API}/members/${id}`);
  const { message } = response.data;
  return message;
};
