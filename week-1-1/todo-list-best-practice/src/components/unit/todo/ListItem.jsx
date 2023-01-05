/* eslint-disable */
import { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck } from '@fortawesome/free-regular-svg-icons';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import BoxStyle from '../../common/Box.style';
import { deleteTodoApi, updateTodoApi } from '../../../apis/todo';

const ListItem = ({ list, fetchAndSetTodo }) => {
  const { id, todo, isCompleted } = list;
  const [checked, setChecked] = useState(isCompleted);
  const [input, setInput] = useState(todo);
  const [modifyingInput, setModifyingInput] = useState(todo);
  const [isModifying, setIsModifying] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current !== null) inputRef.current.focus();
  }, [isModifying]);

  const handleInput = (e) => {
    setModifyingInput(e.target.value);
  };

  const clickCheckBox = async () => {
    if (!isModifying) {
      checked ? setChecked(false) : setChecked(true);
      try {
        await updateTodoApi({ todo: input, isCompleted: !checked }, id);
        fetchAndSetTodo();
      } catch (error) {
        alert(`체크박스 에러 :  ${error.response.data.message}`);
      }
    }
  };

  const clickModifySubmitBtn = async () => {
    try {
      await updateTodoApi({ todo: modifyingInput, isCompleted: false }, id);
      fetchAndSetTodo();
    } catch (error) {
      alert(`todo 수정 에러 :  ${error.response.data.message}`);
    }
  };

  const clickDeleteBtn = async () => {
    try {
      await deleteTodoApi(id);
      fetchAndSetTodo();
    } catch (error) {
      alert(`todo 삭제 에러 :  ${error.response.data.message}`);
    }
  };

  return (
    <ListContainer id={checked.toString()}>
      <BoxStyle className='list-item'>
        <div className='checkbox' onClick={clickCheckBox} role='presentation'>
          <FontAwesomeIcon icon={faSquareCheck} className='icon' />
          <input
            ref={inputRef}
            type='text'
            className={`content ${checked.toString()} ${isModifying && 'modifying'}`}
            value={isModifying ? modifyingInput : input}
            onChange={handleInput}
            disabled={!isModifying}
            autoComplete='off'
            size={20}
            maxLength={12}
            spellCheck='false'
          />
        </div>
        <div>
          {isModifying ? (
            <>
              <button
                type='button'
                className='save-modify'
                onClick={() => {
                  setModifyingInput(input);
                  setIsModifying(false);
                }}
              >
                취소
              </button>
              <button
                type='submit'
                className='save-modify'
                onClick={() => {
                  clickModifySubmitBtn();
                  setInput(modifyingInput);
                  setIsModifying(false);
                }}
              >
                제출
              </button>
            </>
          ) : (
            <>
              <FontAwesomeIcon
                onClick={() => setIsModifying(true)}
                icon={faPencil}
                className={`icon small ${checked}`}
              />
              <FontAwesomeIcon onClick={clickDeleteBtn} icon={faTrashCan} className='icon small' />
            </>
          )}
        </div>
      </BoxStyle>
    </ListContainer>
  );
};

const ListContainer = styled.div`
  .content {
    color: ${(props) => props.id === 'true' && props.theme.color.grayTxt};
    text-decoration: ${(props) => props.id === 'true' && 'line-through'};
  }
  .icon {
    color: ${(props) => props.id === 'true' && '#91D086'};
    &.true {
      display: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
  .small {
    font-size: ${(props) => props.theme.size.iconRight};
    margin: 0px 20px 0px 0px;
  }
  .save-modify {
    padding: 0px;
    margin: 0px 15px 0px 0px;
    font-size: 16px;
    &:hover {
      cursor: pointer;
    }
  }
  input {
    color: ${(props) => props.theme.color.txt};
    font-size: 18px;
  }
`;

export default ListItem;
