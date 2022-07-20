import React from 'react';

const AirbnbCard = ({ img, rating, reviewCount, location, title, price, openSpots }) => {

  let badgeText
  if (openSpots === 0) {
    badgeText = 'SOLD OUT'
  } else if (location === "online") {
    badgeText = 'ONLINE'
  }

  return (
    <>
      <div className="airbnb-card">
        {badgeText && <a href="/">{badgeText}</a>}
        <div>
          <img src={process.env.PUBLIC_URL + img} alt="" />
        </div>
        <div className="airbnb-card-body">
          <div><i class="fas fa-star"></i>{rating} ({reviewCount})•{location}</div>
          <p>{title}</p>
          <p><span>From ${price} </span> / person</p>
        </div>
      </div>
    </>
  );
};

export default AirbnbCard;
