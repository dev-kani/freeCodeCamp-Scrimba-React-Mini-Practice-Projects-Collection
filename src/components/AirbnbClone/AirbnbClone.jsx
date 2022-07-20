import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AirbnbCard from "./AirbnbCard";

const AirbnbClone = () => {
  return <div>
    <Navbar />
    <HeroSection />

    <section className="airbnb-card-section">
      <AirbnbCard
        img="/images/Katie.webp"
        rating="5.0"
        reviewCount={6}
        location="online"
        title="Life lessons with Katie Zaferes"
        price={136}
        openSpots={0}
      />
      <AirbnbCard
        img="/images/wedding_photo.webp"
        rating="5.0"
        reviewCount={30}
        location="online"
        title="Learn wedding photography"
        price={125}
        openSpots={2}
      />
      <AirbnbCard
        img="/images/mountain_bike.webp"
        rating={4.8}
        reviewCount={2}
        location=""
        title="Group Mountain Biking"
        price={50}
        openSpots={5}
      />
    </section>
  </div>;
};

export default AirbnbClone;
