import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import React from "react";
import { Navbar } from "../Components/Navbar";
import { Register } from "./Register";

export function Router(){
    return(
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/page1" element={
                <div>
                    <h2>page1</h2>
                </div>
            }/>
            <Route path='/register/' Component={Register}/>
        </Routes>        
        </BrowserRouter>
    )
}