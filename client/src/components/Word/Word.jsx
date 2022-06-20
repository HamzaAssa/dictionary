import { useLocation } from "react-router-dom";
import {
  StyledContainer,
  StyledWord,
  StyledWordCon,
  StyledLabel,
  Btn,
} from "../WordList/Styled.WordList";

import heroImg from "../../images/back.svg";
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
            <span style={{ marginBottom: "8px" }}>Balochi</span>
          </StyledLabel>
          <StyledWord
            position="rtl"
            readOnly
            type="text"
            value={word.balochi_word}
          ></StyledWord>
        </StyledWordCon>
        <StyledWordCon height="85px">
          <StyledLabel>
            <span style={{ marginBottom: "8px" }}>Urdu</span>
          </StyledLabel>

          <StyledWord
            position="rtl"
            readOnly
            type="text"
            value={word.urdu_word}
          ></StyledWord>
        </StyledWordCon>
        <StyledWordCon height="85px">
          <StyledLabel>
            <span style={{ marginBottom: "8px" }}>English</span>
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
            <span style={{ marginBottom: "8px" }}>Roman Balochi</span>
          </StyledLabel>

          <StyledWord
            position="ltr"
            readOnly
            type="text"
            value={word.roman_balochi_word}
          ></StyledWord>
        </StyledWordCon>
        <Btn onClick={() => navigate("/verifiedwords")} src={heroImg}></Btn>
      </StyledContainer>
    </>
  );
};

export default Word;
