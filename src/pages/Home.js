import React from "react";
import AppBar from "../components/AppBar";
import Input from "../components/Input";
import ResultButton from "../components/ResultButton";

const Home = () => {
  return (
    <div>
      <AppBar />
      <Input />
      <ResultButton />
      <svg
        className="fixed bottom-0 duration-1000"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#0099ff"
          fill-opacity="1"
          d="M0,128L40,144C80,160,160,192,240,218.7C320,245,400,267,480,250.7C560,235,640,181,720,149.3C800,117,880,107,960,106.7C1040,107,1120,117,1200,122.7C1280,128,1360,128,1400,128L1440,128L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Home;
