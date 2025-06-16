import { FaUserAstronaut } from "react-icons/fa";

function Navbar() {
  // Smooth scroll to Home section (with id="home")
  const handleHomeClick = (e) => {
    e.preventDefault();
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-indigo-700/80 via-purple-700/80 to-pink-600/80 backdrop-blur-md shadow-xl">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="flex items-center gap-2 text-white text-2xl font-extrabold tracking-wider drop-shadow">
          <FaUserAstronaut className="text-3xl animate-bounce" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
            My Portfolio
          </span>
        </div>
        <ul className="flex space-x-8">
          {["home", "about", "projects", "contact"].map((section) => (
            <li key={section}>
              {section === "home" ? (
                <button
                  onClick={handleHomeClick}
                  className="relative text-white font-semibold uppercase tracking-wide px-2 py-1 transition-colors duration-200 hover:text-yellow-300
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                  style={{ background: "none", border: "none", outline: "none", cursor: "pointer" }}
                >
                  {section}
                </button>
              ) : (
                <a
                  href={`#${section}`}
                  className="relative text-white font-semibold uppercase tracking-wide px-2 py-1 transition-colors duration-200 hover:text-yellow-300
                    after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-0.5 after:bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left"
                >
                  {section}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;