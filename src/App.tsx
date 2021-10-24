import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Tolbar from "./components/Tolbar";
import Footer from "./components/Footer";

import Login from "./views/Login";

import Home from "./views/Home";
import Details from "./views/Details";
import NotFound from "./views/NotFound";

function App() {
  const [loggin, setLoggin] = useState(true);

  if (!loggin)
  return (
    <React.Fragment>
      <Login setLoggin={setLoggin} />
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <Router>
        <div className="flex flex-col h-screen justify-between">
          <Tolbar></Tolbar>
          <main className="container grid justify-center mb-auto">
            <Switch>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/details">
                <Details />
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
