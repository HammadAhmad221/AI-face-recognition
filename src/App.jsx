import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Header from './Components/Header';
import AttendanceModule from './AttendanceModule';
import UploadForm from "./Components/UploadForm";
import PPEModule from './PPEModule';
// import LanguageSwitcher from './Components/LanguageSwitcher';

const App = () => {
  return (
    <Router>
      <Header />
      {/* <LanguageSwitcher /> */}
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

// import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import './i18n'; // Import the i18n configuration

// function App() {
//   const { t, i18n } = useTranslation();

//   // Toggle language between English and Arabic
//   const toggleLanguage = () => {
//     const newLang = i18n.language === 'en' ? 'ar' : 'en';
//     i18n.changeLanguage(newLang);
//   };

//   // Set RTL direction for Arabic
//   // useEffect(() => {
//   //   document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
//   // }, [i18n.language]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold">{t('welcome_message')}</h1>
//       <button
//         className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
//         onClick={toggleLanguage}
//       >
//         {t('toggle_button')}
//       </button>
//     </div>
//   );
// }

// export default App;
