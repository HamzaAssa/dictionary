import { useContext, useRef } from "react";
import { AppLanguageContext } from "../../../state/AppLanguageContext";
import {
  StyledInput,
  StyledCon,
  StyledContainer,
  StyledSelect,
} from "./Search.Styled";

const Search = ({
  position,
  search,
  handleChange,
  margin,
  handleLangChange,
}) => {
  const [appLanguage, setAppLanguage] = useContext(AppLanguageContext);
  const language = useRef(null);

  return (
    <StyledContainer margin={margin}>
      <form>
        <StyledCon>
          <StyledSelect
            onChange={handleLangChange}
            ref={language}
            id="languages"
          >
            <option defaultChecked value="balochi_word">
              Balochi
            </option>
            <option defaultChecked value="brahoi_word">
              Brahoi
            </option>
            <option value="english_word">English</option>
            <option value="urdu_word">Urdu</option>
            <option value="roman_balochi_word">Roman Balochi</option>
          </StyledSelect>
          <StyledInput
            position={position}
            onChange={(e) => {
              handleChange(e, language.current.value);
            }}
            value={search}
            name="search"
            type="text"
            placeholder={appLanguage.searchPlaceholder}
          ></StyledInput>
          {/* <StyledSubmit
            size={appLanguage.type}
            value={appLanguage.submit}
            name="submit"
            type="submit"
          ></StyledSubmit> */}
        </StyledCon>
      </form>
    </StyledContainer>
  );
};

export default Search;
