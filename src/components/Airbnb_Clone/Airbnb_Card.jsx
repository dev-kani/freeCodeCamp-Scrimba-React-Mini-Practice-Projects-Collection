import React from 'react';

const Airbnb_Card = ({img, rating, reviewCount, country, title, price}) => {
  return (
    <>

        <div className="airbnb-card">
            <a href="">SOLD OUT</a>
            <div>
                <img src={process.env.PUBLIC_URL + img} alt="" />
            </div>
            <div className="airbnb-card-body">
                <div><i class="fas fa-star"></i>{rating} ({reviewCount})•{country}</div>
                <p>{title}</p>
                <p><span>From ${price} </span> / person</p>
            </div>
        </div>
    </>
  );
};

export default Airbnb_Card;
