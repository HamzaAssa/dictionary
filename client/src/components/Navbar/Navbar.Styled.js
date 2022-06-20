import styled from "styled-components";

export const StyledNave = styled.nav`
  z-index: 12;
  height: 50px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4d4a4a;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

export const NavButtons = styled.div`
  display: flex;
  justify-content: space-between;
  justify-self: center;
  align-self: center;
  max-width: 800px;
  align-items: center;
  background-color: none;
  margin: 0 auto;
`;
export const NavButton = styled.button`
  color: white;
  height: 35px;
  padding: 0 10px;
  font-size: 17px;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  background-color: ${({ prefer }) => (prefer === "blue" ? "blue" : "#3d3d3d")};
  &:hover {
    background-color: ${({ prefer }) =>
      prefer === "blue" ? "blue" : "#2c2c2c"};
  }
  cursor: pointer;
`;
