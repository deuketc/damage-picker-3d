import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PolicyDetails from "./components/PolicyDetails/PolicyDetails";
import VehicleQuestions from "./components/VehicleQuestions/VehicleQuestions";
import StepNav from "./components/StepNav/StepNav";
import VehicleViewer from "./components/VehicleViewer/VehicleViewer";
import DamageSummary from "./components/DamageSummary/Damagesummary";
import { usePolicyStore } from "./store/usePolicyStore";

function App() {
  const insurer = usePolicyStore((s) => s.insurer);

  useEffect(() => {
    if (insurer) {
      document.documentElement.dataset.insurer = insurer;
    } else {
      delete document.documentElement.dataset.insurer;
    }
  }, [insurer]);

  return (
    <>
      <Header />
      <div className="app-body">
        <aside className="app-sidebar-left">
          <PolicyDetails />
        </aside>
        <main className="app-main">
          <VehicleViewer />
          <VehicleQuestions />
          <StepNav />
        </main>
        <aside className="app-sidebar-right">
          <DamageSummary />
        </aside>
      </div>
      <Footer />
    </>
  );
}

export default App;
