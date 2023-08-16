import type { IRequestParams } from '@/interfaces/IRequestParams';
import axios, { type AxiosPromise } from 'axios';

const PROTOCOL = import.meta.env.VITE_PROTOCOL;
const API_URL = import.meta.env.VITE_API_BASE_URL;
const PORT = import.meta.env.VITE_API_PORT;

const api = axios.create({
  baseURL: `${PROTOCOL}://${API_URL}:${PORT}`
});

export const getRequest = async (route: string, params: IRequestParams<unknown> | null = null, apiUse = api) : AxiosPromise => {
  const response = await apiUse.get(`${route}`, { params });

  return response;
};