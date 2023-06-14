import styled from "styled-components";
import heroImg from "../../images/heroBg.jpg";
export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
  border-radius: 5px;
  width: 100%;
  height: 97%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${heroImg});
  background-repeat: no-repeat;
  background-size: 800px 100%;
`;

export const CtaContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  min-width: 320px;
`;

export const StyledHeroTitle = styled.h1`
  color: white;
  color: #3bebb0;
  line-height: ${({ type }) => (type === "rtl" ? "65px" : "35px")};
  font-size: 35px;
  font-weight: bold;
`;
export const StyledHeroSub = styled.h3`
  color: #b2ecd9;
  margin: 20px auto;
  line-height: ${({ type }) => (type === "rtl" ? "40px" : "25px")};
  font-size: 20px;
`;

export const StyledHeroTexts = styled.div`
  margin-top: 50px;
  display: flex;
  max-width: 370px;
  flex-direction: column;
  @media screen and (max: 400px) {
    color: red;
  }
`;
