import React from 'react';
import './App.css';
import {Layout} from "./components/layout/Layout";
import { createGlobalStyle } from "styled-components"
import {colorConfig} from "./configs/colorConfig";


const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${colorConfig.bgPrimary};
    color: ${colorConfig.colorPrimary};
    font-size: 20px;
  }
  
  button {
    border: none;
    font-size: 1em;
  }
`

function App() {
  return (
    <Layout>
        <GlobalStyle/>

    </Layout>
  );
}

export default App;
