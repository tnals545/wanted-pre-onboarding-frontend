import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <div>
        <FontAwesomeIcon icon={faLemon} className='icon' />
        <span className='title'>Not Found</span>
      </div>
      <br />
      <span>접근할 수 없는 페이지입니다.</span>
      <br />
      <br />
      <br />
      <Link to='/'>메인 페이지로 이동하기</Link>
    </NotFoundContainer>
  );
};

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  .icon {
    margin: 0 9px 0 0;
    color: ${(props) => props.theme.color.main};
    font-size: ${(props) => props.theme.size.iconLeft};
  }
  .title {
    color: ${(props) => props.theme.color.grayTxt};
    font-size: 40px;
    font-weight: 700;
  }
  a {
    color: ${(props) => props.theme.color.txt};
    font-size: 15px;
  }
`;

export default NotFound;
