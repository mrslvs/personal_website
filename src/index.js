import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Styles/index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />}></Route>
            </Routes>
        </BrowserRouter> */}
        <Header />
        <Footer />
    </React.StrictMode>
);
