import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "styles/Container";
import { postSignUp } from "../components/api";
import Title from "../components/Title";

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

  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    postSignUp({ email, password: pw })
      .then((res) => {
        console.log("response:", res);
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
    if (pw !== pwConfirm) {
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
      <form onSubmit={onSubmit}>
        <div className="formbox">
          <p>이메일 *</p>
          <input onChange={onChangeEmail} type="email" />
          {email.length > 0 && (
            <span className={`message ${isEmail ? "success" : "error"}`}>
              {emailMessage}
            </span>
          )}
        </div>

        <div className="formbox">
          <p>비밀번호 *</p>
          <input onChange={onChangePassword} type="password" />
          {pw.length > 0 && (
            <span className={`message ${isPw ? "success" : "error"}`}>
              {pwMessage}
            </span>
          )}
        </div>

        <div className="formbox">
          <p>비밀번호 확인 *</p>
          <input onChange={onChangePasswordConfirm} type="password" />
          {pwConfirm.length > 0 && (
            <span className={`message ${isPwConfirm ? "success" : "error"}`}>
              {pwConfirmMessage}
            </span>
          )}
        </div>

        <div>
          <span>{errMessage.isErr && errMessage.message}</span>
          <input
            type="submit"
            value="완료"
            disabled={!(isEmail && isPw && isPwConfirm)}
          />
        </div>
      </form>
    </Container>
  );
};

export default SignUp;
