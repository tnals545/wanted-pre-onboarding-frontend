import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container } from "styles/Container";
import Title from "components/Title";
import LogIn from "pages/LogIn";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("loginToken")) {
      navigate("/todo");
    }
  });

  return (
    <Container>
      <Title title="Login" />
      <LogIn />
      <div className="signinBottom">
        <p>
          아직 계정이 없으신가요?{" "}
          <Link to="/sign_up">
            <span>회원가입</span>
          </Link>
        </p>
      </div>
    </Container>
  );
};

export default App;
