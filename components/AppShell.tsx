import Link from 'next/link';
import { BrandLockup } from './BrandLockup';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="app-shell">
      <header className="topbar">
        <Link href="/" aria-label="Go to laboratory home"><BrandLockup /></Link>
        <nav className="topnav" aria-label="Primary navigation">
          <Link href="/">Overview</Link>
          <Link href="/modules/module-4">Modules</Link>
          <Link href="/notebook">Notebook</Link>
          <Link href="/educator">Educator</Link>
        </nav>
        <div className="topbar-actions">
          <button className="icon-button" aria-label="Search the laboratory" title="Search"><span aria-hidden="true">⌕</span></button>
          <div className="avatar" aria-label="Anonymous learner">AL</div>
        </div>
      </header>
      <main>{children}</main>
    </div>
  );
}
