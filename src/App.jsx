import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './Components/Header';
import AttendanceModule from './AttendanceModule';
import UploadForm from "./Components/UploadForm";
import PPEModule from './PPEModule';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/attendance-module" element={<AttendanceModule />} />
          <Route path="/ppe-module" element={<PPEModule />} />
          <Route path="/form" element={<UploadForm/>} />

        </Routes>
      </main>
    </Router>
  );
};

export default App;
