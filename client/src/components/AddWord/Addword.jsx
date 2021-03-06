import backImg from "../../images/back.svg";
import deleteImg from "../../images/delete.svg";
import saveImg from "../../images/save.svg";
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
import { Margin } from "./Styled";
import { addWordToDB } from "../../api";

const Addword = () => {
  const navigate = useNavigate();
  const [word, setWord] = useState({
    balochi_word: "",
    urdu_word: "",
    english_word: "",
    roman_balochi_word: "",
  });
  const [message, setMessage] = useState("");
  const handleChange = (e) => {
    setWord({
      ...word,
      [e.target.id]: e.target.value,
    });
  };

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
            onChange={handleChange}
            id="balochi_word"
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
            onChange={handleChange}
            id="urdu_word"
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
            onChange={handleChange}
            id="english_word"
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
            onChange={handleChange}
            id="roman_balochi_word"
            type="text"
            value={word.roman_balochi_word}
          ></StyledWord>
        </StyledWordCon>
        <StyledBtnContainer>
          <Btn
            color="red"
            onClick={() => {
              setWord({
                balochi_word: "",
                urdu_word: "",
                english_word: "",
                roman_balochi_word: "",
              });
            }}
            src={deleteImg}
          ></Btn>

          <Btn onClick={() => navigate("/")} src={backImg}></Btn>

          <Btn
            color="green"
            onClick={async () => {
              if (
                word.balochi_word.trim().length === 0 &&
                word.urdu_word.trim().length === 0 &&
                word.english_word.trim().length === 0 &&
                word.roman_balochi_word.trim().length === 0
              ) {
                setMessage(
                  "You must provide one word in any given language..."
                );
              } else {
                const result = await addWordToDB({
                  balochi_word: word.balochi_word.trim(),
                  urdu_word: word.urdu_word.trim(),
                  english_word: word.english_word.trim(),
                  roman_balochi_word: word.roman_balochi_word.trim(),
                });
                setMessage(result.message);
                setWord({
                  balochi_word: "",
                  urdu_word: "",
                  english_word: "",
                  roman_balochi_word: "",
                });
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
