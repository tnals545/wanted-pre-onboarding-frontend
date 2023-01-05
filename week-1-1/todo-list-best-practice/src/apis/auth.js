import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

const signUpApi = async (body) => {
  const { data } = await apiClient.post('/auth/signup', body);
  return data;
};

const logInApi = async (body) => {
  const { data } = await apiClient.post('/auth/signIn', body);
  return data;
};

export { apiClient, logInApi, signUpApi };
