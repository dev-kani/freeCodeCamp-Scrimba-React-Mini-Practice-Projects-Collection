import React from 'react';

const Joker = ({setup, punchline}) => {
  return (<div>
      {setup && <h3>{setup}</h3>}
      <h3>{punchline}</h3>
      
      <hr />
  </div>);
};

export default Joker;
   