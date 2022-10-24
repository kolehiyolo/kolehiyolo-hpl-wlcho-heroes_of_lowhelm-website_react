// * Essential React Modules
import React from 'react';
import ReactDOM from "react-dom/client";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// * HTML Renders for the Pages
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import Documentation from "./pages/Documentation";
import About from "./pages/About";
import Socials from "./pages/Socials";
import Staking from './pages/Staking';
import Account from './pages/Account';

// * Content Based on the React Routing
const content = {
  html: () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="documentation" element={<Documentation />} />
            <Route path="about" element={<About />} />
            <Route path="socials" element={<Socials />} />
            <Route path="staking" element={<Staking />} />
            <Route path="account" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );  
  },
  css: () => {
    return (
      <BrowserRouter>
        <Routes>
            <Route index element={<link rel="stylesheet" href="../css/home.css"/>}/>
            <Route path="news" element={<link rel="stylesheet" href="../css/news.css"/>}/>
            <Route path="documentation" element={<link rel="stylesheet" href="../css/documentation.css"/>}/>
            <Route path="about" element={<link rel="stylesheet" href="../css/about.css"/>}/>
            <Route path="socials" element={<link rel="stylesheet" href="../css/socials.css"/>}/>
            <Route path="staking" element={
            <link rel="stylesheet" href="../css/staking_before.css"/>
            }/>
            <Route path="account" element={<link rel="stylesheet" href="../css/account.css"/>}/>
        </Routes>
      </BrowserRouter>
    );
  },
}

// * Target DIV IDs
const target = {
  html: "react-html",
  css: "react-css",
}

// * Render Content
ReactDOM.createRoot(document.getElementById(target.css)).render(
  // <React.StrictMode>
    <content.css />
  // </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById(target.html)).render(
  // <React.StrictMode>
    <content.html />
  // </React.StrictMode>
);

// * Reporting
reportWebVitals();