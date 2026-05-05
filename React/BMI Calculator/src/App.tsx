import "./App.css";
import BmiCalculator from "./components/BmiCalculator";

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div>
          <p className="eyebrow">Healthy lifestyle</p>
          <h1>BMI Calculator</h1>
        </div>
      </header>

      <BmiCalculator />

      <footer className="app-footer">
        <p>Designed with ❤ by IMHD</p>
      </footer>
    </div>
  );
}

export default App;
