import { ENDPOINTS } from "@/config/endpoint";
import axiosClient from "./axiosClient";

export const gheApi = {
    getListSeat: (data) => () => {
        return axiosClient.post(ENDPOINTS.LIST_SEAT, data);
    },
};
