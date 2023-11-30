import {AppRoutes} from "./routes";
import React, {useState} from "react";
import {createGlobalStyle} from "styled-components";
import axios from "axios";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
    url("/fonts/StratosSkyeng.woff") format("woff2"),
    url("/fonts/StratosSkyeng.woff2") format("woff");
    font-weight: 400;
    font-style: normal;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: "StratosSkyeng", sans-serif;
    color: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  a,
  a:visited {
    text-decoration: none;
    font-family: "StratosSkyeng", sans-serif;
    cursor: pointer;
  }
  ul li {
    list-style: none;
  }
`
const [books, setBooks] = useState(null);
export default function App() {
  return (
    <>
        {/*<GlobalStyle/>*/}
        {/*<AppRoutes/>*/}
        <h1>Hello World !</h1>

    </>
  );
};
