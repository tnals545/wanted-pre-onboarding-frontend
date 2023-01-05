import { useRef, useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from '../../common/Box.style';
import theme from '../../../styles/theme';
import { createTodoApi } from '../../../apis/todo';

const MakeTodo = ({ fetchAndSetTodo }) => {
  const [inputToDo, setInputToDo] = useState('');
  const inputRef = useRef(null);

  function handleInput(e) {
    setInputToDo(e.target.value);
  }

  const clickSaveBtn = async () => {
    if (!inputRef.current.value) {
      alert('할 일을 입력해주세요');
      return;
    }
    await createTodoApi({ todo: inputToDo });
    fetchAndSetTodo();
    setInputToDo('');
  };

  return (
    <MakeTodoContainer>
      <BoxStyle bgColor={theme.color.mainBg} className='make-to-do'>
        <div>
          <FontAwesomeIcon icon={faLemon} className='icon' />
          <input
            ref={inputRef}
            placeholder='할 일을 입력해주세요'
            value={inputToDo}
            onChange={handleInput}
            onKeyPress={(e) => {
              e.key === 'Enter' && clickSaveBtn();
            }}
            size={20}
            maxLength={12}
            spellCheck='false'
          />
        </div>
        <button
          type='submit'
          onClick={() => {
            clickSaveBtn();
            if (inputRef.current !== null) inputRef.current.focus();
          }}>
          저장
        </button>
      </BoxStyle>
    </MakeTodoContainer>
  );
};

const MakeTodoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: inherit;
  input,
  button {
    font-size: 18px;
  }
  button {
    padding: 0px;
    margin-right: 20px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export default MakeTodo;
