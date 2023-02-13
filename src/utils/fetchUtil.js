import axios from 'axios';

export const axiosMethod = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const axiosRequest = (
  url,
  method = axiosMethod.GET,
  token = '',
  params,
  data = null
) => {
  const axiosConfig = {
    url,
    method,
    headers: {},
    params,
    withCredentials: true,
  };

  if (token) {
    axiosConfig.headers.Authorization = `Bearer ${token}`;
  }
  axiosConfig.data = data;
  return axios(axiosConfig);
};