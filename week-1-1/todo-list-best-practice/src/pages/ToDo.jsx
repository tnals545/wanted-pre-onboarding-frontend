import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import EmptyList from '../components/unit/todo/EmptyList';
import ListItem from '../components/unit/todo/ListItem';
import MakeTodo from '../components/unit/todo/MakeToDo';
import Title from '../components/common/Title';
import { getTodoApi } from '../apis/todo';

const ToDo = () => {
  const navigate = useNavigate();
  const [listArr, setListArr] = useState([]);

  const fetchAndSetTodo = async () => {
    try {
      const res = await getTodoApi();
      setListArr([...res]);
    } catch (error) {
      alert(`Todo fetch 에러 :  ${error.response.data.message}`);
    }
  };

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      alert('로그인이 필요한 기능입니다.');
      navigate('/');
    }
  }, [localStorage.getItem('token')]);

  useEffect(() => {
    fetchAndSetTodo();
  }, []);

  return (
    <>
      <Title />
      <TodoContainer>
        <ListContainer>
          {!listArr.length && <EmptyList />}
          {!!listArr.length &&
            listArr.map((list) => {
              return (
                <ListItem
                  key={list.id}
                  list={list}
                  listArr={listArr}
                  setListArr={setListArr}
                  fetchAndSetTodo={fetchAndSetTodo}
                />
              );
            })}
        </ListContainer>
        <MakeTodo listArr={listArr} setListArr={setListArr} fetchAndSetTodo={fetchAndSetTodo} />
      </TodoContainer>
    </>
  );
};

const TodoContainer = styled.section`
  position: relative;
  width: 370px;
  height: 600px;
  background-color: #ffffff;
`;

const ListContainer = styled.div`
  height: 520px;
  overflow-y: auto;
`;

export default ToDo;
