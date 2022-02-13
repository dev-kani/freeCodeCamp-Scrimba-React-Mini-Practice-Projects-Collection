
const Hero_Section = () => {
  return (
    <div className="hero-section">
        <img src={process.env.PUBLIC_URL + "/images/airbnb_hero_section.png"} alt="" />
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
  );
};

export default Hero_Section;
