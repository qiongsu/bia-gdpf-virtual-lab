'use client';

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

const pressureData = [
  { day: '0', T1: 0.88, T2: 0.88, T3: 0.88 },
  { day: '4', T1: 0.91, T2: 0.84, T3: 0.72 },
  { day: '8', T1: 1.03, T2: 0.78, T3: 0.61 },
  { day: '12', T1: 1.18, T2: 0.73, T3: 0.55 },
  { day: '16', T1: 1.34, T2: 0.68, T3: 0.49 },
  { day: '20', T1: 1.51, T2: 0.66, T3: 0.47 },
  { day: '24', T1: 1.62, T2: 0.64, T3: 0.45 },
  { day: '28', T1: 1.77, T2: 0.63, T3: 0.43 },
];

const illustrativeData = {
  'Pressure difference': pressureData,
  Turbidity: pressureData.map((point, index) => ({ ...point, T1: 1.1 + index * 0.11, T2: 0.9 - index * 0.04, T3: 0.78 - index * 0.05 })),
  'Water recovery': pressureData.map((point, index) => ({ ...point, T1: 68 + index * 0.4, T2: 71 + index * 1.8, T3: 73 + index * 1.4 })),
  'Specific energy': pressureData.map((point, index) => ({ ...point, T1: 0.22 + index * 0.02, T2: 0.21 + index * 0.005, T3: 0.24 + index * 0.004 })),
} as const;

type ChartMetric = keyof typeof illustrativeData;

export function MetricChart({ metric }: { metric: string }) {
  const chartMetric: ChartMetric = metric in illustrativeData ? metric as ChartMetric : 'Pressure difference';
  const data = illustrativeData[chartMetric];

  return (
    <div className="chart-wrap" aria-label={`Illustrative ${chartMetric.toLowerCase()} by treatment over 28 days`}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, bottom: 0, left: -24 }}>
          <CartesianGrid stroke="#eeeaf0" strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="day" tick={{ fill: '#928a9e', fontSize: 10 }} tickLine={false} axisLine={false} unit="d" />
          <YAxis tick={{ fill: '#928a9e', fontSize: 10 }} tickLine={false} axisLine={false} domain={[0, 2]} />
          <Tooltip contentStyle={{ border: '1px solid #e7e3e9', borderRadius: 7, fontSize: 11 }} labelFormatter={(label) => `Day ${label}`} />
          <Line type="monotone" dataKey="T1" name="T1 control" stroke="#928a9e" strokeWidth={2} dot={false} />
          <Line type="monotone" dataKey="T2" name="T2 trigger" stroke="#f56600" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="T3" name="T3 continuous" stroke="#522d80" strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
