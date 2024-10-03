import axiosInstance from "./axiosInstance";

export const getEvents = async () => {
  try {
    const response = await axiosInstance.get("/event");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const getEvent = async (id) => {
  try {
    const response = await axiosInstance.get(`/event/${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export const createEvent = async (data) => {
  try {
    const response = await axiosInstance.post("/event", data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
