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
  BtnCon,
  StyledBtnContainer,
  StyledMessage,
} from "../WordList/Styled.WordList";
import { deleteData, verifyData } from "../../api";
import { AddMessageContext } from "../../state/AddMessageContext";
import { Margin, StyledTitle, LineBreak } from "../AddWord/Styled";
import { NavButton, NavButtons } from "../Navbar/Navbar.Styled";

const VerifyWord = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const [shouldShow, setShouldShow] = useState("Word");
  const [message, setMessage] = useContext(AddMessageContext);
  const [word, setWord] = useState(state.word);
  const [example, setExample] = useState(state.example);
  const [defination, setDefination] = useState(state.defination);
  const [localMessage, setLocalMessage] = useState("");

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
          <StyledWordCon height="100px">
            <StyledLabel>
              <span style={{ padding: "5px 0px" }}>Balochi</span>
            </StyledLabel>
            <StyledWord
              className="rtl-font"
              position="rtl"
              onChange={handleWordChange}
              id="balochi_word"
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
              onChange={handleWordChange}
              id="brahoi_word"
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
              onChange={handleWordChange}
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
              id="roman_balochi_word"
              type="text"
              value={word.roman_balochi_word}
            ></StyledWord>
          </StyledWordCon>
        </div>

        {/* Examples */}
        <div style={{ display: shouldShow === "Example" ? "" : "none" }}>
          <StyledWordCon height="100px">
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
          <StyledWordCon height="100px">
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
          <StyledWordCon height="100px">
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
        <div style={{ display: shouldShow === "Defination" ? "" : "none" }}>
          <StyledWordCon height="100px">
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
          <StyledWordCon height="100px">
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
          <StyledWordCon height="100px">
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
          <BtnCon
            onClick={async () => {
              const shouldDelete = window.confirm("Confirm to Delete");
              if (shouldDelete) {
                let token = JSON.parse(
                  localStorage.getItem("balochi-dectioanry-auth")
                )?.token;
                const result = await deleteData(
                  word.wordId,
                  example.exampleId,
                  defination.definationId,
                  token
                );
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
          >
            <Btn color="red" src={deleteImg}></Btn>
          </BtnCon>
          <BtnCon onClick={() => navigate("/author/unverifiedwords")}>
            <Btn src={backImg}></Btn>
          </BtnCon>
          <BtnCon
            onClick={async () => {
              if (shouldShow === "Word") {
                setShouldShow("Example");
                return;
              } else if (shouldShow === "Example") {
                setShouldShow("Defination");
                return;
              }
              if (
                (word.balochi_word.trim().length === 0 &&
                  word.brahoi_word.trim().length === 0) ||
                word.urdu_word.trim().length === 0 ||
                word.english_word.trim().length === 0 ||
                word.roman_balochi_word.trim().length === 0
              ) {
                setLocalMessage(
                  "You must provide every word in every given language...\n Don't need to provide example or defination"
                );
              } else {
                const shouldSave = window.confirm("Confirm to Save");

                if (shouldSave) {
                  let auth = JSON.parse(
                    localStorage.getItem("balochi-dectioanry-auth")
                  );

                  const dataToVerify = {
                    userId: auth?.author.authorId,
                    word: {
                      wordId: word.wordId,
                      balochi_word: word.balochi_word.trim(),
                      brahoi_word: word.brahoi_word.trim(),
                      urdu_word: word.urdu_word.trim(),
                      english_word: word.english_word.trim(),
                      roman_balochi_word: word.roman_balochi_word.trim(),
                    },
                    defination: {
                      definationId: defination.definationId,
                      balochi_defination: defination.balochi_defination.trim(),
                      brahoi_defination: defination.brahoi_defination.trim(),
                      urdu_defination: defination.urdu_defination.trim(),
                      english_defination: defination.english_defination.trim(),
                      roman_balochi_defination:
                        defination.roman_balochi_defination.trim(),
                    },
                    example: {
                      exampleId: example.exampleId,
                      balochi_example: example.balochi_example.trim(),
                      brahoi_example: example.brahoi_example.trim(),
                      urdu_example: example.urdu_example.trim(),
                      english_example: example.english_example.trim(),
                      roman_balochi_example:
                        example.roman_balochi_example.trim(),
                    },
                  };

                  const result = await verifyData(dataToVerify, auth?.token);

                  setMessage(result.message);
                  setTimeout(() => {
                    setMessage("");
                  }, 7000);

                  navigate("/author/unverifiedwords");
                }
              }
            }}
          >
            <Btn color="green" src={saveImg}></Btn>
          </BtnCon>
        </StyledBtnContainer>
        <StyledMessage>{localMessage}</StyledMessage>
      </StyledContainer>
    </>
  );
};

export default VerifyWord;
