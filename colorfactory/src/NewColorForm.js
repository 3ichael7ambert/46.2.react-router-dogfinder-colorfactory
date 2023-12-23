import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NewColorForm.css';

const NewColorForm = () => {
  const navigate = useNavigate();
  const [newColor, setNewColor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (add new color logic)
    // just redirect to the colors list with the new color
    navigate('/colors');
  };

  return (
    <div>
      <h2>New Color Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Color:
          <input
            type="color"
            value={newColor}
            onChange={(e) => setNewColor(e.target.value)}
          />
        </label>
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
};

export default NewColorForm;
