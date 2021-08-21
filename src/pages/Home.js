import React from "react";
import AppBar from "../components/AppBar";
// import History from "./components/History";
import Input from "../components/Input";
import ResultButton from "../components/ResultButton";

const Home = () => {
  return (
    <div>
      <AppBar />
      <Input />

      <ResultButton />

      {/* <History /> */}
    </div>
  );
};

export default Home;
