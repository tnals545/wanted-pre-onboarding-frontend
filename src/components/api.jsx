import axios from "axios";

const BASE_URL = "https://pre-onboarding-selection-task.shop/";

export const postSignUp = async (data, navigate, setErrMessage) => {
  const { email, pw } = data;
  try {
    await axios({
      method: "post",
      url: `${BASE_URL}auth/signup`,
      headers: { "Content-Type": "application/json" },
      data: {
        email,
        pw,
      },
    }).then((res) => {
      console.log("response:", res);
      if (res.status === 201) {
        navigate("/");
      }
    });
  } catch (err) {
    console.error(err);
    if (err.response.status === 400) {
      setErrMessage({
        isErr: true,
        message: "이미 존재하는 이메일입니다.",
      });
    }
  }
};

export const postSignIn = async (data, navigate, setErrMessage) => {
  const { email, pw } = data;

  try {
    await axios({
      method: "post",
      url: `${BASE_URL}auth/signin`,
      headers: { "Content-Type": "application/json" },
      data: {
        email,
        pw,
      },
    }).then((res) => {
      console.log("response:", res);
      if (res.status === 200) {
        localStorage.setItem("loginToken", res.data.access_token);
        navigate("/todo");
      }
    });
  } catch (err) {
    if (err.response.status === 401) {
      setErrMessage({
        isErr: true,
        message: "이메일 또는 비밀번호를 확인해주세요.",
      });
    } else if (err.response.status === 404) {
      setErrMessage({
        isErr: true,
        message: "로그인 정보가 시스템에 있는 계정과 일치하지 않습니다.",
      });
    }
  }
};

export const createTodo = async (data) => {
  const { todoText } = data;
  try {
    await axios({
      method: "post",
      url: `${BASE_URL}todos`,
      headers: {
        Authorization: "Bearer access_token",
        "Content-Type": "application/json",
      },
      data: {
        todoText,
      },
    }).then((res) => {
      console.log("response:", res);
      if (res.status === 201) {
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const getTodo = async () => {
  try {
    await axios({
      method: "get",
      url: `${BASE_URL}todos`,
      headers: {
        Authorization: "Bearer access_token",
      },
    }).then((res) => {
      console.log("response:", res);
      if (res.status === 200) {
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const updateTodo = async (data) => {
  const { todoText, isCompleted } = data;
  try {
    await axios({
      method: "put",
      url: `${BASE_URL}todos/:id`,
      headers: {
        Authorization: "Bearer access_token",
        "Content-Type": "application/json",
      },
      data: {
        todoText,
        isCompleted,
      },
    }).then((res) => {
      console.log("response:", res);
      if (res.status === 200) {
      }
    });
  } catch (err) {
    console.error(err);
  }
};

export const deleteTodo = async () => {
  try {
    await axios({
      method: "put",
      url: `${BASE_URL}todos/:id`,
      headers: {
        Authorization: "Bearer access_token",
      },
    }).then((res) => {
      console.log("response:", res);
      if (res.status === 204) {
      }
    });
  } catch (err) {
    console.error(err);
  }
};
