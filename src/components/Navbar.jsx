import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Change background on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#features" },
    { name: "Supporters", href: "#support" },
    { name: "Feedback", href: "#feedback" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300
        ${scrolled ? "bg-black shadow-lg" : "bg-black"}`}
      >
        <div className="max-w-7xl mx-auto px-6 h-[72px] flex items-center justify-between">
          {/* BRAND */}
          <div className="text-yellow-400 font-extrabold text-xl">
            DNPWeather<span className="text-white">Show</span>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8 text-white">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-yellow-400 transition"
              >
                {link.name}
              </a>
            ))}

           
           <a
  href="/auth"
  className="px-4 py-2 rounded-lg bg-yellow-400 text-black
             font-semibold hover:opacity-90 transition"
>
  Login / Sign Up
</a>

          </div>

        </div>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 bg-black z-50 md:hidden">
          <div className="p-6 flex flex-col gap-6 text-white">
            <button
              className="self-end text-yellow-400 text-3xl"
              onClick={() => setOpen(false)}
            >
              ✕
            </button>

            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg hover:text-yellow-400"
              >
                {link.name}
              </a>
            ))}

            <a
              href="#login"
              onClick={() => setOpen(false)}
              className="mt-4 px-4 py-2 rounded-lg border border-yellow-400
                         text-yellow-400 text-center"
            >
              Login
            </a>

            <a
              href="#signup"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-lg bg-yellow-400 text-black
                         font-semibold text-center"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
