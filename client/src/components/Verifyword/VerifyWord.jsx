import backImg from "../../images/back.png";
import deleteImg from "../../images/delete.png";
import saveImg from "../../images/save.png";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledContainer,
  StyledWord,
  StyledWordCon,
  StyledLabel,
  Btn,
  StyledBtnContainer,
  StyledMessage,
} from "../WordList/Styled.WordList";
import { deleteWord, saveWord } from "../../api";
import { AddMessageContext } from "../../state/AddMessageContext";
import { Margin } from "../AddWord/Styled";

const VerifyWord = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [message, setMessage] = useContext(AddMessageContext);
  const [word, setWord] = useState(state.word);
  const [localMessage, setLocalMessage] = useState("");

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
            <span style={{ padding: "5px 0px" }}>Balochi</span>
          </StyledLabel>
          <StyledWord
            className="rtl-font"
            position="rtl"
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
            id="roman_balochi_word"
            type="text"
            value={word.roman_balochi_word}
          ></StyledWord>
        </StyledWordCon>
        <StyledBtnContainer>
          <Btn
            color="red"
            onClick={async () => {
              const shouldDelete = window.confirm("Confirm to Delete");
              if (shouldDelete) {
                let token = JSON.parse(
                  localStorage.getItem("balochi-dectioanry-auth")
                )?.token;
                const result = await deleteWord(word.wordId, token);
                setMessage(result.message);
                setTimeout(() => {
                  setMessage("");
                }, 7000);

                navigate("/author/unverifiedwords", {
                  state: {
                    status: result.status,
                  },
                });
              }
            }}
            src={deleteImg}
          ></Btn>

          <Btn
            onClick={() => navigate("/author/unverifiedwords")}
            src={backImg}
          ></Btn>

          <Btn
            color="green"
            onClick={async () => {
              if (
                word.balochi_word.trim().length === 0 ||
                word.brahoi_word.trim().length === 0 ||
                word.urdu_word.trim().length === 0 ||
                word.english_word.trim().length === 0 ||
                word.roman_balochi_word.trim().length === 0
              ) {
                setLocalMessage(
                  "You must provide every word in every given language..."
                );
              } else {
                const shouldSave = window.confirm("Confirm to Save");

                if (shouldSave) {
                  let auth = JSON.parse(
                    localStorage.getItem("balochi-dectioanry-auth")
                  );

                  const result = await saveWord(
                    {
                      wordId: word.wordId,
                      balochi_word: word.balochi_word.trim(),
                      brahoi_word: word.brahoi_word.trim(),
                      urdu_word: word.urdu_word.trim(),
                      english_word: word.english_word.trim(),
                      roman_balochi_word: word.roman_balochi_word.trim(),
                      userId: auth?.author.authorId,
                    },
                    auth?.token
                  );

                  setMessage(result.message);
                  setTimeout(() => {
                    setMessage("");
                  }, 7000);

                  navigate("/author/unverifiedwords");
                }
              }
            }}
            src={saveImg}
          ></Btn>
        </StyledBtnContainer>
        <StyledMessage>{localMessage}</StyledMessage>
      </StyledContainer>
    </>
  );
};

export default VerifyWord;
