import axios from "axios";
import { toast } from "react-toastify";

const BASE_URL = "http://192.168.0.105:8080/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleRequestError = (error) => {
  toast.error(error.message);
};

export const get = async (url, params = {}) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const post = async (url, data = {}) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const put = async (url, data = {}) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};

export const del = async (url, data = {}) => {
  try {
    const response = await axiosInstance.delete(url, data);
    return response.data;
  } catch (error) {
    handleRequestError(error);
  }
};
