const InfoSection = () => {
  return (
    <div className="card-header">
      <img src={process.env.PUBLIC_URL + "/images/business_woman.jpg"} alt='' />
      <h2>Lauren Smith</h2>
      <p>Frontend Developer</p>
      <p>lauren.website</p>
      <div className="card-btn">
        <a href="/">
          <i class="fas fa-envelope"></i>
          Email
        </a>
        <a href="/">
          <i class="fab fa-linkedin"></i>
          LinkedIn
        </a>
      </div>
    </div>);
};

export default InfoSection;
