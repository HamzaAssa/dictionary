import styled from "styled-components";

export const StyledContainer = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  // border: 1px solid gray;
  box-shadow: 0px 0px 10px 5px #c4c4c4;
  border-radius: 25px;
  padding-bottom: 10px;
  padding-top: 20px;
  @media (max-width: 5000px) {
    max-width: 500px;
  }

  @media (max-width: 450px) {
    max-width: 350px;
  }
`;

export const StyledWordCon = styled.div`
  width: 300px;
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  padding-right: 5px;
  border-bottom: 1px solid gray;
  margin-bottom: 5px;
  margin-top: 5px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #cfcfcf;
  }
`;

export const StyledWord = styled.input`
  width: 280px;
  margin-right: 5px;
  border: none;
  outline: none;
  font-size: 22px;
  direction: ${({ position }) => position};
  font-weight: bold;
  margin-bottom: 10px;
  cursor: pointer;
`;

export const StyledLabel = styled.p`
  display: flex;
  align-items: center;
  background-color: #cfcfcf;
  width: 290px;
  padding-left: 10px;
  height: 30px;
  border-radius: 5px;
  &:hover {
    background-color: white;
  }
`;

export const Btn = styled.img`
  margin-top: 15px;
  // border-radius: 50px;
  cursor: pointer;
`;

export const StyledBtnContainer = styled.div`
  display: flex;
  width: 300px;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const StyledMessage = styled.h4`
  margin-top: 30px;
  text-align: center;
  margin-bottom: 5px;
  color: #4e4e4e;
  line-height: 20px;
`;
