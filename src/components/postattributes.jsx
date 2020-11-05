import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useHistory } from "react-router";
import './post.css';


function Attributes(props) {

  const history = useHistory();

  return (

    

<div>

 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <i id="arrow" className="fas fa-arrow-left" />
          <div className="container-fluid">
            <a id="olx" className="navbar-brand" href="#"><svg width="50px" height="50px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd">
                <path className="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z">
                </path>
              </svg></a>
          </div>
        </nav>
        <h4>POST YOUR AD</h4>
        <div id="con1" className="container">
          <h5 className = "bold">SELECTED CATEGORY</h5>

          <div className = "headerline">


          </div>

          <br/>
          <div className="container">

          <h5 className = "bold">INCLUDE SOME DETAILS</h5>
          <div className="container">
          <label for="">Condition *</label>

          <div className="rui-D-GoM"><button className="rui-YHJnT" data-aut-id="opnew_used0">New</button><button className="rui-YHJnT" data-aut-id="opnew_used1">Used</button></div>
          </div>
          </div>

          

        
         
        </div>



        <br />
        <br />
        <footer>
          <div id="con2" className="container-fluid">
            <div className="container">
              <p className="footerp1">Sitemap</p>
              <p className="footerp2">Free Classified in Pakistan . @2006-2020 OLX </p>
            </div>
          </div>
        </footer>
      </div>

    


    












  )
}

export default Attributes