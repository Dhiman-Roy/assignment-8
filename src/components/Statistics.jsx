import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Area,
} from "recharts";
const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

export default function Statistics() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("/data/data.json")
      .then((res) => res.json())
      .then((data) => setAllData(data));
  }, []);
  return (
    <BarChart
      className="mt-7 w-full mx-auto"
      width={1000}
      height={250}
      data={allData}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="product_title" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#8884d8" />
      <Area
        type="monotone"
        dataKey="price"
        stroke="#8884d8"
        fillOpacity={1}
        fill="url(#colorUv)"
      />
    </BarChart>
  );
}
