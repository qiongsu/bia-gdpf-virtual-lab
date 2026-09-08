import { AppShell } from '../../components/AppShell';

export default function NotebookPage() {
  return <AppShell><div className="page-wrap"><div className="module-header"><div><div className="eyebrow">Your local workspace</div><h1>Virtual laboratory notebook.</h1><p className="lede">Record hypotheses, calculations, observations, and uncertainty as you move through the modules.</p></div><aside className="module-aside"><p><strong>Privacy by default</strong><br />This Phase 1 prototype is designed for local-only notebook storage. No personally identifying information is required.</p></aside></div><section className="panel"><span className="panel-label">Notebook preview</span><h2>Start with an observation.</h2><p className="body-copy">The full notebook editor, JSON import/export, and printable view will be added in the next phase.</p><button className="button button-primary" disabled aria-disabled="true">Create first entry</button></section></div></AppShell>;
}
