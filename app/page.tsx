import Link from 'next/link';
import { AppShell } from '../components/AppShell';
import { ModuleCard } from '../components/ModuleCard';
import { sitePath } from '../lib/site';

export default function HomePage() {
  return (
    <AppShell>
      <div className="page-wrap">
        <section className="hero-grid" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow">A field guide to engineered water</div>
            <h1 id="hero-title">Learn from the way plants move water.</h1>
            <p className="lede">A virtual learning laboratory for exploring xylem-inspired filtration, controlled-environment agriculture, and the choices that shape a sustainable hydroponic system.</p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/modules/module-4">Enter the laboratory <span aria-hidden="true">→</span></Link>
              <Link className="button button-secondary" href="#modules">Browse modules</Link>
            </div>
          </div>
          <div className="hero-visual" role="img" aria-label="User-provided diagram of tracheids, pits, torus structures, and open and sealed water pathways">
            <img className="hero-structure-image" src={sitePath('/assets/xylem/tracheid-pits-diagram.png')} alt="Diagram of tracheid columns, pits containing tori, and open versus sealed pits" />
            <div className="visual-kicker">BIA–GDPF / virtual learning lab</div>
            <div className="visual-title">Structure becomes flow. Flow becomes insight.</div>
            <div className="visual-legend"><span><i className="legend-dot" /> tracheids + pits</span><span>torus–margo gate</span></div>
            <div className="visual-image-note">User-provided reference · source/credit pending</div>
          </div>
        </section>

        <section id="modules" aria-labelledby="modules-heading">
          <div className="section-heading"><div><div className="eyebrow">The connected learning path</div><h2 id="modules-heading">Five modules. One living system.</h2></div><p className="body-copy">Follow the sequence from plant biology to active learning, or open any module directly. The orange path shows how each idea becomes the next design decision.</p></div>
          <div className="module-grid" aria-label="Five connected learning modules">
            <ModuleCard number="01 / BIOLOGY" title="Natural xylem" description="Trace water transport from pits to pathways." status="Coming next" href="/modules/module-1" />
            <ModuleCard number="02 / DESIGN" title="Filter architecture" description="Translate biological principles into a design space." status="Coming next" href="/modules/module-2" />
            <ModuleCard number="03 / MAKING" title="Fabrication" description="Explore graded polymers, surfaces, and characterization." status="Coming next" href="/modules/module-3" />
            <ModuleCard number="04 / SYSTEMS" title="NFT experiment" description="Compare treatments across a 28-day crop cycle." status="Available" active href="/modules/module-4" />
            <ModuleCard number="05 / MODELING" title="Active learning" description="Use physics and uncertainty to choose what to test." status="Coming next" href="/modules/module-5" />
          </div>
        </section>

        <section className="dashboard-grid" aria-label="Learner dashboard">
          <div className="panel">
            <div className="panel-header"><div><span className="panel-label">Your progress</span><h3>Keep the loop moving.</h3></div><span className="panel-label">32% complete</span></div>
            <p className="body-copy">You have a working start in Module 4. Next, inspect how a trigger changes the treatment path and record one observation in your notebook.</p>
            <div className="progress-bar" role="progressbar" aria-valuenow={32} aria-valuemin={0} aria-valuemax={100} aria-label="Course progress"><div className="progress-fill" /></div>
            <div className="progress-caption"><span>Module 4 · interactive activity</span><span>1 of 5 modules</span></div>
            <div className="stat-row"><div className="mini-stat"><strong>04</strong><span>modules unlocked</span></div><div className="mini-stat"><strong>02</strong><span>notebook entries</span></div><div className="mini-stat"><strong>07:40</strong><span>last active</span></div></div>
          </div>
          <div className="panel pathway-card"><span className="panel-label">Choose your entry point</span><h3>Learning together or leading the room?</h3><p className="body-copy">Students can run the experiment. Educators can access workshop-ready activities and lesson materials.</p><Link className="button button-primary" href="/modules/module-4">Student pathway <span aria-hidden="true">→</span></Link><Link className="button button-secondary" href="/educator">Educator resources <span aria-hidden="true">↗</span></Link></div>
        </section>

        <footer className="footer"><span><span className="footer-brand">Clemson University · Lou &amp; Su’s Lab</span> · Research education prototype</span><span>Illustrative data only · Accessibility &amp; data-use statements</span></footer>
      </div>
    </AppShell>
  );
}
