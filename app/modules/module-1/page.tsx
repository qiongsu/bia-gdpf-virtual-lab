import Link from 'next/link';
import { AppShell } from '../../../components/AppShell';
import { LearningSteps } from '../../../components/LearningSteps';
import { sitePath } from '../../../lib/site';

const references = [
  { src: '/assets/xylem/wood-anatomy.png', alt: 'Labeled cross-sections showing bark, sapwood, and heartwood in a tree', title: 'Bark, sapwood, and heartwood', caption: 'A whole-tree view helps locate the active water-conducting region: sapwood.' },
  { src: '/assets/xylem/wood-microscopy-comparison.png', alt: 'Microscopy comparison of heartwood and sapwood in cross and radial sections', title: 'Wood structure at multiple scales', caption: 'Cross-sectional and radial views reveal different pathways and pore patterns.' },
  { src: '/assets/xylem/conifer-xylem.png', alt: 'Microscopy panels showing conifer xylem structure and tracheid openings', title: 'Conifer xylem architecture', caption: 'The aligned, repeated structure is a visual entry point to tracheid-based transport.' },
  { src: '/assets/xylem/pit-anatomy.png', alt: 'Annotated microscopy panels identifying pit chamber, pit membrane, torus, margo, and pit cap', title: 'A bordered pit, annotated', caption: 'Pit chamber, pit membrane, torus, and margo work together as a selective connection.' },
  { src: '/assets/xylem/gymnosperm-tracheids.png', alt: 'Diagram and microscopy image of gymnosperm tracheids with pits and torus', title: 'Gymnosperm tracheids', caption: 'Tracheids conduct water and use bordered pits to connect neighboring conduits.' },
  { src: '/assets/xylem/bordered-pits.png', alt: 'Diagrams of bordered pits and a microscopy image of an inter-tracheid bordered pit', title: 'Bordered pits', caption: 'The torus–margo structure can shift to open a water path or help seal one.' },
  { src: '/assets/xylem/pit-membrane-series.png', alt: 'Three microscopy views of pit membranes showing repeated radial structure', title: 'Pit-membrane variation', caption: 'Natural membranes vary in geometry, thickness, and apparent openness.' },
  { src: '/assets/xylem/filter-evidence.png', alt: 'Composite figure with filtration performance plots, a xylem filter setup, and microscopy', title: 'From xylem idea to filter test', caption: 'A user-provided evidence figure connects xylem-inspired media to filtration measurements.' },
  { src: '/assets/xylem/xylem-filter-study.png', alt: 'Composite figure showing pathogen reduction, a xylem filter apparatus, and flow capacity plots', title: 'Filtration evidence to discuss', caption: 'Use this figure to ask what is measured, what is not measured, and what evidence is still needed.' },
].map((reference) => ({ ...reference, src: sitePath(reference.src) }));

export default function ModuleOnePage() {
  return (
    <AppShell>
      <div className="page-wrap">
        <section className="module-header" aria-labelledby="module-one-title">
          <div><div className="module-number-large">MODULE 01 / NATURAL XYLEM</div><h1 id="module-one-title">Start with the tree.</h1><p className="lede">Before we design a filter, look closely at the structures that move water through wood—and the tiny gates that help a plant manage risk.</p></div>
          <aside className="module-aside"><p><strong>Central question</strong><br />How does natural xylem transport water while controlling flow, particles, and hydraulic failure?</p></aside>
        </section>
        <LearningSteps current={1} />

        <section className="xylem-intro-grid" aria-labelledby="xylem-overview-title">
          <div className="panel xylem-overview"><span className="panel-label">Scientific background</span><h2 id="xylem-overview-title">A transport network with built-in decisions.</h2><p className="body-copy">The outer bark protects the tree. Sapwood contains much of the active water-conducting tissue, while heartwood is older, darker, and generally less involved in current transport. Inside the sapwood, conduits are linked by pits: small, structured openings that connect flow paths while helping limit the spread of air embolisms and particulates.</p><div className="callout"><span aria-hidden="true">ⓘ</span><span><strong>Interpretation note:</strong> These user-provided images are visual references for learning. Their original source, species, scale bars, and experimental context should be confirmed before publication.</span></div></div>
          <figure className="xylem-feature"><img src={sitePath('/assets/xylem/wood-anatomy.png')} alt="Tree section labeled bark, sapwood, and heartwood" /><figcaption>Begin at the whole-tree scale: locate the bark, sapwood, and heartwood before zooming into xylem anatomy.</figcaption></figure>
        </section>

        <section aria-labelledby="principles-title" className="xylem-principles-section"><div className="eyebrow">Three ideas to carry forward</div><h2 id="principles-title">Biology becomes a design brief.</h2><div className="xylem-principles"><article className="principle-card"><span className="principle-index">01</span><h3>Hierarchy</h3><p>Large-scale conduits and smaller connecting structures create a network instead of a single straight pore.</p><span className="principle-tag">engineering cue · channel hierarchy</span></article><article className="principle-card"><span className="principle-index">02</span><h3>Selective connection</h3><p>Pits connect neighboring conduits, but the pit membrane and torus–margo geometry can alter how the connection behaves.</p><span className="principle-tag">engineering cue · graded pore gate</span></article><article className="principle-card"><span className="principle-index">03</span><h3>Failure management</h3><p>Transport must be balanced with the risk of blockage, air entry, or damage spreading through the network.</p><span className="principle-tag">engineering cue · fault containment</span></article></div></section>

        <section aria-labelledby="gallery-title" className="reference-section"><div className="section-heading"><div><div className="eyebrow">Reference image set</div><h2 id="gallery-title">Zoom in before you build.</h2></div><p className="body-copy">Use the gallery to compare whole-tree anatomy, tracheids, bordered pits, pit membranes, and xylem-inspired filtration evidence.</p></div><div className="reference-gallery">{references.map((reference) => <figure className="reference-figure" key={reference.src}><img src={reference.src} alt={reference.alt} loading="lazy" /><figcaption><strong>{reference.title}</strong><span>{reference.caption}</span></figcaption></figure>)}</div></section>

        <section className="panel next-module-panel"><div><span className="panel-label">Next module</span><h3>Translate biology into filter architecture.</h3><p className="body-copy">Carry forward hierarchy, selective connections, and failure management as engineering requirements.</p></div><Link className="button button-primary" href="/modules/module-2">Continue to Module 2 <span aria-hidden="true">→</span></Link></section>
      </div>
    </AppShell>
  );
}
