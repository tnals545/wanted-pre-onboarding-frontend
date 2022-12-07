import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { postSignIn } from "components/api";

const LogIn = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const [errMessage, setErrMessage] = useState({
    isErr: false,
    message: "",
  });

  const { email, password } = inputValue;

  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const isValidEmail = emailRegex.test(email);
  const isValidPassword = password.length >= 8;
  const getIsActive = isValidEmail && isValidPassword === true;

  const navigate = useNavigate();

  const handleInput = (e) => {
    const {
      target: { name, value },
    } = e;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postSignIn({ email, password }, navigate, setErrMessage);
  };

  return (
    <>
      <form onSubmit={onSubmit} className="signinInput">
        <div className="emailInput">
          <div className="inputMessage">이메일</div>
          <input name="email" onChange={handleInput} />
        </div>
        <div className="passwordInput">
          <div className="inputMessage">비밀번호</div>
          <input type="password" name="password" onChange={handleInput} />
        </div>
        <span>{errMessage.isErr && errMessage.message}</span>
        <input
          className={
            getIsActive ? "signinButtonAction" : "signinButtonInaction"
          }
          type="submit"
          value="로그인"
        />
      </form>
    </>
  );
};

export default LogIn;
