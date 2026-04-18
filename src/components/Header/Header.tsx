import { usePolicyStore } from "../../store/usePolicyStore";
import "./Header.scss";
import LogoAmi from "./LogoAmi";
import LogoState from "./LogoState";
import LogoIag from "./LogoIag";

export default function Header() {
  const insurer = usePolicyStore((s) => s.insurer.toUpperCase());

  return (
    <header className="header">
      <div
        className={`header__logo-img header__logo-img--${insurer.toLowerCase()}`}
      >
        {insurer === "AMI" && <LogoAmi />}
        {insurer === "STATE" && <LogoState />}
        {insurer === "IAG" && <LogoIag />}
      </div>
      <nav className="header__nav">
        <span className="header__nav-label">3D Vehicle Assessment</span>
      </nav>
    </header>
  );
}
