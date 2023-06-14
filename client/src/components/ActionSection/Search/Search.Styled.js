import styled from "styled-components";

export const StyledSelect = styled.select`
  margin-left: 10px;
  width: 150px;
  height: 25px;
  font-size: 15px;
  border: 2px solid gray;
  border-radius: 10px;
`;

export const StyledInput = styled.input`
  width: 270px;
  align-self: start;
  height: 35px;
  border: 2px solid lightblue;
  border-radius: 20px;
  font-size: 18px;
  padding-right: 10px;
  padding-left: 10px;
  direction: ${({ position }) => position};
  &:focus {
    width: 270px;
    height: 35px;
    border: 2px solid #6f8df7;
    outline: none;
  }
  margin-left: 15px;
  @media (max-width: 450px) {
    width: 200px;
    height: 35px;
    margin-right: 10px;
    &:focus {
      width: 200px;
      height: 35px;
      border: 2px solid #6f8df7;
      outline: none;
    }
  }
`;

export const StyledSubmit = styled.input`
  border: none;
  border-radius: 10px;
  width: 80px;
  height: 35px;
  background-color: #2d9cf7;
  cursor: pointer;
  color: white;
  text-align: center;
  font-size: ${({ size }) => (size === "rtl" ? "20px" : "18px")};
  &:hover {
    background-color: #087edf;
  }
  margin-left: 10px;
  @media (max-width: 450px) {
    width: 70px;
    height: 33px;
  }
`;

export const StyledCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media (max-width: 5000px) {
    max-width: 500px;
  }

  @media (max-width: 450px) {
    max-width: 350px;
  }
`;

export const StyledContainer = styled.div`
  margin: 0 auto;
  margin-top: ${({ margin }) => margin}; ;
`;
