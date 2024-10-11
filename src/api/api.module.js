import axios from "axios";
const { REACT_APP_API_URI } = process.env;

export const loginRequest = async (data) => {
  const dt = await axios.post(`${REACT_APP_API_URI}/user/auth`, data);
  return dt.data;
};
