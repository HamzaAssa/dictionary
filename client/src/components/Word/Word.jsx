import { useLocation } from "react-router-dom";
import {
  StyledContainer,
  StyledWord,
  StyledWordCon,
  StyledLabel,
  Btn,
} from "../WordList/Styled.WordList";
import { useState } from "react";
import heroImg from "../../images/back.png";
import { useNavigate } from "react-router-dom";
import { Margin, StyledTitle } from "../AddWord/Styled";
import { NavButtons, NavButton } from "../Navbar/Navbar.Styled";
import { LineBreak } from "../AddWord/Styled";

const Word = () => {
  const { state } = useLocation();
  const word = state.word;
  const example = state.example;
  const defination = state.defination;
  const navigate = useNavigate();

  const [shouldShow, setShouldShow] = useState("Word");
  return (
    <>
      <Margin></Margin>
      <StyledContainer>
        <NavButtons>
          <NavButton
            style={{
              boxShadow:
                shouldShow === "Word" ? "0px 0px 10px 5px #c4c4c4" : "none",
            }}
            onClick={() => setShouldShow("Word")}
          >
            Word
          </NavButton>
          <NavButton
            style={{
              boxShadow:
                shouldShow === "Example" ? "0px 0px 10px 5px #c4c4c4" : "none",
            }}
            onClick={() => setShouldShow("Example")}
          >
            Example
          </NavButton>
          <NavButton
            style={{
              boxShadow:
                shouldShow === "Defination"
                  ? "0px 0px 10px 5px #c4c4c4"
                  : "none",
            }}
            onClick={() => setShouldShow("Defination")}
          >
            Defination
          </NavButton>
        </NavButtons>
        <LineBreak style={{ margin: "10px 0px" }} />
        <StyledTitle>{shouldShow}</StyledTitle>
        <div style={{ display: shouldShow === "Word" ? "" : "none" }}>
          <StyledWordCon height="100px">
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
          <StyledWordCon height="100px">
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
          <StyledWordCon height="100px">
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
        </div>
        <div style={{ display: shouldShow === "Example" ? "" : "none" }}>
          <StyledWordCon height="100px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Balochi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              readOnly
              position="rtl"
              value={example.balochi_example}
            ></StyledWord>
          </StyledWordCon>
          <StyledWordCon height="100px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Brahoi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              readOnly
              type="text"
              value={example.brahoi_example}
            ></StyledWord>
          </StyledWordCon>
          <StyledWordCon height="100px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Urdu</span>
            </StyledLabel>

            <StyledWord
              className="rtl-font"
              position="rtl"
              readOnly
              type="text"
              value={example.urdu_example}
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
              value={example.english_example}
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
              value={example.roman_balochi_example}
            ></StyledWord>
          </StyledWordCon>
        </div>

        {/* Definations */}
        <div style={{ display: shouldShow === "Defination" ? "" : "none" }}>
          <StyledWordCon height="100px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Balochi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              readOnly
              type="text"
              value={defination.balochi_defination}
            ></StyledWord>
          </StyledWordCon>
          <StyledWordCon height="100px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Brahoi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              readOnly
              type="text"
              value={defination.brahoi_defination}
            ></StyledWord>
          </StyledWordCon>
          <StyledWordCon height="100px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Urdu</span>
            </StyledLabel>

            <StyledWord
              className="rtl-font"
              position="rtl"
              readOnly
              type="text"
              value={defination.urdu_defination}
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
              value={defination.english_defination}
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
              value={defination.roman_balochi_defination}
            ></StyledWord>
          </StyledWordCon>
        </div>

        {/* Back button */}
        <Btn onClick={() => navigate("/search")} src={heroImg}></Btn>
      </StyledContainer>
    </>
  );
};

export default Word;
