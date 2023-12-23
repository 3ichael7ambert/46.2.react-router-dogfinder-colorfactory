import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './DogDetails.css';

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name === name);

  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div className="DogDetails">
      <h1>{dog.name}</h1>
      <br />
      <img src={dog.src} alt={dog.name} />
      <p>{`Age: ${dog.age} years`}</p>
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;