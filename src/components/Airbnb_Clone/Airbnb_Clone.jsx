import Navbar from "./Navbar";
import Hero_Section from "./Hero_Section";
import Airbnb_Card from "./Airbnb_Card";

const Airbnb_Clone = () => {
  return <div>
      <Navbar />
      <Hero_Section />

      <section className="airbnb-card-section">
        <Airbnb_Card
            img="/images/Katie.webp"
            rating="5.0"
            reviewCount={6}
            country="USA"
            title="Life lessons with Katie Zaferes"
            price={136}
        />
        <Airbnb_Card
            img="/images/wedding_photo.webp"
            rating="5.0"
            reviewCount={30}
            country="Canada"
            title="Learn wedding photography"
            price={125}
        />
        <Airbnb_Card
            img="/images/mountain_bike.webp"
            rating={4.8}
            reviewCount={2}
            country="Switzerland"
            title="Group Mountain Biking"
            price={50}
        />
      </section>
      
  </div>;
};

export default Airbnb_Clone;
