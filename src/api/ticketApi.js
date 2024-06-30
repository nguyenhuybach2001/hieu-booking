import { ENDPOINTS } from "@/config/endpoint";
import axiosClient from "./axiosClient";

export const ticketApi = {
  searchVe: (data) => () => {
    return axiosClient.post(ENDPOINTS.SEARCH_VE, data);
  },

  cancelVe: (data) => () => {
    return axiosClient.post(ENDPOINTS.CANCEL_VE, data);
  },

  listVeInTrip: (data) => () => {
    return axiosClient.post(ENDPOINTS.LIST_VE_IN_TRIP, data);
  },

  listVe: () => () => {
    return axiosClient.post(ENDPOINTS.LIST_VE);
  },

  createVe: (data) => () => {
    return axiosClient.post(ENDPOINTS.CREATE_VE, data);
  },
};
