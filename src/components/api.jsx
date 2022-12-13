import axios from "axios";

const BASE_URL = "https://pre-onboarding-selection-task.shop/";

export const postSignUp = async (data) => {
  const { email, password } = data;
  return await axios({
    method: "post",
    url: `${BASE_URL}auth/signup`,
    headers: { "Content-Type": `application/json` },
    data: { email, password },
  });
};

export const postSignIn = async (data) => {
  const { email, password } = data;

  return await axios({
    method: "post",
    url: `${BASE_URL}auth/signin`,
    headers: { "Content-Type": `application/json` },
    data: { email, password },
  });
};

export const createTodo = async (todo) => {
  const ACCESS_TOKEN = localStorage.getItem("loginToken");

  return await axios({
    method: "post",
    url: `${BASE_URL}todos`,
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": `application/json`,
    },
    data: { todo },
  });
};

export const getTodo = async () => {
  const ACCESS_TOKEN = localStorage.getItem("loginToken");

  return await axios({
    method: "get",
    url: `${BASE_URL}todos`,
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
};

export const updateTodo = async (data) => {
  const ACCESS_TOKEN = localStorage.getItem("loginToken");
  const { id, isCompleted, todo } = data;

  return await axios({
    method: "put",
    url: `${BASE_URL}todos/${id}`,
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-Type": `application/json`,
    },
    data: { todo, isCompleted },
  });
};

export const deleteTodo = async (data) => {
  const ACCESS_TOKEN = localStorage.getItem("loginToken");
  const { id } = data;

  return await axios({
    method: "delete",
    url: `${BASE_URL}todos/${id}`,
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  });
};
