import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from '../components/Card';

const EmergencyInfoTabs = () => {
  return (
    <div className="container mx-auto py-8 px-4 bg-black text-white rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold text-center mb-8">Emergency Information</h1>
      <Tabs>
        <TabList className="flex justify-center space-x-4 mb-8">
          <Tab className="py-2 px-4 rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">Safety Tips</Tab>
          <Tab className="py-2 px-4 rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">Emergency Contacts</Tab>
          <Tab className="py-2 px-4 rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">Emergency Kits</Tab>
          <Tab className="py-2 px-4 rounded-lg cursor-pointer bg-gray-700 hover:bg-gray-600">ICRC</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card title="Before a Flood">
              <ul className="list-disc list-inside ml-4">
                <li>Know your flood risk.</li>
                <li>Prepare an emergency kit.</li>
                <li>Have a family emergency plan.</li>
                <li>Keep important documents in a waterproof container.</li>
                <li>Know evacuation routes.</li>
              </ul>
            </Card>
            <Card title="During a Flood">
              <ul className="list-disc list-inside ml-4">
                <li>Listen to emergency broadcasts.</li>
                <li>Move to higher ground.</li>
                <li>Avoid walking or driving through floodwaters.</li>
                <li>Keep away from power lines and electrical wires.</li>
                <li>Follow evacuation orders promptly.</li>
              </ul>
            </Card>
            <Card title="After a Flood">
              <ul className="list-disc list-inside ml-4">
                <li>Avoid floodwater; it may be contaminated.</li>
                <li>Report downed power lines.</li>
                <li>Avoid returning home until authorities declare it safe.</li>
                <li>Clean and disinfect everything that got wet.</li>
                <li>Document property damage for insurance.</li>
              </ul>
            </Card>
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card title="Emergency Contacts">
              <ul className="space-y-2">
                <li><span className="font-semibold">Police:</span> 17</li>
                <li><span className="font-semibold">Ambulance:</span> 15</li>
              </ul>
            </Card>
            <Card title="Radio Services">
              <ul className="space-y-2">
                <li><span className="font-semibold">RFI News:</span> 96.2</li>
                <li><span className="font-semibold">BBC:</span> 100.4</li>
              </ul>
            </Card>
          </div>
        </TabPanel>

        <TabPanel>
          <Card title="Emergency Kits">
            <ul className="list-disc list-inside ml-4 space-y-2">
              <li>Water (one gallon per person per day for at least three days)</li>
              <li>Non-perishable food (at least a three-day supply)</li>
              <li>Battery-powered or hand-crank radio</li>
              <li>Flashlight and extra batteries</li>
              <li>First aid kit</li>
              <li>Medications (seven-day supply) and medical items</li>
              <li>Multi-purpose tool</li>
              <li>Personal hygiene items</li>
              <li>Copies of personal documents</li>
              <li>Cell phone with chargers</li>
              <li>Family and emergency contact information</li>
            </ul>
          </Card>
        </TabPanel>

        <TabPanel>
          <Card title="ICRC (International Committee of the Red Cross) in Niger">
            <p>Délégation CICR Niamey</p>
            <p>Quartier Kouara Kano - Rue 37</p>
            <p>BP 13702</p>
            <p>Niamey</p>
            <p><span className="font-semibold">ICRC Numbers:</span></p>
            <ul className="space-y-2 ml-4">
              <li>+227 20 739 309</li>
              <li>+227 20 725 183</li>
              <li>+227 20 372 887</li>
            </ul>
          </Card>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default EmergencyInfoTabs;
