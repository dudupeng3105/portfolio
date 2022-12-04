import styled from 'styled-components';

export const MainPageBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5vh 10vw;
  min-width: 100vw;
  min-height: 100vh;
  background-color: grey;
  font-size: 3vmin;
  color: red;
`;

export const IndexBox = styled.div`
  height: 5vh;
  width: 50vw;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1vw;
  background-color: black;
  color: #adff45;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ContentBox = styled.div`
  height: auto;
  width: 80vw;
  display: flex;
  justify-content: start;
  align-items: start;
  padding: 1vh 1vw;
  color: black;
  box-shadow: 5px 5px 5px rgba(63, 39, 102, 0.25);
  border-radius: 10px;
  background-color: white;
`;
