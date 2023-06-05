//Nasa
import React, { useState, useEffect } from 'react';

function App() {
  const [imageData, setImageData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchImageData();
  }, []);

  const fetchImageData = async () => {
    try {
      const response = await fetch(
        'https://api.nasa.gov/planetary/apod?api_key=Nmi5B7zcf428OE9Gx2fayYMXalAPSISWYvsmqIQx'
      );
      if (!response.ok) {
        throw new Error('Error fetching image data');
      }
      const data = await response.json();
      setImageData(data);
      setError(null);
    } catch (error) {
      console.error('Error fetching image data:', error);
      setImageData(null);
      setError('Error fetching image data');
    }
  };

  return (
    <div>
      <h1>Imagen Astronómica del Día</h1>
      {error && <p>{error}</p>}
      {imageData && (
        <div>
          <h2>{imageData.title}</h2>
          <img src={imageData.url} alt={imageData.title} />
          <p>{imageData.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default App;






