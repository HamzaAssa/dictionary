import { useContext } from "react";
import { AppLanguageContext } from "../../state/AppLanguageContext";
import { StyledContainer } from "./Home.Styled";
import { StyleSheetManager } from "styled-components";
import rtlPlugin from "stylis-plugin-rtl";
import HeroSection from "../../components/HeroSection/HeroSection";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  const [appLanguage, setAppLanguage] = useContext(AppLanguageContext);
  return (
    <>
      <div dir={appLanguage.type}>
        <StyleSheetManager stylisPlugins={[rtlPlugin]}>
          <StyledContainer>
            <HeroSection />
            <Footer />
          </StyledContainer>
        </StyleSheetManager>
      </div>
    </>
  );
};

export default Home;
