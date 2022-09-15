import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// component file
import Home from './pages/home';
import Quote from './pages/quote';
import MathNavbar from './components/navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MathNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<App />} />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
