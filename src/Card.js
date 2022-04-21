import React from 'react';

const Card = ({ name, img, description }) => {
  return (
    <div className=" tc bg-lightest-blue dib br3 ma2 pa3 mw5 grow shadow-5">
      <img src={img} alt="random" />
      <div>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Card;
// dib pa3 ma2 grow  tc shadow-5