import React from "react";
import "../assets/styles/App.css";
import Routes from "../Route/Route";
import fetch from "node-fetch";
import Unsplash from "unsplash-js";
import { accessKey } from "../constant/constant"

global.fetch = fetch;
export const UNSPLASH = new Unsplash({
  accessKey: accessKey,
});

function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
