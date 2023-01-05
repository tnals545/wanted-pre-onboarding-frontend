import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';
import theme from '../../styles/theme';
import BoxStyle from './Box.style';

const Title = () => {
  const navigate = useNavigate();

  const clickLogout = () => {
    localStorage.removeItem('token');
    alert('로그아웃되었습니다.');
    navigate('/');
  };

  return (
    <BoxStyle bgColor={theme.color.mainBg} className='title'>
      <div>
        <FontAwesomeIcon icon={faLemon} className='icon' />
        <div>Todo List</div>
      </div>
      {localStorage.getItem('token') && <LogoutBtn onClick={clickLogout}>로그아웃</LogoutBtn>}
    </BoxStyle>
  );
};

const LogoutBtn = styled.span`
  display: flex;
  align-items: center;
  margin-right: 20px;
  color: ${(props) => props.theme.color.txt};
  font-size: 14px;
  text-decoration: underline;
  &:hover {
    cursor: pointer;
  }
`;

export default Title;
