import React from "react";
import AppBar from "./components/AppBar";
import Input from "./components/Input";
import Result from "./components/Result";
import { GlobalProvider } from "./context/GlobalState";
const App = () => {
  return (
    <GlobalProvider>
      <AppBar />
      <Input />
      <Result />
    </GlobalProvider>
  );
};

export default App;
