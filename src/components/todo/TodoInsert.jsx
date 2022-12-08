import { createTodo } from "components/api";
import { useRef, useState } from "react";

const TodoInsert = () => {
  const textRef = useRef(null);
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

    createTodo(text)
      .then((res) => {
        if (res.status === 201) {
          console.log("createTodo:", res);
        }
      })
      .catch((err) => {
        console.error("createTodo:", err);
      });

    setText("");
    textRef.current?.focus();
  };
  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={text} onChange={changeInput} ref={textRef} />
    </form>
  );
};

export default TodoInsert;
