import { useEffect, useState } from "react";

import TodoItem from "components/todo/TodoItem";
import { getTodo } from "components/api";

import { Div } from "styles/Div";

const TodoList = () => {
  const [todoData, setTodoData] = useState([]);

  const getTodoData = async () => {
    await getTodo()
      .then((res) => setTodoData([...res.data]))
      .catch((err) => console.error("getTodo:", err));
  };

  useEffect(() => {
    getTodoData();
  });

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
