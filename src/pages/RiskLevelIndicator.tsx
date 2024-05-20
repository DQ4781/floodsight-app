import React from 'react';
import GaugeChart from 'react-gauge-chart';

interface RiskLevelIndicatorProps {
  level: number;
}

const RiskLevelIndicator: React.FC<RiskLevelIndicatorProps> = ({ level }) => {
  const getRiskLevel = (level: number): string => {
    if (level <= 1200) return 'Low Risk';
    if (level <= 1400) return 'Medium Risk';
    if (level <= 1800) return 'High Risk';
    return 'Extreme Risk';
  };

  const getGaugeValue = (level: number): number => {
    if (level <= 1200) return level / 1200 * 0.25;
    if (level <= 1400) return (level - 1200) / 200 * 0.25 + 0.25;
    if (level <= 1800) return (level - 1400) / 400 * 0.25 + 0.5;
    return (level - 1800) / 200 * 0.25 + 0.75;
  };

  return (
    <div>
      <h3>Current Risk Level: {getRiskLevel(level)}</h3>
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={4}
        percent={getGaugeValue(level)}
        textColor="#000"
      />
    </div>
  );
};

export default RiskLevelIndicator;
