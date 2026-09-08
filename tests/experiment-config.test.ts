import { describe, expect, it } from 'vitest';
import { experimentConfig } from '../lib/experiment-config';

describe('Phase 1 experiment configuration', () => {
  it('keeps the current Objective 3 design values editable in one place', () => {
    expect(experimentConfig.cropDays).toBe(28);
    expect(experimentConfig.temporalRuns).toBe(2);
    expect(experimentConfig.reservoirLiters).toBe(90);
    expect(Object.keys(experimentConfig.treatments)).toEqual(['T1', 'T2', 'T3', 'C4']);
  });
});
