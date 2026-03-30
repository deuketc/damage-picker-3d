import "./StepNav.scss";

export default function StepNav() {
  return (
    <div className="step-nav">
      <button className="step-nav__btn step-nav__btn--prev" type="button">
        ← Previous
      </button>
      <button className="step-nav__btn step-nav__btn--next" type="button">
        Next →
      </button>
    </div>
  );
}
