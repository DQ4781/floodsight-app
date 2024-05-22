import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">About FloodSight</h1>

      <section className="mb-12">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
        </div>
        <p className="text-lg leading-relaxed">
          At FloodSight, our goal is to identify patterns and trends in flooding incidents to provide early warnings. By forecasting floods, we aim to help communities take proactive measures, safeguard lives, and minimize economic losses. Our focus is on urban areas along the Niger River, particularly in Niamey, Niger.
        </p>
      </section>

      <section className="mb-12">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Meet the Team</h2>
        </div>
        <div className="flex flex-col md:flex-row items-center md:justify-around">
          <div className="text-center md:w-1/3 mb-4 md:mb-0">
            <img src="/imgs/DanielQuezada.png" alt="Daniel Quezada" className="w-32 h-32 rounded-full mx-auto mb-2"/>
            <p className="text-xl font-medium">Daniel Quezada</p>
            <p className="text-gray-400">Undergraduate Researcher</p>
          </div>
          <div className="text-center md:w-1/3 mb-4 md:mb-0">
            <img src="/imgs/SampsonAkwafuo.jpeg" alt="Dr. Sampson Akwafuo" className="w-32 h-32 rounded-full mx-auto mb-2"/>
            <p className="text-xl font-medium">Dr. Sampson Akwafuo</p>
            <p className="text-gray-400">CEDDI Lab Director</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Dataset Overview</h2>
        </div>
        <p className="text-lg leading-relaxed">
          Our dataset includes daily weather and river discharge records from 1980 to 2024, sourced from GRDC and NOAA GSOD. Key features include:
        </p>
        <ul className="list-disc list-inside ml-4 text-lg leading-relaxed">
          <li>Dew Point</li>
          <li>Max Temperature</li>
          <li>Min Temperature</li>
          <li>Max Wind Speed</li>
          <li>Precipitation</li>
          <li>Average Temperature</li>
          <li>Average Wind Speed</li>
        </ul>
        <p className="text-lg leading-relaxed mt-2">
          The primary target feature is river discharge measurement (in m³/sec).
        </p>
      </section>

      <section className="mb-12">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-semibold">Model Overview</h2>
        </div>
        <p className="text-lg leading-relaxed">
          We use a Long Short-Term Memory (LSTM) model to capture time series patterns. The model uses a sequence length of 14 days and predicts flood risk for the next 3 days. Our data was split for training (1980-2005), validation (2005-2006), and testing (2015-2024).
        </p>
      </section>
    </div>
  );
};

export default About;
