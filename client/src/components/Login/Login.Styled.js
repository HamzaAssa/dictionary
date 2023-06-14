import styled from "styled-components";

export const StyledH3 = styled.h3`
  margin: 0 auto;
  margin-bottom: 5px;
  padding-top: 10px;
  color: #2b2b2b;
`;

export const StyledInput = styled.input`
  width: 250px;
  height: 40px;
  border: 2px solid #a7a6a6;
  border-radius: 5px;
  font-size: 16px;
  padding-right: 10px;
  padding-left: 10px;
  &:focus {
    border: 2px solid gray;
    outline: none;
  }
  margin 0 auto;
  margin-top: 15px;
`;

export const StyledSubmit = styled.input`
  display: block;
  cursor: pointer;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 2px;
  border: 1px solid gray;
  width: 250px;
  height: 35px;
  font-size: 17px;
  background-color: #928c8c;
  color: white;
  &:hover {
    background-color: gray;
  }
`;

export const StyledDiv = styled.div`
  width: 320px;
  max-width: 350px;
  height: 310px;
  box-shadow: 1px 1px 15px;
  margin: 100px auto;
  text-align: center;
  background-color: white;
`;

export const Styledpara = styled.p`
  color: #757575;
  font-size: 16px;
  margin-top: 0px;
  margin-bottom: -10px;
`;
export const StyledMessage = styled.p`
  color: #f55656;
  font-size: 16px;
  margin-top: -5px;
`;
