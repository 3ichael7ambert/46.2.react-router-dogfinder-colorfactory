import React from 'react';
import { useParams } from 'react-router-dom';
import './ColorDetail.css';

const ColorDetail = () => {
  const { color } = useParams();

  return (
    <div>
      <h2>{color} Detail</h2>
      <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
    </div>
  );
};

export default ColorDetail;