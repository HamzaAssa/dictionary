import {
  StyledFooter,
  StyledLeft,
  StyledRight,
  StyledText,
} from "./Styled.Footer";
const Footer = () => {
  return (
    <StyledFooter>
      <StyledLeft>
        <StyledText>labz-balad@rasaank.com</StyledText>
        <StyledText> - An open source dectionay</StyledText>
      </StyledLeft>
      <StyledRight>
        <StyledText>
          -This dictionary is maintained by people all over the country
        </StyledText>
      </StyledRight>
    </StyledFooter>
  );
};

export default Footer;
