import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherPatternChart from '../components/WeatherPatternChart';
import RiskLevelIndicator from '../components/RiskLevelIndicator';
import PredictionCard from '../components/PredictionCard';
import Card from '../components/Card';

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

  return (
    <div className="container mx-auto py-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {predictions.map((discharge, index) => (
            <PredictionCard key={index} day={index + 1} discharge={discharge} />
          ))}
        </div>
      )}
      <div className="my-1">
        <Card title="Weather Patterns">
          <WeatherPatternChart />
        </Card>
      </div>
      <div className="my-1">
        <Card title="Flood Risk Level">
          <RiskLevelIndicator level={predictions[0]} />
        </Card>
      </div>
    </div>
  );
};

export default Home;
