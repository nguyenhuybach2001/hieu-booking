import { ENDPOINTS } from "@/config/endpoint";
import axiosClient from "./axiosClient";

export const tripApi = {

  listTrips: () => () => {
    return axiosClient.post(ENDPOINTS.LIST_TRIP);
  },

  searchTrips: (data) => () => {
    return axiosClient.post(ENDPOINTS.SEARCH_TRIP, data);
  },

  createTrip: (data) => () => {
    return axiosClient.post(ENDPOINTS.CREATE_TRIP, data);
  },

  updateStatusTrip: (data) => () => {
    return axiosClient.post(ENDPOINTS.UPDATE_STATUS_TRIP, data);
  },

  updateTrip: (data) => () => {
    return axiosClient.post(ENDPOINTS.UPDATE_TRIP, data);
  },

  deleteTrip: (data) => () => {
    return axiosClient.post(ENDPOINTS.DELETE_TRIP, data);
  },
};
