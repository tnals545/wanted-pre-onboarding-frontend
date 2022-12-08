import { updateTodo } from "components/api";
import { useRef, useState, useEffect } from "react";

const TodoEdit = ({ todoObj }, isEditTodo) => {
  const { id, isCompleted, todo } = todoObj;

  const textRef = useRef();
  const [text, setText] = useState("");

  const changeInput = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    updateTodo({ id, isCompleted, todo: text })
      .then((res) => {
        if (res.status === 201) {
          console.log("updateTodo:", res);
        }
      })
      .catch((err) => {
        console.error("updateTodo:", err);
      });
  };

  useEffect(() => {
    setText(todo);
    textRef.current?.focus();
  }, [todo]);

  return (
    <>
      {isEditTodo && (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={text}
            onChange={changeInput}
            ref={textRef}
          />
        </form>
      )}
    </>
  );
};

export default TodoEdit;
