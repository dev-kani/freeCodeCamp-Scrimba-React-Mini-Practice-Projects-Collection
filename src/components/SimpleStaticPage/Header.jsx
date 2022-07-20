
const Header = () => {
  return (
    <header>
      <div className="logo-section">
        <img src={process.env.PUBLIC_URL + "/images/react-icon.svg"} alt='' />
        <h2>ReactFacts</h2>
      </div>
      <div>
        <h2>React Course - Project 1</h2>
      </div>
    </header>
  )
};

export default Header;
