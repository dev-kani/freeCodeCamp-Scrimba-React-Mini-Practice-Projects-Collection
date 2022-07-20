import InfoSection from './InfoSection'
import About from './About';
import Interests from './Interest';
import SocialIcons from './SocialIcons';

const DigitalBusinessCard = () => {
  return (
    <div className="card-container">
      <div className="card">
        <InfoSection />
        <About />
        <Interests />
        <SocialIcons />
      </div>
    </div>);
};

export default DigitalBusinessCard;
