import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo-mi-web.png";

const navItems = [
  { label: "Contacto", href: "#contacto" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handlePointerDown(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#inicio" aria-label="Ir al inicio">
          <span className="navbar__brand-mark">
            <img src={logo} alt="Logo personal de Francisco Gerardo" />
          </span>
          <span className="navbar__brand-copy">
            <strong>elpronick</strong>
            <span>Full-Stack Developer</span>
          </span>
        </a>

        <div className="navbar__menu" ref={menuRef}>
          <button
            className="navbar__toggle"
            type="button"
            aria-label="Abrir menú lateral"
            aria-expanded={isMenuOpen}
            aria-controls="navbar-panel"
            onClick={() => setIsMenuOpen((currentValue) => !currentValue)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav
            className={`navbar__panel${isMenuOpen ? " navbar__panel--open" : ""}`}
            id="navbar-panel"
            aria-label="Navegación principal"
          >
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
