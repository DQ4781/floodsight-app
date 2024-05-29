import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SeasonalTrends: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/seasonal-trends');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching seasonal trends data', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="TEMP" stroke="#8884d8" name="Average Temperature (℉)" />
        <Line type="monotone" dataKey="PRCP" stroke="#82ca9d" name="Precipitation (Inches)" />
        <Line type="monotone" dataKey="MAX" stroke="#83fd1c" name="Max Temperature (F)" />
        {/* Add more lines for other features as needed */}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default SeasonalTrends;
