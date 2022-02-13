
import Simple_Static_Page from "./components/Simple_Static_Page/Simple_Static_Page"
import Digital_Business_Card from "./components/Digital_Business_Card/Digital_Business_Card";
import Airbnb_Clone from "./components/Airbnb_Clone/Airbnb_Clone";
import Joker_List from "./components/Joker/Joker_List";

const App = () => {
  return (
    <div className="mini-app-container"> 
      <Simple_Static_Page/>
      <hr />
      <Digital_Business_Card />
      <hr />
      <Airbnb_Clone />
      <hr />
      <Joker_List />
    </div>
    );
}

export default App;
