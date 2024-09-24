const Footer = () => {
  return (
    <footer className="bg-[#130c44] text-white py-10 mt-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Section 1: Site Name and Logo */}
          <div className="flex flex-col items-start gap-3 justify-center">
            <h1 className="text-4xl font-bold">Sway AI</h1>
            <p className="text-white/40 text-xl">
              AI vision for a smarter tomorrow
            </p>
          </div>

          {/* Section 2: Our Modules */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Our Modules</h2>
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
          <div>
            <h2 className="text-lg font-semibold mb-4">Pages</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="/services" className="hover:underline">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Section 4: Follow Us */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
            <ul className="space-y-2">
              <li>
                <a href="https://facebook.com" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" className="hover:underline">
                  LinkedIn
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
