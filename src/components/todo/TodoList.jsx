import { getTodo } from "components/api";
import { useEffect, useState } from "react";
import { Div } from "styles/Div";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    getTodo()
      .then((res) => setTodoData(res.data))
      .catch((err) => console.error("getTodo:", err));
  }, [todoData]);

  return (
    <Div purpose="todo" className="todoList">
      <ul className="TodoList">
        {todoData.map((todo) => (
          <TodoItem key={todo.id} todoObj={todo} />
        ))}
      </ul>
    </Div>
  );
};

export default TodoList;
