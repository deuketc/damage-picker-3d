import { usePolicyStore } from "../../store/usePolicyStore";
import "./Header.scss";

export default function Header() {
  const insurer = usePolicyStore((s) => s.insurer);

  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-mark">
          {insurer ? insurer[0] : ""}
        </span>
        <span className="header__logo-text">DamagePicker</span>
        {insurer && (
          <span className="header__insurer-badge">{insurer}</span>
        )}
      </div>
      <nav className="header__nav">
        <span className="header__nav-label">3D Vehicle Assessment</span>
      </nav>
    </header>
  );
}
