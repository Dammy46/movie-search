import React from 'react'

const Scrol = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        borderTop: '2px solid #00c9ff',
        height: '500px',
      }}
    >
      {props.children}
    </div>
  );
}

export default Scrol