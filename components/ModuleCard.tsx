import Link from 'next/link';

type ModuleCardProps = {
  number: string;
  title: string;
  description: string;
  status: string;
  active?: boolean;
  href?: string;
};

export function ModuleCard({ number, title, description, status, active, href = '#' }: ModuleCardProps) {
  return (
    <Link href={href} className={`module-card${active ? ' is-active' : ''}`}>
      <span className="module-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className={`module-status${status !== 'Available' ? ' soon' : ''}`}>{status}</span>
    </Link>
  );
}
