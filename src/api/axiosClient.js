import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
});
axiosClient.interceptors.request.use(async (config) => {
  const access_token = localStorage.getItem("access_token");

  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (!error.response) {
      console.error("Unknown error:", error.message);
      return;
    }

    const { status, data } = error.response;
    if (status >= 500) {
      // TODO: Show server error message
    } else if (400 <= status && status < 500) {
      throw data;
    }
  }
);
export default axiosClient;
