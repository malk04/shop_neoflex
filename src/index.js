import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<App/>}/>
                <Route path={"/cart"} element={<Cart/>}/>
                <Route path={"*"} element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);