import React from 'react';
import Card from './Card';

interface PredictionCardProps {
  discharge: number;
  day: number;
}

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

const PredictionCard: React.FC<PredictionCardProps> = ({ discharge, day }) => {
  return (
    <Card title={`Day ${day}`}>
      <div className={`p-4 rounded my-2 ${getColor(discharge)}`}>
        <p>Discharge: {discharge.toFixed(2)} m³/sec</p>
        <p>Risk Level: {getRiskLevel(discharge)}</p>
      </div>
    </Card>
  );
};

export default PredictionCard;
