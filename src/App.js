import React from 'react';
import './App.css';
import {BrowserRouter,Route,Link} from 'react-router-dom'
import HomePage from "./components/home"
import Header from "./components/header"
import Footer from "./components/footer"

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Route path="/" component = {HomePage}/>
    <Footer/>
    </BrowserRouter>
    
  );
}

export default App;
