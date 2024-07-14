import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Predict from './Components/Predict';
import ScrollToTop from './Components/ScrollToTop';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route
                    path="/"
                    element={<Home/>}
                />
                <Route
                    path="/Predict"
                    element={<Predict/>}
                />
            </Routes>
        </Router>
    );
}

export default App;
