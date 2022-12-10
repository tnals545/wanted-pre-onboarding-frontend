import { createTodo } from "components/api";
import { useRef, useState } from "react";
import { Button } from "styles/Button";
import { Div } from "styles/Div";
import { Input } from "styles/Input";
import { Span } from "styles/Span";

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
    <Div purpose="todo" className="todoInsert">
      <form onSubmit={onSubmit}>
        <Input
          className="todoInsert"
          type="text"
          value={text}
          onChange={changeInput}
          ref={textRef}
        />
        <Button type="submit">
          <Span size="XLarge">✅</Span>
        </Button>
      </form>
    </Div>
  );
};

export default TodoInsert;
