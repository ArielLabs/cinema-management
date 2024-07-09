import { axiosInstance } from "./http";
import { displayAlert } from "./alerts";
import { redirect } from "react-router-dom";

export const fetchUser = async ({ params }) => {
  const { id } = params;
  try {
    const { data } = await axiosInstance.get(`users/${id}`);
    return data;
  } catch (err) {
    displayAlert("error", err.response.data.message);
    return redirect("/login");
  }
};

export const fetchMovie = async ({ params }) => {
  const { id } = params;
  try {
    const { data } = await axiosInstance.get(`movies/${id}`);
    return data;
  } catch (err) {
    displayAlert("error", err.response.data.message);
    return redirect("/login");
  }
};

export const fetchMember = async ({ params }) => {
  const { id } = params;
  try {
    const { data } = await axiosInstance.get(`members/${id}`);
    return data;
  } catch (err) {
    displayAlert("error", err.response.data.message);
    return redirect("/login");
  }
};
