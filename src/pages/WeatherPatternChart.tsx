import React, {useEffect, useState} from "react";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from 'axios';

interface WeatherData {
    date: string;
    precipitation: number;
    temperature: number;
}

const WeatherPatternChart: React.FC = () => {
    const [data, setData] = useState<WeatherData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/weather-data');
                setData(response.data);
            } catch (error) {
                console.error('Error fetching weather data', error);
            }
        };

        fetchData();
    }, []);

    return (
        <ResponsiveContainer width="100%" height={400}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis yAxisId="left" label={{ value: 'Temperature (°F)', angle: -90, position: 'insideLeft'}} />
                <YAxis yAxisId="right" orientation="right" label={{value: 'Precipitation (in)', angle: -90, position: "insideRight"}} />
                <Tooltip formatter={(value: number) => value.toFixed(2)} />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="temperature" stroke="#8884d8" activeDot={{r: 8}} />
                <Line yAxisId="right" type="monotone" dataKey="precipitation" stroke="#82ca9d" />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default WeatherPatternChart;