import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";


const data = [
  {
    name: "Segunda",
    Lixo: 4000,
    Alagamento: 2400,
    amt: 2400,
  },
  {
    name: "Terça",
    Lixo: 3000,
    Alagamento: 1398,
    amt: 2210,
  },
  {
    name: "Quarta",
    Lixo: 2000,
    Alagamento: 9800,
    amt: 2290,
  },
  {
    name: "Quinta",
    Lixo: 2780,
    Alagamento: 3908,
    amt: 2000,
  },
  {
    name: "Sexta",
    Lixo: 3490,
    Alagamento: 4300,
    amt: 2100,
  },
  {
    name: "Sábado",
    Lixo: 1890,
    Alagamento: 4800,
    amt: 2181,
  },
  {
    name: "Domingo",
    Lixo: 3490,
    Alagamento: 4300,
    amt: 2100,
  },
];

export default function Chart() {
  return (
    <>
      <LineChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 20,
          bottom: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="Lixo"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="Alagamento" stroke="#82ca9d" />
      </LineChart>
    </>
  );
}