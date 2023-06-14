import { useEffect, useState } from "react";
import { getAllWords } from "../../api";
import { StyledContainer, StyledWord, StyledWordCon } from "./Styled.WordList";
import { useNavigate } from "react-router-dom";
import Search from "../ActionSection/Search/Search";
const WordList = () => {
  const navigate = useNavigate();
  const [wordList, setWordList] = useState([]);
  const [forSearching, setForSearching] = useState([]);
  const [language, setLanguage] = useState(["balochi_word", "rtl"]);

  useEffect(() => {
    const result = getAllWords().then((data) => {
      setWordList(data);
      setForSearching(data);
    });
  }, []);

  const [search, setSearch] = useState("");

  const onChange = (e, language) => {
    // "  What ".trimStart
    setSearch(e.target.value.trimStart());
    let searchKey = e.target.value.trimStart().toLowerCase();

    let matchedWords = [];
    setWordList([]);
    forSearching.forEach((word) => {
      let searchparam = word[language].toLowerCase();
      if (searchparam.startsWith(searchKey, 0)) {
        matchedWords.push(word);
      }
    });

    setWordList(matchedWords);
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
    navigate("/search/word", { state: { word } });
  };

  return (
    <>
      <Search
        position={language[1]}
        search={search}
        handleChange={onChange}
        margin="130px"
        handleLangChange={onLnagSelect}
      />
      <StyledContainer>
        {wordList.length === 0 ? (
          <h3>No Words</h3>
        ) : (
          wordList.map((word) => {
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
