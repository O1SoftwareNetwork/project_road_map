import React from 'react';

function RMButton({ title }) {
  const getData = async () => {
    alert(title);
  };

  return (
    <>
      <button onClick={getData}>{title}</button>
    </>
  );
}

export default RMButton;
