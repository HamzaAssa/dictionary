import { useEffect, useState } from "react";
import { getAllVerifiedData } from "../../api";
import { StyledContainer, StyledWord, StyledWordCon } from "./Styled.WordList";
import { useNavigate } from "react-router-dom";
import Search from "../ActionSection/Search/Search";
const WordList = () => {
  const navigate = useNavigate();
  const [verifiedWords, setVerifiedWords] = useState([]);
  const [forSearching, setForSearching] = useState([]);
  const [verifieExamples, setVerifiedExamples] = useState([]);
  const [verifiedDefinations, setVerifiedDefinations] = useState([]);
  const [language, setLanguage] = useState(["balochi_word", "rtl"]);

  useEffect(() => {
    const result = getAllVerifiedData().then((data) => {
      setVerifiedWords(data.words);
      setForSearching(data.words);
      setVerifiedExamples(data.examples);
      setVerifiedDefinations(data.definations);
    });
  }, []);

  const [search, setSearch] = useState("");

  const onChange = (e, language) => {
    // "  What ".trimStart
    setSearch(e.target.value.trimStart());
    let searchKey = e.target.value.trimStart().toLowerCase();

    let matchedWords = [];
    setVerifiedWords([]);
    forSearching.forEach((word) => {
      let searchparam = word[language].toLowerCase();
      if (searchparam.startsWith(searchKey, 0)) {
        matchedWords.push(word);
      }
    });

    setVerifiedWords(matchedWords);
  };

  const onLnagSelect = (e) => {
    switch (e.target.value) {
      case "balochi_word":
        setLanguage([e.target.value, "rtl"]);
        break;
      case "brahoi_word":
        setLanguage([e.target.value, "rtl"]);
        break;
      case "urdu_word":
        setLanguage([e.target.value, "rtl"]);
        break;
      case "english_word":
        setLanguage([e.target.value, "ltr"]);
        break;
      case "roman_balochi_word":
        setLanguage([e.target.value, "ltr"]);
        break;
      default:
        setLanguage(["balochi_word", "rtl"]);
        break;
    }
  };

  const handleClick = (word) => {
    let example = {};
    let defination = {};
    for (let i = 0; i < verifiedWords.length; i++) {
      if (word.wordId === verifieExamples[i].word_id) {
        example = verifieExamples[i];
      }
      if (word.wordId === verifiedDefinations[i].word_id) {
        defination = verifiedDefinations[i];
      }
    }

    navigate("/search/word", { state: { word, example, defination } });
  };

  return (
    <>
      <Search
        position={language[1]}
        search={search}
        handleChange={onChange}
        margin="100px"
        handleLangChange={onLnagSelect}
      />
      <StyledContainer>
        {verifiedWords.length === 0 ? (
          <h3>No Words</h3>
        ) : (
          verifiedWords.map((word) => {
            return (
              <StyledWordCon
                height="55px"
                key={word.wordId}
                onClick={() => handleClick(word)}
              >
                <StyledWord
                  position={language[1]}
                  readOnly
                  type="text"
                  value={word[language[0]]}
                ></StyledWord>
              </StyledWordCon>
            );
          })
        )}
      </StyledContainer>
    </>
  );
};

export default WordList;
