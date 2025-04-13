import React from 'react'
import { Line, LineChart, XAxis, YAxis } from 'recharts'

const resultData = [
    { "id": 1, "name": "Alice", "physics": 88, "chemistry": 91, "maths": 85 },
    { "id": 2, "name": "Bob", "physics": 76, "chemistry": 72, "maths": 80 },
    { "id": 3, "name": "Charlie", "physics": 93, "chemistry": 89, "maths": 95 },
    { "id": 4, "name": "Diana", "physics": 64, "chemistry": 70, "maths": 68 },
    { "id": 5, "name": "Ethan", "physics": 85, "chemistry": 78, "maths": 90 },
    { "id": 6, "name": "Fiona", "physics": 90, "chemistry": 94, "maths": 88 },
    { "id": 7, "name": "George", "physics": 72, "chemistry": 65, "maths": 70 },
    { "id": 8, "name": "Hannah", "physics": 95, "chemistry": 97, "maths": 92 },
    { "id": 9, "name": "Ian", "physics": 60, "chemistry": 63, "maths": 59 },
    { "id": 10, "name": "Julia", "physics": 82, "chemistry": 86, "maths": 84 }
  ]
  

const ResultsChart = () => {
  return (
    <>
<div>
    <LineChart width={800} height={500} data={resultData}>
<XAxis dataKey={"name"}></XAxis>
<YAxis></YAxis>
        <Line dataKey={"maths"} ></Line>
        <Line dataKey={"chemistry"} stroke='red'></Line>
        <Line dataKey={"physics"} stroke='green'></Line>
    </LineChart>
</div>
    </>
  )
}

export default ResultsChart