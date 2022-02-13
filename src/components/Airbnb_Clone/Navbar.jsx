import React from 'react';

const Navbar = () => {
  return (
    <div className="clone-container">
        <nav>
            <a href="#"><img src={process.env.PUBLIC_URL + "/images/airbnb_logo.png"} /></a>
        </nav>
    </div>
  );
};

export default Navbar;
