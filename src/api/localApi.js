import { ENDPOINTS } from "@/config/endpoint";
import axiosClient from "./axiosClient";

export const localApi = {
    deleteLocationArea: (data) => () => {
        return axiosClient.post(ENDPOINTS.DELETE_LOCATION_AREA, data);
    },
    getLocationTreeByCondition: (data) => () => {
        return axiosClient.post(ENDPOINTS.GET_LOCATION_TREE_BY_CONDITION, data);
    },
    getTreeLocation: (data) => () => {
        return axiosClient.post(ENDPOINTS.GET_TREE_LOCATION,data);
    },
    getTreeLocationByNode: (data) => () => {
        return axiosClient.post(ENDPOINTS.GET_TREE_LOCATION_BY_NODE, data);
    },
    insertLocationArea: (data) => () => {
        return axiosClient.post(ENDPOINTS.INSERT_LOCATION_AREA, data);
    },
    searchLocationArea: (data) => () => {
        return axiosClient.post(ENDPOINTS.SEARCH_LOCATION_AREA, data);
    },
    updateLocationArea: (data) => () => {
        return axiosClient.post(ENDPOINTS.UPDATE_LOCATION_AREA, data);
    },
};
