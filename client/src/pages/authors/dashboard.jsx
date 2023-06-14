import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { getunverifiedWords } from "../../api";
import Search from "../../components/ActionSection/Search/Search";
import {
  StyledMessage,
  StyledWord,
  StyledWordCon,
  StyledContainer,
} from "../../components/WordList/Styled.WordList";
import { AddMessageContext } from "../../state/AddMessageContext";
import { StyledNoti } from "./Styled.Dashboard";
// import Balochi from "../../components/ActionSection/Add/Fields/Balochi";

const Dashboard = () => {
  const [forSearching, setForSearching] = useState([]);
  const [unverifiedWords, setUnverifiedWords] = useState([]);
  const [language, setLanguage] = useState(["balochi_word", "rtl"]);
  const [message, setMessage] = useContext(AddMessageContext);

  const navigate = useNavigate();
  const { state } = useLocation();
  useEffect(() => {
    const authenticator = JSON.parse(
      localStorage.getItem("balochi-dectioanry-auth")
    );
    if (authenticator === null) {
      navigate("/author/login");
    } else {
      const token = jwtDecode(authenticator?.token);
      if (Date.now() >= token.exp * 1000) {
        navigate("/author/login");
      } else {
        let sentToken = JSON.parse(
          localStorage.getItem("balochi-dectioanry-auth")
        )?.token;
        getunverifiedWords(sentToken).then((data) => {
          setUnverifiedWords(data);
          setForSearching(data);
        });
      }
    }
  }, []);

  ///// SEarch

  const [search, setSearch] = useState("");
  const onChange = (e, language) => {
    setSearch(e.target.value.trimStart());
    let searchKey = e.target.value.trimStart().toLowerCase();
    let matchedWords = [];
    setUnverifiedWords([]);
    forSearching.forEach((word) => {
      let searchparam = word[language].toLowerCase();
      if (searchparam.startsWith(searchKey, 0)) {
        matchedWords.push(word);
      }
    });

    setUnverifiedWords(matchedWords);
  };

  const handleClick = (word) => {
    navigate("/author/unverifiedwords/verify", { state: { word } });
  };

  const onLnagSelect = (e) => {
    switch (e.target.value) {
      case "balochi_word":
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

  // if(message)

  return (
    <>
      <StyledNoti>
        <h3>
          Please make sure not to add a word that has already been added...
        </h3>
      </StyledNoti>
      <Search
        position={language[1]}
        search={search}
        handleChange={onChange}
        margin="150px"
        handleLangChange={onLnagSelect}
      />
      <StyledContainer>
        {unverifiedWords.length === 0 ? (
          <h3>No UnverifiedWords</h3>
        ) : (
          unverifiedWords.map((word) => {
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
        <StyledMessage>{message}</StyledMessage>
      </StyledContainer>
    </>
  );
};

export default Dashboard;
