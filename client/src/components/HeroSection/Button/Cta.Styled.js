import styled from "styled-components";

export const StyledCTA = styled.button`
  box-sizing: border-box;
  width: 140px;
  height: 45px;
  background-color: ${({ color }) => color};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: ${({ size }) => (size === "rtl" ? "22px" : "18px")};
  cursor: pointer;
  &:hover {
    border: 3px solid ${({ color }) => color};
    background-color: transparent;
    color: white;
  }
`;
