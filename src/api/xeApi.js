import { ENDPOINTS } from "@/config/endpoint";
import axiosClient from "./axiosClient";

export const xeApi = {
  getDetailHostByHostId: () => () => {
    return axiosClient.post(ENDPOINTS.GET_DETAIL_HOST);
  },

  createXe: () => () => {
    return axiosClient.post(ENDPOINTS.CREATE_HOST);
  },
  updateRoom: () => (data) => {
    return axiosClient.post(ENDPOINTS.UPDATE_ROOM, data);
  },
  getRoomByHostId: () => () => {
    return axiosClient.get(ENDPOINTS.GET_ROOM_BY_HOST_ID);
  },
  addRoom: () => (data) => {
    return axiosClient.post(ENDPOINTS.ADD_ROOM, data);
  },
};
