import NavBar from "components/NavBar";
import TodoInsert from "components/todo/TodoInsert";
import TodoList from "components/todo/TodoList";
import { Container } from "styles/Container";
import { Div } from "styles/Div";
import { Span } from "styles/Span";

const Todo = () => {
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
