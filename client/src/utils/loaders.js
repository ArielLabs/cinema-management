import { axiosInstance } from "./http";
import { displayAlert } from "./alerts";
import { redirect } from "react-router-dom";

export const fetchUser = async ({ params }) => {
  const { id } = params;
  try {
    const response = await axiosInstance.get(`users/${id}`);
    return response.data;
  } catch (err) {
    displayAlert("error", err.response.data.message);
    return redirect("/login");
  }
};
