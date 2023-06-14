import { useContext } from "react";
import {
  StyledSection,
  CtaContainer,
  StyledHeroTitle,
  StyledHeroSub,
  StyledHeroTexts,
} from "./HeroSection.Styled";
import CtaBtn from "./Button/CtaBtn";
import { AppLanguageContext } from "../../state/AppLanguageContext";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [appLanguage, setAppLanguage] = useContext(AppLanguageContext);
  // const [addWord, setAddWord] = useContext(AddWordContext);
  const navigate = useNavigate();

  const handleSearchWord = () => {
    navigate("/search");
  };
  const handleAddWord = () => {
    navigate("/addword");
  };

  return (
    <StyledSection>
      <StyledHeroTexts>
        <StyledHeroTitle type={appLanguage.type}>
          {appLanguage.heroTitle}
        </StyledHeroTitle>
        <StyledHeroSub type={appLanguage.type}>
          {appLanguage.heroSub}
        </StyledHeroSub>
      </StyledHeroTexts>
      <CtaContainer>
        <CtaBtn
          id="SearchWordContainer"
          handleChange={handleSearchWord}
          // type={appLanguage.type}
          text={appLanguage.ctaBtnTextPrimary}
          color="#ec8686"
        />

        <CtaBtn
          id="AddWordContainer"
          handleChange={handleAddWord}
          // type={appLanguage.type}
          text={appLanguage.ctaBtnTextSecondary}
          color="blue"
        />
      </CtaContainer>
    </StyledSection>
  );
};

export default HeroSection;
