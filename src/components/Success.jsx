import React from 'react';

const Success = () => {
  return <div className="success">{localStorage.getItem('token')}</div>;
};

export default Success;
