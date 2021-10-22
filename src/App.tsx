import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Tolbar from "./components/Tolbar";
import Footer from "./components/Footer";

import Home from "./views/Home";
import Details from "./views/Details";
import NotFound from "./views/NotFound";

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="flex flex-col h-screen justify-between">
          <Tolbar></Tolbar>
          <main className="container grid justify-center mb-auto">
            <Switch>
              <Route path="/details">
                <Details />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
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
