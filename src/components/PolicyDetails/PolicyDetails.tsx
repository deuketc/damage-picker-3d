import { usePolicyStore } from "../../store/usePolicyStore";
import "./PolicyDetails.scss";

const INSURERS = ["AMI", "State", "IAG"] as const;

const COLOURS = [
  { label: "White", value: "white" },
  { label: "Black", value: "black" },
  { label: "Silver", value: "silver" },
  { label: "Red", value: "red" },
  { label: "Blue", value: "blue" },
] as const;

export default function PolicyDetails() {
  const { insurer, make, model, registration, colour, setField } =
    usePolicyStore();

  return (
    <section className="policy-details">
      <h2 className="policy-details__title">Policy Details</h2>

      <div className="policy-details__grid">
        <div className="policy-details__field">
          <label htmlFor="insurer">Insurer</label>
          <select
            id="insurer"
            value={insurer}
            onChange={(e) => setField("insurer", e.target.value)}
          >
            <option value="" disabled>
              Select insurer
            </option>
            {INSURERS.map((i) => (
              <option key={i} value={i}>
                {i}
              </option>
            ))}
          </select>
        </div>

        <div className="policy-details__field">
          <label htmlFor="make">Make</label>
          <input
            id="make"
            type="text"
            placeholder="e.g. Toyota"
            value={make}
            onChange={(e) => setField("make", e.target.value)}
          />
        </div>

        <div className="policy-details__field">
          <label htmlFor="model">Model</label>
          <input
            id="model"
            type="text"
            placeholder="e.g. Corolla"
            value={model}
            onChange={(e) => setField("model", e.target.value)}
          />
        </div>

        <div className="policy-details__field">
          <label htmlFor="registration">Registration</label>
          <input
            id="registration"
            type="text"
            placeholder="e.g. ABC123"
            value={registration}
            onChange={(e) =>
              setField("registration", e.target.value.toUpperCase())
            }
          />
        </div>

        <div className="policy-details__field">
          <label htmlFor="colour">Colour</label>
          <select
            id="colour"
            value={colour}
            onChange={(e) => setField("colour", e.target.value)}
          >
            <option value="" disabled>
              Select colour
            </option>
            {COLOURS.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </section>
  );
}
