import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from 'axios';

interface WeatherData {
    date: string;
    data1: number;
    data2: number;
}

const featureMapping: { [key: string]: { name: string; unit: string } } = {
    DEWP: { name: "Dew Point", unit: "℉" },
    MAX: { name: "Max Temperature", unit: "℉" },
    MIN: { name: "Min Temperature", unit: "℉" },
    MXSPD: { name: "Max Wind Speed Gust", unit: "Knots" },
    PRCP: { name: "Precipitation", unit: "Inches" },
    TEMP: { name: "Average Temperature", unit: "℉" },
    WDSP: { name: "Average Wind Speed", unit: "Knots" },
};

const WeatherPatternChart: React.FC = () => {
    const [data, setData] = useState<WeatherData[]>([]);
    const [dataPoint1, setDataPoint1] = useState<string>("TEMP");
    const [dataPoint2, setDataPoint2] = useState<string>("PRCP");
    const [dropdown1Open, setDropdown1Open] = useState<boolean>(false);
    const [dropdown2Open, setDropdown2Open] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/weather-data?data_point1=${dataPoint1}&data_point2=${dataPoint2}`);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching weather data', error);
            }
        };

        fetchData();
    }, [dataPoint1, dataPoint2]);

    return (
        <div>
            <div className="flex justify-center mb-4 space-x-4">
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            onClick={() => setDropdown1Open(!dropdown1Open)}
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#1B1B1B] text-white text-sm font-medium hover:bg-gray-700 focus:bg-gray-50 focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Data Point 1
                        </button>
                    </div>
                    {dropdown1Open && (
                        <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                            <div className="py-1">
                                {Object.keys(featureMapping).map(feature => (
                                    <button
                                        key={feature}
                                        onClick={() => {
                                            setDataPoint1(feature);
                                            setDropdown1Open(false);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {featureMapping[feature].name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
                <div className="relative inline-block text-left">
                    <div>
                        <button
                            type="button"
                            onClick={() => setDropdown2Open(!dropdown2Open)}
                            className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-[#1B1B1B] text-white text-sm font-medium hover:bg-gray-700 focus:bg-gray-50 focus:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Data Point 2
                        </button>
                    </div>
                    {dropdown2Open && (
                        <div className="origin-top-left absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                            <div className="py-1">
                                {Object.keys(featureMapping).map(feature => (
                                    <button
                                        key={feature}
                                        onClick={() => {
                                            setDataPoint2(feature);
                                            setDropdown2Open(false);
                                        }}
                                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    >
                                        {featureMapping[feature].name}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis 
                        yAxisId="left" 
                        label={{ value: `${featureMapping[dataPoint1].name} (${featureMapping[dataPoint1].unit})`, angle: -90, position: 'insideLeft', dy: 80 }} 
                    />
                    <YAxis 
                        yAxisId="right" 
                        orientation="right" 
                        label={{ value: `${featureMapping[dataPoint2].name} (${featureMapping[dataPoint2].unit})`, angle: -90, position: "insideRight", dy: -80 }} 
                    />
                    <Tooltip formatter={(value: number) => value.toFixed(2)} />
                    <Legend />
                    <Line yAxisId="left" type="monotone" dataKey={dataPoint1} stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line yAxisId="right" type="monotone" dataKey={dataPoint2} stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default WeatherPatternChart;
