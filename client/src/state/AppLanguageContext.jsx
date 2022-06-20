import { createContext, useState } from "react";
import english from "../Lang/english.json";
import urdu from "../Lang/urdu.json";
export const AppLanguageContext = createContext();

export const AppLanguageProvider = (props) => {
  const [appLanguage, setAppLanguage] = useState(english);
  return (
    <AppLanguageContext.Provider value={[appLanguage, setAppLanguage]}>
      {props.children}
    </AppLanguageContext.Provider>
  );
};
