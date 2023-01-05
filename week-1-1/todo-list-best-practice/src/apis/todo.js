import { apiClient } from './auth';
import setHeaderToken from '../util/auth';

const createTodoApi = async (body) => {
  setHeaderToken();
  const { data } = await apiClient.post('/todos', body);
  return data;
};

const getTodoApi = async () => {
  setHeaderToken();
  const { data } = await apiClient.get('/todos');
  return data;
};

const updateTodoApi = async (body, id) => {
  setHeaderToken();
  const { data } = await apiClient.put(`/todos/${id}`, body);
  return data;
};

const deleteTodoApi = async (id) => {
  setHeaderToken();
  const { data } = await apiClient.delete(`/todos/${id}`);
  return data;
};

export { createTodoApi, getTodoApi, updateTodoApi, deleteTodoApi };
