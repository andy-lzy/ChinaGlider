import React, { useState, useEffect } from 'react';

const TripPlanFormatter = ({ data }) => {
  if (!data) {
    return null;
  }

  return (
    <div>
      {Object.keys(data).map(day => (
        <div key={day}>
          <h2>{day}</h2>
          {data[day].places.map((place, index) => (
            <div key={index}>
              <h3>{place.name} ({place.type})</h3>
              <p>{place.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TripPlanFormatter;