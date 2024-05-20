import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherPatternChart from './WeatherPatternChart';
import RiskLevelIndicator from './RiskLevelIndicator';


const Home: React.FC = () => {
  const [predictions, setPredictions] = useState<number[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/predict');
        setPredictions(response.data.predictions[0]); // Flatten the array to get the predictions directly
        setLoading(false);
      } catch (error) {
        console.error('Error fetching predictions', error);
        setLoading(false);
      }
    };

    fetchPredictions();
  }, []);

  const getRiskLevel = (discharge: number): string => {
    if (discharge <= 1200) return 'Low Risk';
    if (discharge <= 1400) return 'Medium Risk';
    if (discharge <= 1800) return 'High Risk';
    return 'Extreme Risk';
  };

  const getColor = (discharge: number): string => {
    if (discharge <= 1200) return 'bg-green-500';
    if (discharge <= 1400) return 'bg-yellow-500';
    if (discharge <= 1800) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold text-center mb-4">Flood Prediction Dashboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {predictions.map((discharge, index) => (
            <div key={index} className="p-4 rounded bg-gray-200">
              <h2 className="text-xl font-bold text-center">Day {index + 1}</h2>
              <div className={`p-4 rounded my-2 ${getColor(discharge)}`}>
                <p>Discharge: {discharge.toFixed(2)} m³/sec</p>
                <p>Risk Level: {getRiskLevel(discharge)}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className='my-8'>
        <WeatherPatternChart />
      </div>
      <div className='my-8'>
        <RiskLevelIndicator level={predictions[0]} />
      </div>
    </div>
  );
};

export default Home;
