const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-yellow-400/30">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-extrabold text-yellow-400">
            DNPWeather<span className="text-white">Show</span>
          </h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Real-time, smart, and accurate weather updates designed for everyone —
            from farmers to transport workers.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              ["Home", "#home"],
              ["Features", "#features"],
              ["Supporters", "#support"],
              ["Feedback", "#feedback"],
              ["FAQ", "#faq"],
            ].map(([name, link]) => (
              <li key={name}>
                <a
                  href={link}
                  className="text-gray-300 hover:text-yellow-400 transition"
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Support
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@dnpweather.com</li>
            <li>Location: India</li>
            <li>Availability: 24 × 7</li>
          </ul>
        </div>

        {/* ACTION */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-400 mb-4">
            Get Started
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Start tracking weather smarter today.
          </p>
          <a
            href="#home"
            className="inline-block px-6 py-2 rounded-lg
                       bg-yellow-400 text-black font-semibold
                       hover:opacity-90 transition"
          >
            Go to Top
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-yellow-400/20 py-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DNPWeatherShow. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
