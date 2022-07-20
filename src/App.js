import SimpleStaticPage from "./components/SimpleStaticPage/SimpleStaticPage"
import DigitalBusinessCard from "./components/DigitalBusinessCard/DigitalBusinessCard";
import AirbnbClone from "./components/AirbnbClone/AirbnbClone";

const App = () => {
  return (
    <div className="mini-app-container">
      <SimpleStaticPage />
      <hr />
      <DigitalBusinessCard />
      <hr />
      <AirbnbClone />
    </div>
  );
}

export default App;
