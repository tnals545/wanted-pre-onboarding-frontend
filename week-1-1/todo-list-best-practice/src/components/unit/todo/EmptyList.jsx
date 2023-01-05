import styled from 'styled-components';
import BoxStyle from '../../common/Box.style';

const EmptyList = () => {
  return (
    <BoxStyle>
      <EmptyListContainer>할 일을 추가해보세요!</EmptyListContainer>
    </BoxStyle>
  );
};

const EmptyListContainer = styled.div`
  display: flex;
  margin: auto;
`;
export default EmptyList;
