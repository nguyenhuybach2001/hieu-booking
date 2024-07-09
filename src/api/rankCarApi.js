import { ENDPOINTS } from "@/config/endpoint";
import axiosClient from "./axiosClient";

export const rankCarApi = {
  createRoute: (data)=>() => {
    return axiosClient.post(ENDPOINTS.ADD_ROUTE, data);
  },

  getListRankCar: ()=>()  => {
    return axiosClient.post(ENDPOINTS.LIST_RANK_CAR);
  },

  updateRoute: (data) =>() => {
    return axiosClient.post(ENDPOINTS.UPDATE_ROUTE, data);
  },

  deleteRoute: (routeId)=>()  => {
    return axiosClient.post(`${ENDPOINTS.DELETE_ROUTE}/${routeId}`);
  },
};
