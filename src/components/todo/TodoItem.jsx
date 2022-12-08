import { deleteTodo, updateTodo } from "components/api";
import { useEffect, useRef, useState } from "react";
import { FaRegTrashAlt, FaPencilAlt } from "react-icons/fa";
import {
  MdOutlineCheckBox,
  MdOutlineCheckBoxOutlineBlank,
} from "react-icons/md";

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

    updateTodo({ id, isCompleted, todo: text })
      .then((res) => {
        if (res.status === 201) {
          console.log("updateTodo:", res);
        }
      })
      .catch((err) => {
        console.error("updateTodo:", err);
      });

    setIsEditTodo(false);
  };

  const toggleIsCompleted = () => {
    updateTodo({ ...todoObj, isCompleted: !isCompleted });
  };

  useEffect(() => {
    if (isEditTodo) {
      setText(todo);
      textRef.current?.focus();
    }
  }, [isEditTodo]);

  return (
    <div>
      <li>
        {isEditTodo ? (
          <>
            <form onSubmit={onSubmit}>
              <input
                type="text"
                value={text}
                onChange={changeInput}
                ref={textRef}
              />
            </form>
          </>
        ) : (
          <>
            <span onClick={() => toggleIsCompleted()}>
              {isCompleted ? (
                <MdOutlineCheckBox />
              ) : (
                <MdOutlineCheckBoxOutlineBlank />
              )}
            </span>
            <em onClick={() => toggleIsCompleted()}>{todo}</em>
            <button
              onClick={() => {
                setIsEditTodo(true);
              }}
            >
              <FaPencilAlt size="15" />
            </button>
            <button onClick={() => deleteTodo({ id })}>
              <FaRegTrashAlt color="rgb(175,169,169)" size="15" />
            </button>
          </>
        )}
      </li>
    </div>
  );
};

export default TodoItem;
