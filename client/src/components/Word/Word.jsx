import { useLocation } from "react-router-dom";
import {
  StyledContainer,
  StyledWord,
  StyledWordCon,
  StyledLabel,
  Btn,
} from "../WordList/Styled.WordList";

import heroImg from "../../images/back.png";
import { useNavigate } from "react-router-dom";
import { Margin } from "../AddWord/Styled";

const Word = () => {
  const { state } = useLocation();
  const word = state.word;
  const navigate = useNavigate();

  return (
    <>
      <Margin></Margin>
      <StyledContainer>
        <StyledWordCon height="85px">
          <StyledLabel>
            <span style={{ padding: "5px 0px" }}>Balochi</span>
          </StyledLabel>
          <StyledWord
            className="rtl-font"
            position="rtl"
            readOnly
            type="text"
            value={word.balochi_word}
          ></StyledWord>
        </StyledWordCon>
        <StyledWordCon height="85px">
          <StyledLabel>
            <span style={{ padding: "5px 0px" }}>Brahoi</span>
          </StyledLabel>
          <StyledWord
            className="rtl-font"
            position="rtl"
            readOnly
            type="text"
            value={word.brahoi_word}
          ></StyledWord>
        </StyledWordCon>
        <StyledWordCon height="85px">
          <StyledLabel>
            <span style={{ padding: "5px 0px" }}>Urdu</span>
          </StyledLabel>

          <StyledWord
            className="rtl-font"
            position="rtl"
            readOnly
            type="text"
            value={word.urdu_word}
          ></StyledWord>
        </StyledWordCon>
        <StyledWordCon height="85px">
          <StyledLabel>
            <span style={{ padding: "5px 0px" }}>English</span>
          </StyledLabel>

          <StyledWord
            position="ltr"
            readOnly
            type="text"
            value={word.english_word}
          ></StyledWord>
        </StyledWordCon>
        <StyledWordCon height="85px">
          <StyledLabel>
            <span style={{ padding: "5px 0px" }}>Roman Balochi</span>
          </StyledLabel>

          <StyledWord
            position="ltr"
            readOnly
            type="text"
            value={word.roman_balochi_word}
          ></StyledWord>
        </StyledWordCon>
        <Btn onClick={() => navigate("/search")} src={heroImg}></Btn>
      </StyledContainer>
    </>
  );
};

export default Word;
