import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "https://api.wisey.app/api/v1";

axios.defaults.baseURL = `${BASE_URL}`;
const setToken = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getToken = async () => {
  try {
    const response = await axios.get("/auth/anonymous?platform=subscriptions");
    setToken(response.data.token);
  } catch (error) {
    toast.error(error.message);
  }
};



export const getCourses = async () => {
  try {
    await getToken();
    const response = await axios.get("/core/preview-courses");
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};

export const getCourseById = async (id) => {
  try {
    await getToken();
    const response = await axios.get(`/core/preview-courses/${id}`);
    return response.data;
  } catch (error) {
    toast.error(error.message);
  }
};
