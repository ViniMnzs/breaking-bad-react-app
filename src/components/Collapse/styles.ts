import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Heading = styled.div`
  transition: background 0.5s;
  background-color: #fff;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0% 5% 0% 5%;
  :hover {
    background-color: #f9f9f9;
    cursor: pointer;
  }
`;

export const Content = styled.div<{ open: boolean }>`
  background-color: #ffffff;
  width: 100%;
  max-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${props => (props.open ? '1' : '0')};
  overflow-y: scroll;
  box-sizing: border-box;
  padding: 0% 5% 5% 5%;
  * {
    background-color: #ffffff;
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: #ffffff;
  }
  ::-webkit-scrollbar-thumb {
    width: 12px;
    height: 12px;
    background-color: #26364c;
    border-radius: 50px;
  }
`;
