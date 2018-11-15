import { ACTIONS as TYPES } from "./types";
import request from "@/plugins/request";

export default {
  async [TYPES.GET_ADD_ONS]() {
    const response = await request.get("/add-ons");

    return response.data;
  },
  async [TYPES.GET_FLAVORS]() {
    const response = await request.get("/flavors");

    return response.data;
  },
  async [TYPES.GET_SIZES]() {
    const response = await request.get("/sizes");

    return response.data;
  }
};
