import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherPatternChart from '../components/WeatherPatternChart';
import RiskLevelIndicator from '../components/RiskLevelIndicator';
import PredictionCard from '../components/PredictionCard';
import SeasonalTrends from '../components/SeasonalTrends';
import Card from '../components/Card';
import { format, addDays, parseISO } from 'date-fns';

const Home: React.FC = () => {
  const [predictions, setPredictions] = useState<number[]>([]);
  const [latestDate, setLatestDate] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLatestDate = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/latest-date');
        setLatestDate(response.data.latest_date);
      } catch (error) {
        console.error('Error fetching latest date', error);
      }
    };

    fetchLatestDate();
  }, []);

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

    if (latestDate) {
      fetchPredictions();
    }
  }, [latestDate]);

  const getPredictionDates = (): string[] => {
    if (!latestDate) return [];
    const latest = parseISO(latestDate);
    return [1, 2, 3].map((days) => format(addDays(latest, days+1), 'yyyy-MM-dd'));
  };

  const predictionDates = getPredictionDates();

  return (
    <div className="container mx-auto py-4">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {predictions.map((discharge, index) => (
            <PredictionCard key={index} date={predictionDates[index]} discharge={discharge} />
          ))}
        </div>
      )}
      <div className="my-1">
        <Card title="Weather Patterns">
          <WeatherPatternChart />
        </Card>
      </div>
      <div className="my-1">
        <Card title="Seasonal Trends">
          <SeasonalTrends />
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