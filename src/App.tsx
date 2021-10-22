import React from "react";

import Tolbar from "./components/Tolbar";
import QuizCard from "./components/QuizCard";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Tolbar></Tolbar>
      <div className="container grid justify-center">
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
        <QuizCard></QuizCard>
      </div>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
