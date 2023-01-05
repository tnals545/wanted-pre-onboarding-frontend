import NavBar from "components/NavBar";
import TodoInsert from "components/todo/TodoInsert";
import TodoList from "components/todo/TodoList";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container } from "styles/Container";
import { Div } from "styles/Div";
import { Span } from "styles/Span";

const Todo = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(localStorage.getItem("loginToken"));

  useEffect(() => {
    console.log(token);
    setToken(localStorage.getItem("loginToken"));
    if (!token) {
      alert("로그인이 필요한 기능입니다.");
      navigate("/");
    }
  }, [navigate, token]);

  return (
    <>
      <NavBar />
      <Container className="todo">
        <Div purpose="todo" className="todoTitle">
          <Span size="XXLarge" bold="thick">
            Todo List
          </Span>
        </Div>
        <TodoInsert />
        <TodoList />
      </Container>
    </>
  );
};

export default Todo;
