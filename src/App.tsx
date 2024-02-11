import React from 'react';
import './App.css';
import {Layout} from "./components/layout/Layout";
import { createGlobalStyle } from "styled-components"
import {colorConfig} from "./configs/colorConfig";
import {Calendar} from "./components/calendar/Calendar";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colorConfig.bgPrimary};
    color: ${colorConfig.colorPrimary};
    font-size: 16px;
  }
  
  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
  button {
    border: none;
    font-size: 1em;
  }
  
  main {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
`;

function App() {
  return (
    <Layout>
        <GlobalStyle/>
        <Calendar/>
    </Layout>
  );
}

export default App;
