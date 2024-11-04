import { useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Statistics() {
  const data = [
    {
      name: "MacBook",
      sales: 305,
    },
    {
      name: "iPhone",
      sales: 280,
    },
    {
      name: "Laptops",
      sales: 250,
    },
    {
      name: "Phones",
      sales: 220,
    },
    {
      name: "Smart Watches",
      sales: 186,
    },
    {
      name: "Accessories",
      sales: 150,
    },
  ];

  useEffect(() => {
    document.title = "GadgetHeaven - Statistics";
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <div className="text-center bg-purple-700">
        <h1 className="text-3xl font-bold mb-5 pt-8 text-white">
          Sales Statistics
        </h1>
        <p className="text-gray-600 pb-12 text-white">
          This chart shows the number of products sold for each category.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Category-wise Product Sales
        </h2>
        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="sales"
                fill="#8884d8"
                name="Products Sold"
                label={{
                  position: "top",
                  fill: "#666",
                  fontSize: 12,
                }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
