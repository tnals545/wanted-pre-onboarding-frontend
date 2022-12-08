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
  })
    .then((res) => {
      if (res.status === 201) {
        console.log("createTodo:", res);
      }
    })
    .catch((err) => {
      console.error("createTodo:", err);
    });
};

export const getTodo = async (setTodoData) => {
  const ACCESS_TOKEN = localStorage.getItem("loginToken");

  await axios({
    method: "get",
    url: `${BASE_URL}todos`,
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
  })
    .then((res) => setTodoData(res.data))
    .catch((err) => console.error("getTodo:", err));
};

export const updateTodo = async (data) => {
  const ACCESS_TOKEN = localStorage.getItem("loginToken");
  const { id, todoText, isCompleted } = data;

  try {
    await axios({
      method: "put",
      url: `${BASE_URL}todos/${id}`,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
        "Content-Type": `application/json`,
      },
      data: {
        todo: todoText,
        isCompleted: isCompleted,
      },
    }).then((res) => {
      if (res.status === 200) {
        console.log("updateTodo:", res);
      }
    });
  } catch (err) {
    console.error("updateTodo:", err);
  }
};

export const deleteTodo = async (data) => {
  const ACCESS_TOKEN = localStorage.getItem("loginToken");
  const { id } = data;

  try {
    await axios({
      method: "delete",
      url: `${BASE_URL}todos/${id}`,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }).then((res) => {
      if (res.status === 204) {
        console.log("deleteTodo:", res);
      }
    });
  } catch (err) {
    console.error("deleteTodo:", err);
  }
};
