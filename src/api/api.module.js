import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const getDepartments = async (data) => {
  const dt = await axios.get(`${REACT_APP_API_URI}/departments`, data);
  return dt.data;
};
