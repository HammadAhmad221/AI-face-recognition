// import Dashboard from './Dashboard';
// import './App.css'
// // import VideoFeed from './VedioFeed';

// function App() {
//   return (
//     <>
// <Dashboard/>
// {/* <VideoFeed/> */}
//     </>
//   )
// }

// export default App

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './Components/Header';
import HomePage from './HomePage';
import Form from "./Components/Form";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/form" element={<Form/>} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
