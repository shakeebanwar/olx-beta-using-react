import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import HomePage from "./components/home"
import Header from "./components/header"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Route path="/" component = {HomePage}/>
    </BrowserRouter>
    
  );
}

export default App;
