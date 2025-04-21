
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';
const resultdata = [
    {
      "name": "Ayaan Rahman",
      "bangla": 78,
      "english": 85,
      "math": 90
    },
    {
      "name": "Maya Islam",
      "bangla": 65,
      "english": 70,
      "math": 75
    },
    {
      "name": "Rafiq Chowdhury",
      "bangla": 88,
      "english": 80,
      "math": 95
    },
    {
      "name": "Nadia Karim",
      "bangla": 55,
      "english": 60,
      "math": 58
    },
    {
      "name": "Tariq Hasan",
      "bangla": 92,
      "english": 88,
      "math": 85
    },
    {
      "name": "Lamia Akter",
      "bangla": 74,
      "english": 76,
      "math": 82
    },
    {
      "name": "Zayan Alam",
      "bangla": 60,
      "english": 65,
      "math": 70
    },
    {
      "name": "Farah Hossain",
      "bangla": 81,
      "english": 79,
      "math": 88
    },
    {
      "name": "Imran Kabir",
      "bangla": 69,
      "english": 72,
      "math": 66
    },
    {
      "name": "Sadia Nahar",
      "bangla": 95,
      "english": 90,
      "math": 98
    }
  ]
  
  
const RC = () => {
    return (
        <div>
            <LineChart  width={1000} height={500} data={resultdata}>
<XAxis dataKey="name"></XAxis>
<YAxis></YAxis>
                <Line dataKey={"math"} ></Line>
                <Line dataKey={"bangla"} stroke='red' ></Line>
                <Line dataKey={"english"} stroke='green' ></Line>
            </LineChart>
        </div>
    );
};

export default RC;