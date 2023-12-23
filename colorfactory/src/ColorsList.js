import React from 'react';
import { Link } from 'react-router-dom';
import './ColorsList.css';

const ColorsList = () => {
  const colors = ['Red', 'Blue', 'Green', 'Yellow'];

  return (
    <div>
      <h2>Colors List</h2>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ColorsList;