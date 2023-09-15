import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Contact from "./pages/Contact"
import Homepage from "./pages/Homepage"
import Register from "./pages/Register"
import News from "./pages/News"
import Layout from "./pages/Layout"


export default function App(){

  const [articles, setArticles] = useState([]);

    useEffect(() => {
      fetch("https://freefakeapi.io/api#collection_posts")
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
          <Route index element={<Homepage />} />
          <Route path='news' element={<News />} />
          <Route path='register' element={<Register />} />
          <Route path='contact' element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/*root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/