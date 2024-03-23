import { Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import { TAdditionalData } from "../../types/addtionaldata.type";

export default function PieChartCompo({ data }: { data: TAdditionalData[] }) {
  return (
    <ResponsiveContainer>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          isAnimationActive={true}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#8884d8"
          label
        />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}
