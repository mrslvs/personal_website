import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Styles/index.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';
import Main from './Layouts/Main';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />}></Route>
            </Routes>
        </BrowserRouter> */}
        <Helmet>
            <title>Miroslav Sekerka</title>
        </Helmet>
        <Header />
        <Main />
        {/* <Footer /> */}
    </React.StrictMode>
);
