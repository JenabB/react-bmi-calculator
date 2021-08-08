import React from "react";
import AppBar from "./components/AppBar";
import History from "./components/History";
import Input from "./components/Input";
import Result from "./components/Result";
import ResultButton from "./components/ResultButton";
import Suggestion from "./components/Suggestion";
import { GlobalProvider } from "./context/GlobalState";
const App = () => {
  return (
    <GlobalProvider>
      <AppBar />
      <Input />
      <ResultButton />
      <Result />
      <Suggestion />
      <History />
    </GlobalProvider>
  );
};

export default App;
