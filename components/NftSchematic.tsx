export function NftSchematic({ treatment }: { treatment: string }) {
  const isControl = treatment === 'T1';
  return (
    <div className="schematic" aria-label={`Interactive NFT schematic for ${treatment}`}>
      <div className="schematic-title"><span>NFT recirculation loop</span><span>{isControl ? 'Control path' : 'Treatment path'}</span></div>
      <div className="schematic-stage" aria-hidden="true">
        <div className="pipe" style={{ left: '19%', bottom: '17%', width: '14%' }} />
        <div className="pipe" style={{ left: '38%', bottom: '27%', width: '13%', transform: 'rotate(-25deg)' }} />
        <div className="pipe" style={{ left: '64%', top: '41%', width: '13%', transform: 'rotate(180deg)' }} />
        <div className="pipe" style={{ left: '57%', top: '49%', width: '2%', height: '27%', transform: 'rotate(180deg)' }} />
        <div className="pipe vertical" style={{ left: '11%', top: '47%', height: '35%' }} />
        {!isControl && <div className="pipe dashed" style={{ left: '70%', top: '15%', width: '18%', transform: 'rotate(90deg)' }} />}
        <div className="node reservoir">90 L reservoir<small>primary loop</small></div>
        <div className="node pump">NFT pump<small>flow in</small></div>
        <div className="node channels">growing channels<small>lettuce × 24</small></div>
        {!isControl && <div className="node filter">BIA–GDPF<small>{treatment === 'T2' ? 'side-stream' : 'continuous'}</small></div>}
        <div className="node sensor">sensors + controller<small>sample point</small></div>
      </div>
      <span className="schematic-callout">— illustrative system map · not to scale</span>
    </div>
  );
}
