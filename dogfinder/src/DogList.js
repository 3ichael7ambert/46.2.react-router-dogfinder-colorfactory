import React from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

function DogList({ dogs }) {
  return (
    <div>
      <h1>Meet our dogs!</h1>
      <ul className="DogList">
        {dogs.map((dog) => (
          <li key={dog.name}>
            <Link to={`/dogs/${dog.name}`}>
              <img src={dog.src} alt={dog.name} />
              <p>{dog.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DogList;