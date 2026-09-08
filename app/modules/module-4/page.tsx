'use client';

import { useState } from 'react';
import { AppShell } from '../../../components/AppShell';
import { LearningSteps } from '../../../components/LearningSteps';
import { MetricChart } from '../../../components/MetricChart';
import { NftSchematic } from '../../../components/NftSchematic';
import { experimentConfig, type TreatmentId } from '../../../lib/experiment-config';

export default function ModuleFourPage() {
  const [treatment, setTreatment] = useState<TreatmentId>('T2');
  const [metric, setMetric] = useState('Pressure difference');
  const treatmentLabel = experimentConfig.treatments[treatment];

  return (
    <AppShell>
      <div className="page-wrap">
        <section className="module-header" aria-labelledby="module-title">
          <div><div className="module-number-large">MODULE 04 / VIRTUAL NFT EXPERIMENT</div><h1 id="module-title">When should the system filter?</h1><p className="lede">Compare treatment strategies for one 28-day lettuce crop cycle, then follow the water, nutrient, and energy consequences through the loop.</p></div>
          <aside className="module-aside"><p><strong>Central question</strong><br />How do filtration timing and placement change a recirculating hydroponic system?</p></aside>
        </section>
        <LearningSteps current={2} />

        <section className="panel" aria-labelledby="experiment-title">
          <div className="panel-header"><div><span className="panel-label">Interactive activity</span><h2 id="experiment-title">Choose a treatment to inspect.</h2></div><span className="panel-label">Synthetic / illustrative dataset</span></div>
          <div className="experiment-tabs" role="tablist" aria-label="Experiment treatments">
            {(Object.keys(experimentConfig.treatments) as TreatmentId[]).map((id) => <button key={id} className={`experiment-tab${treatment === id ? ' is-selected' : ''}`} role="tab" aria-selected={treatment === id} onClick={() => setTreatment(id)}>{id} — {experimentConfig.treatments[id]}</button>)}
          </div>
          <div className="experiment-body">
            <div className="experiment-stack"><NftSchematic treatment={treatment} /><div className="treatment-note"><span className="panel-label">Selected treatment</span><strong>{treatment} — {treatmentLabel}</strong><p>{treatment === 'T1' ? 'Normal NFT recirculation without BIA–GDPF modules.' : treatment === 'T2' ? 'An independent side-stream pump, BIA–GDPF module, and buffer reservoir operate when a calibrated water-quality trigger is reached.' : treatment === 'T3' ? 'BIA–GDPF modules remain installed in the main 90 L reservoir and at every NFT channel outlet.' : 'A reclamation train is shown conceptually for end-of-harvest recovery and nutritional reconstitution.'}</p></div></div>
            <div className="experiment-stack"><div className="panel chart-panel" style={{ padding: 17 }}><div className="panel-header" style={{ marginBottom: 8 }}><div><span className="panel-label">28-day response</span><h3>{metric}</h3></div><select className="select" style={{ width: 145 }} aria-label="Choose a metric" value={metric} onChange={(event) => setMetric(event.target.value)}><option>Pressure difference</option><option>Turbidity</option><option>Water recovery</option><option>Specific energy</option></select></div><MetricChart metric={metric} /><div className="panel-label">Day of crop cycle · values are illustrative</div></div><div className="metric-grid"><div className="metric"><span className="metric-label">Water recovery</span><strong className="metric-value">84.2%</strong><span className="metric-delta">↑ 6.1% vs T1</span></div><div className="metric"><span className="metric-label">Macronutrient passage</span><strong className="metric-value">92.8%</strong><span className="metric-delta">within design target</span></div><div className="metric"><span className="metric-label">Specific energy</span><strong className="metric-value">0.18</strong><span className="metric-delta">kWh / m³ treated</span></div><div className="metric"><span className="metric-label">Fouling index</span><strong className="metric-value">0.43</strong><span className="metric-delta">relative, illustrative</span></div></div></div>
          </div>
          <div className="callout" style={{ marginTop: 18 }}><span aria-hidden="true">ⓘ</span><span><strong>How to read this:</strong> Every chart and metric on this page is synthetic and included to demonstrate the learning interaction. It is not an experimental finding or a prediction of future crop performance.</span></div>
        </section>
      </div>
    </AppShell>
  );
}
