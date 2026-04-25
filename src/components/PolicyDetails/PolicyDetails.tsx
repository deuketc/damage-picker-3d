import { usePolicyStore } from "../../store/usePolicyStore";
import "./PolicyDetails.scss";

const INSURERS = ["AMI", "State", "IAG"] as const;

const COLOURS = [
  { label: "White", value: "#F5F5F5" },
  { label: "Black", value: "#2F343A" },
  { label: "Green", value: "#1F3D2B" },
  { label: "Red", value: "#8B1E2D" },
  { label: "Blue", value: "#1E3A5F" },
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
          <select
            id="make"
            value={make}
            onChange={(e) => setField("make", e.target.value)}
          >
            <option value="" disabled>
              Select make
            </option>
            <option value="Tesla">Tesla</option>
          </select>
        </div>

        <div className="policy-details__field">
          <label htmlFor="model">Model</label>
          <select
            id="model"
            value={model}
            onChange={(e) => setField("model", e.target.value)}
          >
            <option value="" disabled>
              Select model
            </option>
            <option value="Model 3">Model 3</option>
          </select>
        </div>

        <div className="policy-details__field">
          <label htmlFor="registration">Registration</label>
          <input
            id="registration"
            type="text"
            placeholder="e.g. ABC123"
            maxLength={6}
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
