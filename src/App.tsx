import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Tolbar from "./components/Tolbar";
import Footer from "./components/Footer";

import Login from "./views/Login";

import Home from "./views/Home";
import Details from "./views/Details";
import NotFound from "./views/NotFound";
import Answer from "./views/Answer";

function App() {
  const loggin = !!localStorage.getItem("Bearer");

  if (!loggin)
  return (
    <React.Fragment>
      <Router>
        <Route path="/">
          <Redirect to="/login" />
          <Login></Login>
        </Route>
      </Router>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Router>
        <div className="flex flex-col w-screen h-screen justify-between">
          <Tolbar></Tolbar>
          <main className="container grid justify-center mb-auto p-2">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/details/:id">
                <Details />
              </Route>
              <Route path="/answer/:idQuiz">
                <Answer />
              </Route>
              <Redirect to="/home"></Redirect>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </main >
          <Footer></Footer>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
