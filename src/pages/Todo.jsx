import TodoInsert from "components/todo/TodoInsert";
import TodoList from "components/todo/TodoList";

const Todo = () => {
  return (
    <div className="Todos">
      <h1>Todo List</h1>
      <TodoInsert />
      <TodoList />
    </div>
  );
};

export default Todo;
