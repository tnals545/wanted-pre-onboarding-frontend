import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
    </Container>
  );
};

export default App;
