const steps = ['Objectives', 'Background', 'Activity', 'Calculation', 'Reflection', 'Check'];

export function LearningSteps({ current = 2 }: { current?: number }) {
  return (
    <div className="learning-steps" aria-label="Learning sequence">
      {steps.map((step, index) => (
        <div className={`learning-step${index === current ? ' is-current' : ''}`} key={step}>
          <span>0{index + 1}</span>{step}
        </div>
      ))}
    </div>
  );
}
