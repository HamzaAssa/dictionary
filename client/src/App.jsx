import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Dashboard from "./pages/authors/dashboard";
import WordList from "./components/WordList/wordlist";
import { AppLanguageProvider } from "./state/AppLanguageContext";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Word from "./components/Word/Word";
import Addword from "./components/AddWord/Addword";
import VerifyWord from "./components/Verifyword/VerifyWord";
import { MessageProvider } from "./state/AddMessageContext";
function App() {
  return (
    <AppLanguageProvider>
      <MessageProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/addword" exact element={<Addword />} />
            {/* <Route path="/add-definations" exact element={<AddDefination />} />
            <Route path="/add-examples" exact element={<AddExample />} /> */}
            <Route path="/author/login" exact element={<Login />} />
            <Route
              path="/author/unverifiedwords"
              exact
              element={<Dashboard />}
            />
            <Route
              path="/author/unverifiedwords/verify"
              exact
              element={<VerifyWord />}
            />
            <Route path="/search" exact element={<WordList />} />
            <Route path="/search/word" exact element={<Word />} />
          </Routes>
        </BrowserRouter>
      </MessageProvider>
    </AppLanguageProvider>
  );
}
export default App;
