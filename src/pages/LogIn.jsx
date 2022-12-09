import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { postSignIn } from "components/api";
import { Div } from "styles/Div";
import { Button } from "styles/Button";
import { Input } from "styles/Input";
import { Span } from "styles/Span";

const LogIn = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    isValidEmail: false,
    isValidPassword: false,
  });
  const [errMessage, setErrMessage] = useState({
    isErr: false,
    message: "",
  });

  const { email, password, isValidEmail, isValidPassword } = inputValue;

  const emailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  const passwordRegex = /.{8}/g;

  const navigate = useNavigate();

  const handleInput = (e) => {
    const {
      target: { type, value },
    } = e;
    setInputValue((prev) => {
      return {
        ...prev,
        [type]: value,
        isValidEmail:
          type === "email" ? emailRegex.test(value) : prev.isValidEmail,
        isValidPassword:
          type === "password"
            ? passwordRegex.test(value)
            : prev.isValidPassword,
      };
    });
    setErrMessage({
      isErr: false,
      message: "",
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    postSignIn({ email, password })
      .then((res) => {
        console.log("response:", res);
        if (res.status === 200) {
          localStorage.setItem("loginToken", res.data.access_token);
          navigate("/todo");
        }
      })
      .catch((err) => {
        console.error(err);
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
      });
  };

  return (
    <>
      <Div purpose="login" className="logo">
        <Span size="XXLarge" bold="thick">
          ToDo
        </Span>
      </Div>
      <form onSubmit={onSubmit} className="signinInput">
        <Div purpose="login" className="emailInput">
          <Span>이메일</Span>
          <Input
            type="email"
            onChange={handleInput}
            placeholder="이메일을 입력해주세요."
          />
        </Div>

        <Div purpose="login" className="passwordInput">
          <Span>비밀번호</Span>
          <Input
            type="password"
            onChange={handleInput}
            placeholder="비밀번호를 입력해주세요."
          />
        </Div>

        <Div purpose="login" className="errMessage">
          {errMessage.isErr && (
            <Span size="medium" color="red" bgColor="bright">
              {errMessage.message}
            </Span>
          )}
        </Div>

        <Div purpose="login" className="loginBtn">
          <Button
            type="submit"
            disabled={!(isValidEmail && isValidPassword)}
            color="bgMagenta"
            size="large"
            bold="thick"
          >
            로그인
          </Button>
        </Div>

        <Div purpose="login" className="signupSpan">
          <Span>
            아직 계정이 없으신가요?{" "}
            <Link to="/sign_up">
              <Span color="blue" bgColor="bright" bold="thick">
                회원가입
              </Span>
            </Link>
          </Span>
        </Div>
      </form>
    </>
  );
};

export default LogIn;
