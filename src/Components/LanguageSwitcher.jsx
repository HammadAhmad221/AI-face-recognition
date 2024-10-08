// // src/LanguageSwitcher.jsx
// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (lng) => {
//     i18n.changeLanguage(lng);
//     document.body.classList.toggle('ar', lng === 'ar'); // Add RTL support for Arabic
//   };

//   return (
//     <div>
//       <button onClick={() => changeLanguage('en')}>English</button>
//       <button onClick={() => changeLanguage('ar')}>العربية</button>
//     </div>
//   );
// };


// import React from 'react';
// import { useTranslation } from 'react-i18next';

// const LanguageSwitcher = () => {
//   const { i18n } = useTranslation();

//   const changeLanguage = (event) => {
//     const lng = event.target.value; // Get the selected language from the dropdown
//     i18n.changeLanguage(lng);
//     document.body.classList.toggle('ar', lng === 'ar'); // Add RTL support for Arabic
//     localStorage.setItem('language', lng); // Save language choice
//   };

//   return (
//     <div className='flex items-center justify-center'>
//       <select className='bg-transparent' onChange={changeLanguage} defaultValue={i18n.language}>
//         <option className='text-gray-600' value="en">En</option>
//         <option className='text-gray-600' value="ar">العربية</option>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;

import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
    document.body.classList.toggle('ar', newLang === 'ar'); // Add RTL support for Arabic
    localStorage.setItem('language', newLang); // Save language choice
  };

  return (
    <div className='flex items-center justify-center'>
      <button
        className='bg-transparent text-white font-semibold px-4 py-2'
        onClick={toggleLanguage}
      >
        {i18n.language === 'en' ? 'العربية' : 'En'}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
