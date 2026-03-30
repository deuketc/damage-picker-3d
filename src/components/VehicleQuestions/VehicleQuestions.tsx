import { useQuestionsStore } from "../../store/useQuestionsStore";
import "./VehicleQuestions.scss";

interface RadioGroupProps {
  name: string;
  value: boolean | null;
  onChange: (value: boolean) => void;
}

function RadioGroup({ name, value, onChange }: RadioGroupProps) {
  return (
    <div className="radio-group">
      <label className="radio-group__option">
        <input
          type="radio"
          name={name}
          checked={value === true}
          onChange={() => onChange(true)}
        />
        <span>Yes</span>
      </label>
      <label className="radio-group__option">
        <input
          type="radio"
          name={name}
          checked={value === false}
          onChange={() => onChange(false)}
        />
        <span>No</span>
      </label>
    </div>
  );
}

export default function VehicleQuestions() {
  const {
    isVehicleDamaged,
    damageDescription,
    isSafeToDrive,
    setIsVehicleDamaged,
    setDamageDescription,
    setIsSafeToDrive,
  } = useQuestionsStore();

  return (
    <section className="vehicle-questions">
      <h2 className="vehicle-questions__title">Vehicle Assessment</h2>

      <div className="vehicle-questions__list">
        <div className="vehicle-questions__item">
          <p className="vehicle-questions__label">Has your vehicle been damaged?</p>
          <RadioGroup
            name="isVehicleDamaged"
            value={isVehicleDamaged}
            onChange={setIsVehicleDamaged}
          />
        </div>

        <div className="vehicle-questions__item vehicle-questions__item--textarea">
          <label htmlFor="damageDescription" className="vehicle-questions__label">
            Please describe the damage
            <span className="vehicle-questions__optional">Optional</span>
          </label>
          <textarea
            id="damageDescription"
            rows={4}
            placeholder="Provide any additional details about the damage..."
            value={damageDescription}
            onChange={(e) => setDamageDescription(e.target.value)}
          />
          <span className="vehicle-questions__char-count">
            {damageDescription.length} characters
          </span>
        </div>

        <div className="vehicle-questions__item">
          <p className="vehicle-questions__label">Is your vehicle safe to drive?</p>
          <RadioGroup
            name="isSafeToDrive"
            value={isSafeToDrive}
            onChange={setIsSafeToDrive}
          />
        </div>
      </div>
    </section>
  );
}
