import { apiClient } from '../apis/auth';

const setHeaderToken = () => {
  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    apiClient.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    delete apiClient.defaults.headers.common.Authorization;
  }
};

export default setHeaderToken;
