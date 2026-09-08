export const experimentConfig = {
  cropDays: 28,
  temporalRuns: 2,
  reservoirLiters: 90,
  crop: 'lettuce',
  treatments: {
    T1: 'Unfiltered control',
    T2: 'Sensor-triggered filtration',
    T3: 'Continuous filtration',
    C4: 'End-of-harvest reclamation',
  },
} as const;

export type TreatmentId = keyof typeof experimentConfig.treatments;
