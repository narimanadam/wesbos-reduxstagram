import React from "react";
import "./App.css";
import Main from "./components/Main";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <div>
            <Main />
            <Route exact path="/" component={PhotoGrid} />
            <Route exact path="/view/:postId" component={Single} />
          </div>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
