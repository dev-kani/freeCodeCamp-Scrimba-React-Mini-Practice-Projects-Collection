import Info_Section from './Info_Section'
import About from './About';
import Interests from './Interest';
import Social_Icons from './Social_Icons';

const Digital_Business_Card = () => {
  return (
    <div className="card-container">
        <div className="card">
            <Info_Section />
            <About />
            <Interests />
            <Social_Icons />
        </div>
    </div>);
};

export default Digital_Business_Card;
