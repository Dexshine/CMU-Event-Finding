import axiosInstance from "./axiosInstance";

export const getProfile = async () => {
  try {
    const res = await axiosInstance.get(`${baseUrl}/users/profile`);

    return res.data;
  } catch (error) {
    console.error("Get Profile error:", error);
  }
};
