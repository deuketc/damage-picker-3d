import { useDamageStore } from "../../store/useDamageStore";
import "./DamageSummary.scss";

const SEVERITY_LABEL: Record<string, string> = {
  light: "Light",
  moderate: "Moderate",
  severe: "Severe",
};

export default function DamageSummary() {
  const getDamageList = useDamageStore((s) => s.getDamageList);
  const damagedPanels = useDamageStore((s) => s.damagedPanels);

  // subscribe to damagedPanels so the component re-renders on changes
  void damagedPanels;

  const list = getDamageList();

  return (
    <section className="damage-summary">
      <h2 className="damage-summary__title">Selected Panels</h2>

      {list.length === 0 ? (
        <p className="damage-summary__empty">None</p>
      ) : (
        <ul className="damage-summary__list">
          {list.map(({ panel, severity }) => (
            <li key={panel} className="damage-summary__item">
              <span className="damage-summary__panel">{panel}</span>
              <span className={`damage-summary__severity damage-summary__severity--${severity}`}>
                {SEVERITY_LABEL[severity]}
              </span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
