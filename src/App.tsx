import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import PolicyDetails from "./components/PolicyDetails/PolicyDetails";
import VehicleQuestions from "./components/VehicleQuestions/VehicleQuestions";
import StepNav from "./components/StepNav/StepNav";
import VehicleViewer from "./components/VehicleViewer/VehicleViewer";
import DamageSummary from "./components/DamageSummary/Damagesummary";

function App() {
  return (
    <>
      <Header />
      <main id="center">
        <PolicyDetails />
        <VehicleViewer />
        <DamageSummary />
        <VehicleQuestions />
        <StepNav />
      </main>
      <Footer />
    </>
  );
}

export default App;
