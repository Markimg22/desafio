import axios, { AxiosRequestHeaders } from 'axios';

import { HttpRequest, HttpResponse } from '../types';

export const axiosHttpClient = async ({
  url,
  token,
  method,
  data,
}: HttpRequest): Promise<HttpResponse> => {
  try {
    const headers: AxiosRequestHeaders = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    const response = await axios.request({
      baseURL: 'http://localhost:8080',
      url,
      headers,
      method,
      data,
    });
    return {
      statudCode: response.status,
      body: response.data,
    };
  } catch (error) {
    throw new Error(error as any);
  }
};
