import "./Header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-mark" />
        <span className="header__logo-text">DamagePicker</span>
      </div>
      <nav className="header__nav">
        <span className="header__nav-label">3D Vehicle Assessment</span>
      </nav>
    </header>
  );
}