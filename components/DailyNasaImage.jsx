"use client"
import { useState, useEffect } from 'react';

const DailyNasaImage = () => {
  const [imageData, setImageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=k8wejFFeLPuYY1EpLRSUzDFGA0WmWEHEh7vfmTvl`);
        const data = await response.json();
        setImageData(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchImage();
  }, []);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">Error loading image.</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">NASA's Astronomy Picture of the Day</h2>
      {imageData && (
        <div>
          <img src={imageData.url} alt={imageData.title} className="w-full rounded-md mb-4" />
          <h3 className="text-xl font-semibold mb-2">{imageData.title}</h3>
          <p className="text-gray-700">{imageData.explanation}</p>
        </div>
      )}
    </div>
  );
};

export default DailyNasaImage;