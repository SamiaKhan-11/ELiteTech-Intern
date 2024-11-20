// src/components/ChartSection.jsx
import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', followers: 12000 },
  { name: 'Feb', followers: 14000 },
  { name: 'Mar', followers: 18000 },
  { name: 'Apr', followers: 20000 },
];

const ChartSection = () => (
  <div className="mt-10">
    <LineChart width={500} height={300} data={data}>
      <Line type="monotone" dataKey="followers" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </div>
);

export default ChartSection;
