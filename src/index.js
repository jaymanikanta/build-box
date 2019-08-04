import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/navbar/navbar.component";
import HeadingTitle from "./components/heading/heading.component";
import LayoutPage from "./components/layout/layout.component";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HeadingTitle />
      <LayoutPage />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
