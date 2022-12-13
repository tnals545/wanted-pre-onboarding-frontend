import { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

import { deleteTodo, updateTodo } from "components/api";

import { Button } from "styles/Button";
import { Div } from "styles/Div";
import { Input } from "styles/Input";
import { Li } from "styles/Li";
import { Span } from "styles/Span";

const TodoItem = ({ todoObj }) => {
  const { id, isCompleted, todo } = todoObj;

  const [isEditTodo, setIsEditTodo] = useState(false);
  const [text, setText] = useState("");

  const textRef = useRef();

  const changeInput = (e) => {
    const {
      target: { value },
    } = e;
    setText(value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) return;

    updateTodo({ id, isCompleted, todo: text });

    setIsEditTodo(false);
  };

  const toggleIsCompleted = () => {
    updateTodo({ ...todoObj, isCompleted: !isCompleted });
  };

  const onClickCancel = () => {
    setText(todo);
  };

  useEffect(() => {
    if (isEditTodo) {
      setText(todo);
      textRef.current?.focus();
    }
  }, [isEditTodo, todo]);

  return (
    <Li className={isEditTodo && "border-none"}>
      {isEditTodo ? (
        <Div purpose="todoItem">
          <form onSubmit={onSubmit}>
            <Input
              className="todoEdit"
              type="text"
              value={text}
              onChange={changeInput}
              ref={textRef}
            />
            <Button type="submit">
              <Span size="large">🟢</Span>
            </Button>
            <Button type="submit" onClick={onClickCancel}>
              <Span size="large">❌</Span>
            </Button>
          </form>
        </Div>
      ) : (
        <Div purpose="todoItem" className="todoItem">
          <Div purpose="todoItem" className="todoContents">
            <Span
              onClick={() => toggleIsCompleted()}
              className={`checkIcon ${isCompleted && "done"}`}
            >
              {isCompleted ? (
                <MdOutlineCheckBox size="20" />
              ) : (
                <MdOutlineCheckBoxOutlineBlank size="20" />
              )}
            </Span>
            <Span
              onClick={() => toggleIsCompleted()}
              className={isCompleted && "done line"}
              size="large"
            >
              {todo}
            </Span>
          </Div>
          <Div purpose="todoItem" className="editAndDelete">
            <Button
              className="iconBtn"
              onClick={() => {
                setIsEditTodo(true);
              }}
            >
              <FaPencilAlt size="20" color="#16C60C" />
            </Button>
            <Button className="iconBtn" onClick={() => deleteTodo({ id })}>
              <FaRegTrashAlt size="20" color="#58385c" />
            </Button>
          </Div>
        </Div>
      )}
    </Li>
  );
};

export default TodoItem;
