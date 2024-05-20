import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold text-center mb-4">About Us</h1>
      <p>
        This application was developed by the university lab to provide early flood warnings based on river discharge measurements.
        The deep learning model was created using historical weather and river data.
      </p>
      {/* Add more information about the lab and the model */}
    </div>
  );
};

export default About;
