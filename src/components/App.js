import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main.jsx";
import NotFound from "./pages/NotFound.jsx";


export default class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>
        );
    }
}