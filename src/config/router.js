import React from 'react'
import Post from '../components/post'
import Home from '../components/home'
import Attributes from '../components/postattributes'

import {
    BrowserRouter as Router,
    Route,
  
  } from "react-router-dom";


class AppRouter extends React.Component{

    render(){

        return(

            <Router>

                

                <Route exact path = '/post' component = {Post}/>
                <Route exact path = '/' component = {Home}/>
                <Route exact path = '/post/attributes' component = {Attributes}/>
            </Router>
        )
    }
}

export default AppRouter;