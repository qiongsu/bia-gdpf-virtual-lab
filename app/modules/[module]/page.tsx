import Link from 'next/link';
import { AppShell } from '../../../components/AppShell';

const modules = {
  'module-2': { number: '02', category: 'DESIGN', title: 'Filter architecture', question: 'How can biological principles become a controllable engineering design space?' },
  'module-3': { number: '03', category: 'MAKING', title: 'Fabrication', question: 'How do pore gradients, polymers, and surface function shape filtration?' },
  'module-5': { number: '05', category: 'MODELING', title: 'Active learning', question: 'How can physics and uncertainty guide the next experiment?' },
} as const;

export function generateStaticParams() {
  return Object.keys(modules).map((module) => ({ module }));
}

export default function PlaceholderModulePage({ params }: { params: { module: string } }) {
  const { module } = params;
  const content = modules[module as keyof typeof modules] ?? modules['module-2'];

  return (
    <AppShell>
      <div className="page-wrap">
        <div className="module-header">
          <div>
            <div className="module-number-large">MODULE {content.number} / {content.category}</div>
            <h1>{content.title}</h1>
            <p className="lede">This connected module is scaffolded in Phase 1 and ready for its full interactive lesson in Phase 2.</p>
          </div>
          <aside className="module-aside"><p><strong>Learning question</strong><br />{content.question}</p></aside>
        </div>
        <section className="panel">
          <span className="panel-label">Coming next</span>
          <h2>The path is ready.</h2>
          <p className="body-copy">Objectives, scientific background, interactive activity, guided calculation, notebook reflection, and knowledge check will be added here without changing this permanent module URL.</p>
          <Link href="/" className="button button-primary">Back to all five modules <span aria-hidden="true">→</span></Link>
        </section>
      </div>
    </AppShell>
  );
}
