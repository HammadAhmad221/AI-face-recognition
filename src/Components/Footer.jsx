import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { TbLetterX } from 'react-icons/tb';
import { useTranslation } from 'react-i18next';


const Footer = () => {
  const { t } = useTranslation();
  // bg-[#130c44]
  return (
    <footer className="bg-[#130c44] bg-[url('/backroundb.png')] text-white py-10 relative z-40">
      <div className="absolute w-full h-full inset-0 bg-[#130D44] opacity-80"></div>

      <div className="container mx-auto px-4 relative z-50">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Section 1: Site Name and Logo */}
          <div className="flex flex-col items-start gap-3 justify-center">
            <h1 className="text-4xl font-bold">Sway AI</h1>
            <p className="text-white/40 text-xl">
              {/* AI vision for a smarter tomorrow */}
              {t("vision")}
            </p>
          </div>
          <div></div>
          {/* Section 2: Our Modules */}
          <div className=''>
            <h2 className="text-lg font-semibold mb-4 text-[#42c09a]">
              {/* Our Modules */}
              {t("modules")}
              </h2>
            <ul className="space-y-2">
              <li>
                <a href="/module1" className="hover:underline">
                  PPE Module
                </a>
              </li>
              <li>
                <a href="/module2" className="hover:underline">
                  Attandance Module
                </a>
              </li>
            </ul>
          </div>
          {/* Section 3: Pages */}
          <div className='lg:pl-8'>
            <h2 className="text-lg font-semibold mb-4 text-[#42c09a]">
              {/* Pages */}
              {t("pages")}
              </h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  {/* About */}
                  {t("about")}
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  {/* Pricing */}
                  {t("pricing")}
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Follow Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-[#42c09a]">
              {/* Follow Us */}
              {t("follow")}
              </h2>
            <ul className="flex gap-8">
        <li>
          <a
            href="https://facebook.com"
            className="flex items-center space-x-2 hover:underline"
          >
            <FaFacebook className='text-2xl' />
          </a>
        </li>
        <li>
          <a
            href="https://linkedin.com"
            className="flex items-center space-x-2 hover:underline"
          >
            <FaLinkedin className="text-2xl" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com"
            className="flex items-center justify-center space-x-2 hover:underline"
          >
            <TbLetterX className="text-2xl" />
            {/* <img src="/twitterXicon.png" alt="X" /> */}
          </a>
        </li>
      </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
