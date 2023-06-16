import backImg from "../../images/back.png";
import deleteImg from "../../images/delete.png";
import saveImg from "../../images/save.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledWord,
  StyledWordCon,
  StyledLabel,
  Btn,
  StyledBtnContainer,
  StyledMessage,
} from "../WordList/Styled.WordList";
import { Margin, StyledTitle, LineBreak } from "./Styled";
import { addWordToDB } from "../../api";
import { NavButtons, NavButton } from "../Navbar/Navbar.Styled";

const Addword = () => {
  const navigate = useNavigate();
  const [shouldShow, setShouldShow] = useState("Word");
  const [word, setWord] = useState({
    balochi_word: "",
    brahoi_word: "",
    urdu_word: "",
    english_word: "",
    roman_balochi_word: "",
  });
  const [example, setExample] = useState({
    balochi_example: "",
    brahoi_example: "",
    urdu_example: "",
    english_example: "",
    roman_balochi_example: "",
  });
  const [defination, setDefination] = useState({
    balochi_defination: "",
    brahoi_defination: "",
    urdu_defination: "",
    english_defination: "",
    roman_balochi_defination: "",
  });
  const [message, setMessage] = useState("");
  const handleWordChange = (e) => {
    setWord({
      ...word,
      [e.target.id]: e.target.value,
    });
  };
  const handleDefinationChange = (e) => {
    setDefination({
      ...defination,
      [e.target.id]: e.target.value,
    });
  };
  const handleExampleChange = (e) => {
    setExample({
      ...example,
      [e.target.id]: e.target.value,
    });
  };

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
          <StyledWordCon height="85px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Balochi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              onChange={handleWordChange}
              maxLength={100}
              id="balochi_word"
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
              onChange={handleWordChange}
              maxLength={100}
              id="brahoi_word"
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
              onChange={handleWordChange}
              maxLength={100}
              id="urdu_word"
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
              onChange={handleWordChange}
              maxLength={100}
              id="english_word"
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
              onChange={handleWordChange}
              maxLength={100}
              id="roman_balochi_word"
              type="text"
              value={word.roman_balochi_word}
            ></StyledWord>
          </StyledWordCon>
        </div>
        {/* Examples */}
        {/* <LineBreak />
        <StyledTitle
          onClick={() => {
            setShouldShow({
              ...shouldShow,
              example: shouldShow.example ? false : true,
            });
          }}
        >
          Example
          <span style={{ marginLeft: "10px" }}>
            {shouldShow.example ? <span>&#9650;</span> : <span>&#9660;</span>}
          </span>
        </StyledTitle> 
        <LineBreak /> */}
        <div style={{ display: shouldShow === "Example" ? "" : "none" }}>
          <StyledWordCon height="85px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Balochi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              onChange={handleExampleChange}
              maxLength={500}
              id="balochi_example"
              type="text"
              value={example.balochi_example}
            ></StyledWord>
          </StyledWordCon>
          <StyledWordCon height="85px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Brahoi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              onChange={handleExampleChange}
              maxLength={500}
              id="brahoi_example"
              type="text"
              value={example.brahoi_example}
            ></StyledWord>
          </StyledWordCon>
          <StyledWordCon height="85px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Urdu</span>
            </StyledLabel>

            <StyledWord
              className="rtl-font"
              position="rtl"
              onChange={handleExampleChange}
              maxLength={500}
              id="urdu_example"
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
              onChange={handleExampleChange}
              maxLength={500}
              id="english_example"
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
              onChange={handleExampleChange}
              maxLength={500}
              id="roman_balochi_example"
              type="text"
              value={example.roman_balochi_example}
            ></StyledWord>
          </StyledWordCon>
        </div>
        {/* Defination */}
        {/* <LineBreak />
        <StyledTitle
          onClick={() => {
            setShouldShow({
              ...shouldShow,
              defination: shouldShow.defination ? false : true,
            });
          }}
        >
          Defination
          <span style={{ marginLeft: "10px" }}>
            {shouldShow.defination ? (
              <span>&#9650;</span>
            ) : (
              <span>&#9660;</span>
            )}
          </span>
        </StyledTitle>
        <LineBreak /> */}
        <div style={{ display: shouldShow === "Defination" ? "" : "none" }}>
          <StyledWordCon height="85px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Balochi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              onChange={handleDefinationChange}
              id="balochi_defination"
              type="text"
              value={defination.balochi_defination}
            ></StyledWord>
          </StyledWordCon>
          <StyledWordCon height="85px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Brahoi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              onChange={handleDefinationChange}
              id="brahoi_defination"
              type="text"
              value={defination.brahoi_defination}
            ></StyledWord>
          </StyledWordCon>
          <StyledWordCon height="85px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Urdu</span>
            </StyledLabel>

            <StyledWord
              className="rtl-font"
              position="rtl"
              onChange={handleDefinationChange}
              id="urdu_defination"
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
              onChange={handleDefinationChange}
              id="english_defination"
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
              onChange={handleDefinationChange}
              id="roman_balochi_defination"
              type="text"
              value={defination.roman_balochi_defination}
            ></StyledWord>
          </StyledWordCon>
        </div>
        {/* Buttons */}
        <StyledBtnContainer>
          <Btn
            onClick={() => {
              setWord({
                balochi_word: "",
                brahoi_word: "",
                urdu_word: "",
                english_word: "",
                roman_balochi_word: "",
              });
              setExample({
                balochi_example: "",
                brahoi_example: "",
                urdu_example: "",
                english_example: "",
                roman_balochi_example: "",
              });
              setDefination({
                balochi_defination: "",
                brahoi_defination: "",
                urdu_defination: "",
                english_defination: "",
                roman_balochi_defination: "",
              });
            }}
            src={deleteImg}
          ></Btn>

          <Btn onClick={() => navigate("/")} src={backImg}></Btn>

          <Btn
            color="green"
            onClick={async () => {
              setMessage("");
              if (
                word.balochi_word.trim().length === 0 &&
                word.brahoi_word.trim().length === 0 &&
                word.urdu_word.trim().length === 0 &&
                word.english_word.trim().length === 0 &&
                word.roman_balochi_word.trim().length === 0
              ) {
                setMessage(
                  "You must provide one word in any given language..."
                );
              } else {
                const result = await addWordToDB({
                  // word
                  balochi_word: word.balochi_word.trim(),
                  brahoi_word: word.brahoi_word.trim(),
                  urdu_word: word.urdu_word.trim(),
                  english_word: word.english_word.trim(),
                  roman_balochi_word: word.roman_balochi_word.trim(),

                  // example
                  balochi_example: example.balochi_example.trim(),
                  brahoi_example: example.brahoi_example.trim(),
                  urdu_example: example.urdu_example.trim(),
                  english_example: example.english_example.trim(),
                  roman_balochi_example: example.roman_balochi_example.trim(),

                  // english
                  balochi_defination: defination.balochi_defination.trim(),
                  brahoi_defination: defination.brahoi_defination.trim(),
                  urdu_defination: defination.urdu_defination.trim(),
                  english_defination: defination.english_defination.trim(),
                  roman_balochi_defination:
                    defination.roman_balochi_defination.trim(),
                });
                setMessage(result.message);
                if (result.status === 200) {
                  setWord({
                    balochi_word: "",
                    brahoi_word: "",
                    urdu_word: "",
                    english_word: "",
                    roman_balochi_word: "",
                  });
                  setExample({
                    balochi_example: "",
                    brahoi_example: "",
                    urdu_example: "",
                    english_example: "",
                    roman_balochi_example: "",
                  });
                  setDefination({
                    balochi_defination: "",
                    brahoi_defination: "",
                    urdu_defination: "",
                    english_defination: "",
                    roman_balochi_defination: "",
                  });
                }
              }
              // navigate("/author/unverifiedwords");
            }}
            src={saveImg}
          ></Btn>
        </StyledBtnContainer>
        <StyledMessage>{message}</StyledMessage>
      </StyledContainer>
    </>
  );
};

export default Addword;
