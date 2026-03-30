import "./Footer.scss";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <span className="footer__copy">&copy; {year} DamagePicker. All rights reserved.</span>
      <span className="footer__note">For assessment purposes only &mdash; not a legal document.</span>
    </footer>
  );
}
