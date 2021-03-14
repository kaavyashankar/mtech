import React,{Fragment} from 'react';
import {Link, withRouter} from "react-router-dom";

import {signout, isAuthenticated} from "../auth/helper";

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return {color: "#2ecc72"}
    }  else {
        return {color: "#FFFFFF"};
    }
};

const Menu = ({history, path}) => {
    return (
      

        <div>
            <ul className="nav nav-labs bg-dark">
                <li className = "nav-item">
                    <Link  style= {currentTab(history,"/")}
                    className= "nav-link" 
                    to = "/"
                >
                    Home</Link>
                    
                </li>

                
            
            

            
                


                

                {isAuthenticated () && (
                    <li className = "nav-item">
                    <Link  style= {currentTab(history,"/user/dashboard")}
                    className= "nav-link" 
                    to = "/user/dashboard"
                >
                    Dashboard</Link>
                </li>
                )}

                <li className = "nav-item">
                    <Link  style= {currentTab(history,"/cart")}
                    className= "nav-link" 
                    to = "/cart"
                >
                    Cart</Link>
                </li>

                {!isAuthenticated() && (
                    <Fragment>
                        <li className = "nav-item">
                    <Link  style= {currentTab(history,"/signup")}
                    className= "nav-link" 
                    to = "/signup"
                >
                    Signup</Link>
                </li>

                <li className = "nav-item">
                    <Link  style= {currentTab(history,"/signin")}
                    className= "nav-link" 
                    to = "Signin/"
                >
                    Signin</Link>
                </li>

                    </Fragment>
                )}

                <li className = "search-container">

                

                <form id="search-form">
                    <label for="site-search">What are you looking for???</label>
                    <input type="search " id="search-field" class="search-field"  /><button id="search-button" class="search-button">Search</button>
                </form>
                </li>

                
                {isAuthenticated() && (
                    <li className = "nav-item">
                    <span 
                    onClick={() =>{
                        signout(() =>{
                            history.push("/")
                        });
                    }}
                    className = "nav-link text-warning">
                        Signout
                    </span>
                    
                </li>
                )}
                


            

            </ul>



        </div>
    );
};

export default withRouter(Menu);