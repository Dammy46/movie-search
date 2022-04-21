import React from 'react';

const Searchbox = ({ inputChange}) => {
  return (
    <div>
      <input
        className="pa3 b--green bg-lightest-blue ba mv3 outline-0-ns"
        type="text"
        placeholder="search movie"
        onChange={inputChange}
      />
    </div>
  );
};

export default Searchbox;
