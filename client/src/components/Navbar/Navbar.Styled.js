import styled from "styled-components";

export const StyledNave = styled.nav`
  z-index: 12;
  background-color: white;
  height: 50px;
  width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 0px 10px 5px #c4c4c4;
  border-radius: 10px;
  margin-top: 10px;
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
  color: ${({ prefer }) => (prefer === "blue" ? "white" : "fff")};
  height: 35px;
  padding: 0 10px;
  font-size: 17px;
  margin-left: 5px;
  margin-right: 5px;
  border: none;
  border-radius: 10px;

  background-color: ${({ prefer }) => (prefer === "blue" ? "blue" : "#fff")};
  &:hover {
    box-shadow: 0px 0px 10px 2px #c4c4c4;
  }
  cursor: pointer;
`;
