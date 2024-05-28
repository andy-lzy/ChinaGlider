import React, { useState, useEffect } from 'react';

function TripPlanFormatter({ data }) {
  console.log("data received: ", data);
  console.log("Type of data:", typeof data);
  
  if (!data || typeof data !== 'object') {
      return <div>Error: Invalid data format</div>;
  }

  const days = Object.keys(data);

  return (
      <div style={{ padding: '20px' }}>
          <p>Here is a rough plan of what we would suggest...</p>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                  <tr>
                      <th style={{ border: '1px solid black', padding: '10px' }}>Day</th>
                      <th style={{ border: '1px solid black', padding: '10px' }}>Location type</th>
                      <th style={{ border: '1px solid black', padding: '10px' }}>Place</th>
                      <th style={{ border: '1px solid black', padding: '10px' }}>Brief Description</th>
                  </tr>
              </thead>
              <tbody>
                  {days.map((day, dayIndex) => (
                      Array.isArray(data[day]?.places) ? (
                          data[day].places.map((place, placeIndex) => (
                              <tr key={`${dayIndex}-${placeIndex}`}>
                                  <td style={{ border: '1px solid black', padding: '10px' }}>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
                                  <td style={{ border: '1px solid black', padding: '10px' }}>{place.type}</td>
                                  <td style={{ border: '1px solid black', padding: '10px' }}>{place.name}</td>
                                  <td style={{ border: '1px solid black', padding: '10px' }}>{place.description}</td>
                              </tr>
                          ))
                      ) : (
                          <tr key={dayIndex}>
                              <td style={{ border: '1px solid black', padding: '10px' }} colSpan="4">No places available for {day.charAt(0).toUpperCase() + day.slice(1)}</td>
                          </tr>
                      )
                  ))}
              </tbody>
          </table>
          <div style={{ marginTop: '20px', textAlign: 'center' }}>
              <p>Does this look like a trip that interests you?</p>
              <button style={{ marginRight: '10px' }}>Yes, give me the detailed plan</button>
              <button>No, I want something else</button>
          </div>
      </div>
  );
}

export default TripPlanFormatter;