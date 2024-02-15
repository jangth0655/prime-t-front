import axios, { AxiosError, AxiosResponse } from "axios";
import HttpError from "./httpError";
import { cookies } from "next/headers";

export const api = axios.create({
  baseURL: "/api/v1",
});

api.interceptors.request.use(
  async (config) => {
    /* const beforeAccessToken = getStorage(ACCESS_TOKEN);

    if (beforeAccessToken) {
      config.headers.Authorization = `Bearer ${beforeAccessToken}`;
    } */
    return config;
  },
  (error) => {
    if (error instanceof AxiosError) {
      const { response } = error;
      const httpError = new HttpError(response?.status, response?.statusText)
        .errorData;
      throw httpError;
    }
    throw new Error("네트워크 통신 에러 발생");
  }
);

api.interceptors.response.use((response: AxiosResponse) => {
  return response;
});
