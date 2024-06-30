import { ENDPOINTS } from "@/config/endpoint";
import axiosClient from "./axiosClient";

export const routeApi = {
  createRoute: (data)=>() => {
    return axiosClient.post(ENDPOINTS.ADD_ROUTE, data);
  },

  getAllRoutes: ()=>()  => {
    return axiosClient.post(ENDPOINTS.LIST_ROUTE);
  },

  updateRoute: (data) =>() => {
    return axiosClient.post(ENDPOINTS.UPDATE_ROUTE, data);
  },

  deleteRoute: (routeId)=>()  => {
    return axiosClient.post(`${ENDPOINTS.DELETE_ROUTE}/${routeId}`);
  },
};
