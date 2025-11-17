import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import Viewpage from './pages/viewpage.js';
import Navsection from './pages/Navsection.js';
import Home from './pages/Home.js';
import Videosection from './pages/Videosection.js';
import Footer from './pages/Footer.js';
function Roots() {
  const [changes, setchanges] = useState();

  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const API_KEY = "AIzaSyBTPSpz04CTJojwSq82V3OHooAUHK_RV1w"; // replace with your actual YouTube Data API key
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=12&regionCode=IN&key=${API_KEY}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log("Fetched data:", data);
        setVideos(data.items || []);
      })
      .catch(error => console.error("Error fetching videos:", error));
  }, []);
  console.log(videos);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Navsection onDataChange={setchanges} />
        <Home coll={changes} />
        <Routes>
          <Route path="/" element={<Videosection video1={videos} coll={changes} />} />
          <Route path="/navi" element={<Viewpage video2={videos} coll={changes} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Roots />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
