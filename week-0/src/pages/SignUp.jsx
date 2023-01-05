import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { postSignUp } from "components/api";
import Title from "components/Title";

import { Button } from "styles/Button";
import { Container } from "styles/Container";
import { Div } from "styles/Div";
import { Input } from "styles/Input";
import { Span } from "styles/Span";

const SignUp = () => {
  // 이메일 상태
  const [emailState, setEmailState] = useState({
    email: "",
    emailMessage: "",
    isEmail: false,
  });
  // 비밀번호 상태
  const [pwState, setPwState] = useState({
    pw: "",
    pwMessage: "",
    isPw: false,
  });
  // 비밀번호 확인 상태
  const [pwConfirmState, setPwConfirmState] = useState({
    pwConfirm: "",
    pwConfirmMessage: "",
    isPwConfirm: false,
  });
  // 회원가입 에러 상태
  const [errMessage, setErrMessage] = useState({
    isErr: false,
    message: "",
  });

  const { email, emailMessage, isEmail } = emailState;
  const { pw, pwMessage, isPw } = pwState;
  const { pwConfirm, pwConfirmMessage, isPwConfirm } = pwConfirmState;
  const { isErr, message } = errMessage;

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    postSignUp({ email, password: pw })
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
        }
      })
      .catch((err) => {
        console.error(err);
        if (err.response.status === 400) {
          setErrMessage({
            isErr: true,
            message: "이미 존재하는 이메일입니다.",
          });
        }
      });
  };

  // 이메일
  const onChangeEmail = (e) => {
    const {
      target: { value },
    } = e;
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    setEmailState({ ...emailState, email: value });

    if (!emailRegex.test(value)) {
      setEmailState((prev) => {
        return {
          ...prev,
          emailMessage: "이메일 형식이 틀렸습니다.",
          isEmail: false,
        };
      });
    } else {
      setEmailState((prev) => {
        return {
          ...prev,
          emailMessage: "올바른 이메일 형식입니다.",
          isEmail: true,
        };
      });
    }
  };

  // 비밀번호
  const onChangePassword = (e) => {
    const {
      target: { value },
    } = e;
    setPwState({ ...pwState, pw: value });

    if (!(value.length >= 8)) {
      setPwState((prev) => {
        return {
          ...prev,
          pwMessage: "8자리 이상 입력해주세요.",
          isPw: false,
        };
      });
    } else {
      setPwState((prev) => {
        return {
          ...prev,
          pwMessage: "올바른 비밀번호 형식입니다.",
          isPw: true,
        };
      });
    }
  };

  // 비밀번호 확인
  const onChangePasswordConfirm = (e) => {
    const {
      target: { value },
    } = e;
    setPwConfirmState({ ...pwConfirmState, pwConfirm: value });
  };

  useEffect(() => {
    if (pwConfirm.length < 8 || pw !== pwConfirm) {
      setPwConfirmState((prev) => {
        return {
          ...prev,
          pwConfirmMessage: "비밀번호가 틀립니다. 다시 확인해주세요.",
          isPwConfirm: false,
        };
      });
    } else if (pw === pwConfirm) {
      setPwConfirmState((prev) => {
        return {
          ...prev,
          pwConfirmMessage: "입력한 비밀번호와 일치합니다.",
          isPwConfirm: true,
        };
      });
    }
  }, [pw, pwConfirm]);

  return (
    <Container>
      <Title title="Sign Up" />
      <Div purpose="signup" className="header">
        <Span size="XLarge" bold="thick">
          회원가입
        </Span>
      </Div>
      <form onSubmit={onSubmit}>
        <Div purpose="signup" className="signupEmail">
          <Span>
            이메일<Span color="red">*</Span>
          </Span>
          <Input onChange={onChangeEmail} type="email" />
        </Div>
        <Div purpose="signup" className="errMessage">
          {email.length > 0 && (
            <Span
              size="medium"
              bgColor="bright"
              className={`${isEmail ? "success" : "error"}`}
            >
              {emailMessage}
            </Span>
          )}
        </Div>

        <Div purpose="signup" className="signupPW">
          <Span>
            비밀번호<Span color="red">*</Span>
          </Span>
          <Input onChange={onChangePassword} type="password" />
        </Div>
        <Div purpose="signup" className="errMessage">
          {pw.length > 0 && (
            <Span
              size="medium"
              bgColor="bright"
              className={`${isPw ? "success" : "error"}`}
            >
              {pwMessage}
            </Span>
          )}
        </Div>

        <Div purpose="signup" className="signupPWConfirm">
          <Span>
            비밀번호 확인<Span color="red">*</Span>
          </Span>
          <Input onChange={onChangePasswordConfirm} type="password" />
        </Div>
        <Div purpose="signup" className="errMessage">
          {pwConfirm.length > 0 && (
            <Span
              size="medium"
              bgColor="bright"
              className={`${isPwConfirm ? "success" : "error"}`}
            >
              {pwConfirmMessage}
            </Span>
          )}
        </Div>

        <Div purpose="signup" className="signupBtn">
          <Button
            type="submit"
            disabled={!(isEmail && isPw && isPwConfirm)}
            color="bgMagenta"
            size="large"
            bold="thick"
          >
            완료
          </Button>
        </Div>
        <Div purpose="signup" className="errMessage">
          {isErr && (
            <Span size="medium" bgColor="bright" color="red">
              {message}
            </Span>
          )}
        </Div>
      </form>
    </Container>
  );
};

export default SignUp;
