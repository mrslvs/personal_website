import React from 'react';
import ReactDOM from 'react-dom/client';
import './Assets/Styles/index.css';
import App from './App';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<App />}></Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
