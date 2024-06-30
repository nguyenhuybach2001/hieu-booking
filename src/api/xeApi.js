import { ENDPOINTS } from "@/config/endpoint";
import axiosClient from "./axiosClient";

export const xeApi = {

  createVehicle: (data) => () => {
    return axiosClient.post(ENDPOINTS.ADD_XE, data);
  },

  updateVehicle: (data) => () => {
    return axiosClient.post(ENDPOINTS.UPDATE_XE, data);
  },

  deleteVehicle: (data) => () => {
    return axiosClient.post(ENDPOINTS.DELETE_XE, data);
  },

  getAllVehicles: () => () => {
    return axiosClient.post(ENDPOINTS.GET_ALL_XE);
  },
};
