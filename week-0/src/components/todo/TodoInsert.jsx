import { useRef, useState } from "react";

import { createTodo } from "components/api";

import { Button } from "styles/Button";
import { Div } from "styles/Div";
import { Input } from "styles/Input";
import { Span } from "styles/Span";

const TodoInsert = () => {
  const textRef = useRef(null);
  const [text, setText] = useState("");

  const onChangeInput = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    createTodo(text);

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
          onChange={onChangeInput}
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
