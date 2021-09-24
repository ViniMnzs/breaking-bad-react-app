import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Search = styled.input`
  margin: 0 auto;
  width: 50%;
  height: 45px;
  padding: 0 20px;
  font-size: 1.6rem;
  border: 1px solid #d0cfce;
  outline: none;
  color: #ffff;
  &:focus {
    border: 1px solid #ffff;
    transition: 0.35s ease;
    &::-webkit-input-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &::-moz-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
    &:-ms-placeholder {
      transition: opacity 0.45s ease;
      opacity: 0;
    }
  }
`;

export const Character = styled.div`
  width: 225px;
  height: auto;
  margin: 3% 3% 0% 3%;
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.img`
  height: 300px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
`;

export const Text = styled.span`
  background-color: transparent;
  text-align: left;
  font-size: 1.2rem;
`;
