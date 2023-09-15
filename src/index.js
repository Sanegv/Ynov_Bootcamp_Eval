import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contact from "./pages/Contact/Contact"
import Homepage from "./pages/Homepage"
import Register from "./pages/Register/Register"
import News from "./pages/News"
import Layout from "./pages/Layout"


export default function App(){

  const [articles, setArticles] = useState([]);

    useEffect(() => {
      fetch("https://freefakeapi.io/api/posts")
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setArticles(data.articles);
        })
        .catch(err => console.log(err))
    }, []); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage articles={articles}/>} />
          <Route path='news' element={<News artciels={articles}/>} />
          <Route path='register' element={<Register />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);