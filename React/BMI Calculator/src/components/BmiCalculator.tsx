import { useMemo, useState } from "react";

const categories = [
  { label: "Underweight", min: 0, max: 18.5, color: "#7c3aed" },
  { label: "Normal weight", min: 18.5, max: 24.9, color: "#0f766e" },
  { label: "Overweight", min: 24.9, max: 29.9, color: "#b45309" },
  { label: "Obesity", min: 29.9, max: Infinity, color: "#be123c" },
];

function getBmiCategory(bmi: number) {
  return categories.find((category) => bmi < category.max) ?? categories[0];
}

export default function BmiCalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");

  const bmi = useMemo(() => {
    const weightValue = Number(weight);
    const heightValue = Number(height);
    if (!weightValue || !heightValue) return null;

    if (unit === "metric") {
      return weightValue / (heightValue / 100) ** 2;
    }

    return (703 * weightValue) / heightValue ** 2;
  }, [weight, height, unit]);

  const category = bmi ? getBmiCategory(bmi) : null;
  const weightUnit = unit === "metric" ? "kg" : "lb";
  const heightUnit = unit === "metric" ? "cm" : "in";

  return (
    <section className="bmi-card">
      <div className="bmi-header">
        <div>
          <p className="eyebrow">Body Mass Index</p>
          <h2>Calculate your BMI</h2>
          <p className="subtitle">
            Enter your height and weight to see your BMI score and category.
          </p>
        </div>
        <div className="unit-switch">
          <label>
            <input
              type="radio"
              name="unit"
              value="metric"
              checked={unit === "metric"}
              onChange={() => setUnit("metric")}
            />
            Metric
          </label>
          <label>
            <input
              type="radio"
              name="unit"
              value="imperial"
              checked={unit === "imperial"}
              onChange={() => setUnit("imperial")}
            />
            Imperial
          </label>
        </div>
      </div>

      <form className="bmi-form" onSubmit={(event) => event.preventDefault()}>
        <label className="field">
          <span>Weight</span>
          <div className="input-with-unit">
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={weight}
              onChange={(event) => setWeight(event.target.value)}
              placeholder="0.0"
            />
            <span className="unit-label">{weightUnit}</span>
          </div>
        </label>

        <label className="field">
          <span>Height</span>
          <div className="input-with-unit">
            <input
              type="number"
              inputMode="decimal"
              min="0"
              step="0.1"
              value={height}
              onChange={(event) => setHeight(event.target.value)}
              placeholder="0.0"
            />
            <span className="unit-label">{heightUnit}</span>
          </div>
        </label>
      </form>

      <div className="bmi-result-card">
        <p className="result-label">Your BMI</p>
        <p className="result-value">{bmi ? bmi.toFixed(1) : "--"}</p>
        <p className="result-category">
          {category ? category.label : "Awaiting input"}
        </p>
        {category ? (
          <div
            className="category-chip"
            style={{ backgroundColor: category.color + "22" }}
          >
            <span style={{ color: category.color }}>{category.label}</span>
          </div>
        ) : null}
      </div>
    </section>
  );
}
