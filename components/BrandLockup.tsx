export function BrandLockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className="brand-lockup" aria-label="Clemson University Lou and Su's Lab">
      <div className="brand-mark" aria-hidden="true">L<span>&amp;</span>S</div>
      <div>
        <div className="brand-name">BIA–GDPF Virtual Lab</div>
        {!compact && <div className="brand-sub">Clemson University · Lou &amp; Su’s Lab</div>}
      </div>
    </div>
  );
}
