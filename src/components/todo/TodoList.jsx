import { getTodo } from "components/api";
import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todoData, setTodoData] = useState([]);

  useEffect(() => {
    getTodo()
      .then((res) => setTodoData(res.data))
      .catch((err) => console.error("getTodo:", err));
  }, [todoData]);

  return (
    <ul className="TodoList">
      {todoData.map((todo) => (
        <TodoItem key={todo.id} todoObj={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
