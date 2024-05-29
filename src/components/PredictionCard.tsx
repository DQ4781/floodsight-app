import React from 'react';
import Card from './Card';
import { format, parseISO, differenceInDays } from 'date-fns';

interface PredictionCardProps {
  discharge: number;
  date: string;
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

const getRelativeDate = (date: string): string => {
  const parsedDate = parseISO(date);
  const today = new Date();
  const daysDifference = differenceInDays(parsedDate, today);

  if (daysDifference === 1) return `Tomorrow (${format(parsedDate, 'MMM d, yyyy')})`;
  return `In ${daysDifference} days (${format(parsedDate, 'MMM d, yyyy')})`;
};

const PredictionCard: React.FC<PredictionCardProps> = ({ discharge, date }) => {
  return (
    <Card title={`Prediction for ${getRelativeDate(date)}`}>
      <div className={`p-4 rounded my-2 ${getColor(discharge)}`}>
        <p>Discharge: {discharge.toFixed(2)} m³/sec</p>
        <p>Risk Level: {getRiskLevel(discharge)}</p>
      </div>
    </Card>
  );
};

export default PredictionCard;
