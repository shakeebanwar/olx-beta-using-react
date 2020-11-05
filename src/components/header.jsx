import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { useHistory } from "react-router";
import check from "./post"
function Header(props) {

  const history = useHistory();

  return (

    


    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">

      {/* olx logo */}
      <div className="olxlogo">
        <svg width="48px" height="48px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M661.333 256v512h-128v-512h128zM277.333 298.667c117.824 0 213.333 95.531 213.333 213.333s-95.509 213.333-213.333 213.333c-117.824 0-213.333-95.531-213.333-213.333s95.509-213.333 213.333-213.333zM794.496 384l37.504 37.504 37.504-37.504h90.496v90.496l-37.504 37.504 37.504 37.504v90.496h-90.496l-37.504-37.504-37.504 37.504h-90.496v-90.496l37.504-37.504-37.504-37.504v-90.496h90.496zM277.333 426.667c-47.061 0-85.333 38.293-85.333 85.333s38.272 85.333 85.333 85.333c47.061 0 85.333-38.293 85.333-85.333s-38.272-85.333-85.333-85.333z"></path></svg>
      </div>


      {/* olx left search */}
      <div data-aut-id="locationBox" className="_16LoD"><span><svg width="25px" height="25px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-77aaa" d="M448 725.333c-152.917 0-277.333-124.416-277.333-277.333s124.416-277.333 277.333-277.333c152.917 0 277.333 124.416 277.333 277.333s-124.416 277.333-277.333 277.333v0zM884.437 824.107v0.021l-151.915-151.936c48.768-61.781 78.144-139.541 78.144-224.192 0-199.979-162.688-362.667-362.667-362.667s-362.667 162.688-362.667 362.667c0 199.979 162.688 362.667 362.667 362.667 84.629 0 162.411-29.376 224.171-78.144l206.144 206.144h60.352v-60.331l-54.229-54.229z" /></svg></span> 
    
      <input type="text" name="" id="" className="_1jABB" placeholder = "Pakistan"/>
      <span class="dropdown">
      <button className = "arrow" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
        

      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
      </button>


      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a className="dropdown-item" href="#">Karachi</a>
        <a className="dropdown-item" href="#">Islamabad</a>
        <a className="dropdown-item" href="#">Lahore</a>
        <a className="dropdown-item" href="#">Quetta</a>

      </div>
      </span>
     </div>




      {/* olx middle search bar */}
      <div className="middlesearch" id="navbarSupportedContent">

        <form method="" action="#">
          <input type="text" className="textbox" placeholder="Find Cars Mobiles and more......" />


          <button className="button" ><i className="fas fa-search text-grey" aria-hidden="true" /></button>
        </form>

      </div>

      {/* message icon */}

      <div className="messageicon">
        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-77aaa" d="M469.333 171.119c-164.693 0-298.667 134.684-298.667 300.25v359.529l108.907-54.753 19.093-4.525h256c164.693 0 298.667-134.684 298.667-300.25s-133.973-300.25-298.667-300.25h-85.333zM147.093 938.667l-61.76-38.368v-428.929c0-212.856 172.267-386.036 384-386.036h85.333c211.733 0 384 173.18 384 386.036s-172.267 386.036-384 386.036h-245.931l-161.643 81.261z" /></svg>
      </div>

      {/* notification icon  */}

      <div className="notificationicon">



        <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-77aaa" d="M730.855 763.955h-435.559c-0.833-87.945-2.676-279.627-2.676-289.496 0-119.351 98.911-216.463 220.498-216.463s220.455 97.112 220.455 216.463c0 10-1.843 201.594-2.72 289.496v0zM819.282 748.603c0.92-93.341 2.062-266.38 2.062-274.144 0-141.589-98.692-260.545-231.64-294.319 2.192-7.237 3.684-14.782 3.684-22.765 0-44.345-35.969-80.27-80.27-80.27-44.345 0-80.27 35.923-80.27 80.27 0 7.983 1.491 15.483 3.684 22.765-132.948 33.731-231.64 152.687-231.64 294.319 0 7.721 1.14 182.339 2.019 276.030l-90.27 36.581 0.92 64.609h316.032c3.729 40.881 37.679 73.031 79.523 73.031s75.794-32.151 79.523-73.031h312.962l1.754-64.523-88.078-38.556z" /></svg>
      </div>

      <div class = "navarrow">

        
      <svg width="24px" height="24px" viewBox="0 0 1024 1024" data-aut-id="icon" class="" fill-rule="evenodd"><path class="rui-77aaa" d="M85.392 277.333h60.331l366.336 366.336 366.336-366.336h60.331v60.331l-408.981 409.003h-35.307l-409.045-409.003z"></path></svg>
      </div>


      {/* sell button */}


     {/* <a href="/post"> */}
     <button type="button" className="btn btn-outline-dark sell" onClick = {()=> history.push('/post')}> 


        <svg width="16px" height="16px" viewBox="0 0 1024 1024" data-aut-id="icon" className fillRule="evenodd"><path className="rui-367TP textcolor" d="M414.898 123.739v291.218h-291.218l-97.014 97.014 97.014 97.131h291.218v291.16l97.073 97.071 97.073-97.071v-291.16h291.16l97.131-97.131-97.131-97.014h-291.16v-291.218l-97.073-97.073z" /></svg> SELL
        
      </button>
      {/* </a> */}



    </nav>
    {/* navbar option */}
    <div className="col">
    <div className="row">

      


      <ul className="navoptions">
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          All CATERGORIES
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/check">Vehicles</a>
          <a className="dropdown-item" href="#">Animals</a>
          <a className="dropdown-item" href="#">Fashion & Beauty</a>
          <a className="dropdown-item" href="#">Services</a>
          <a className="dropdown-item" href="#">Mobiles</a>
          <a className="dropdown-item" href="#">Furniture & Home Decor</a>
          <a className="dropdown-item" href="#">Property for Rent</a>
          <a className="dropdown-item" href="#">Books, Sports & Hobbies</a>
          <a className="dropdown-item" href="#">Electronics & Home Appliances</a>
          <a className="dropdown-item" href="#">Business, Industrial & Agriculture</a>
          <a className="dropdown-item" href="#">Jobs</a>
          <a className="dropdown-item" href="#">Kids</a>
          <a className="dropdown-item" href="#">Property for Sale</a>
          <a className="dropdown-item" href="#">Bike</a>
          


          
        </div>
      </li>
        <li>Mobile Phones</li>
        <li>Cars</li>
        <li>Motorcycles</li>
        <li>Houses</li>
        <li>TV-Video-Audio</li>
        <li>Tablets</li>
        <li>Lands & Plots</li>

      </ul>
    </div>

    </div>
    </div>
   












  )
}

export default Header