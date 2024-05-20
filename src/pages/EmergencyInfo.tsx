import React from 'react';

const EmergencyInfo = () => {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold text-center mb-4">Emergency Information</h1>
      <h2 className="text-2xl font-semibold mb-2">Safety Tips</h2>
      <ul className="list-disc pl-5">
        <li>Have an emergency kit ready with essential supplies.</li>
        <li>Plan and practice an evacuation route.</li>
        <li>Stay informed about weather updates and warnings.</li>
        {/* Add more safety tips */}
      </ul>
      <h2 className="text-2xl font-semibold mt-4 mb-2">Emergency Contacts</h2>
      <ul className="list-disc pl-5">
        <li>Local Government: 123-456-7890</li>
        <li>Emergency Services: 911</li>
        {/* Add more emergency contacts */}
      </ul>
    </div>
  );
};

export default EmergencyInfo;
