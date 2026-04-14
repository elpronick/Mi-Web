import logo from "../assets/logo-mi-web.png";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Perfil", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#inicio" aria-label="Ir al inicio">
          <span className="navbar__brand-mark">
            <img src={logo} alt="Logo personal de Nick" />
          </span>
          <span className="navbar__brand-copy">
            <strong>Nick</strong>
            <span>Frontend Developer</span>
          </span>
        </a>

        <nav className="navbar__nav" aria-label="Navegación principal">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--ghost navbar__cta" href="#contacto">
          Hablemos
        </a>
      </div>
    </header>
  );
}

export default Navbar;
