// ProjectStatusChart.jsx
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ['#8884d8', '#82ca9d', '#ffc658']

export default function ProjectStatusChart({ data }) {
  const statusCount = data.reduce((acc, project) => {
    acc[project.status] = (acc[project.status] || 0) + 1
    return acc
  }, {})

  const chartData = Object.entries(statusCount).map(([status, count]) => ({
    name: status,
    value: count,
  }))

  return (
    <PieChart width={350} height={300}>
      <Pie
        data={chartData}
        cx="50%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {chartData.map((_, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
  )
}
