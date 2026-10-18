import { Award } from 'lucide-react';

type SuperhostBadgeProps = {
  variant?: 'light' | 'dark';
  className?: string;
};

const variants = {
  light: 'bg-white/95 text-gray-900 shadow-lg shadow-black/20',
  dark: 'bg-white/10 text-white',
};

export function SuperhostBadge({ variant = 'light', className = '' }: SuperhostBadgeProps) {
  return (
    <p
      className={`inline-flex flex-wrap items-center justify-center gap-x-2 rounded-full px-4 py-2 text-sm font-semibold ${variants[variant]} ${className}`}
    >
      <Award size={18} className="text-[#FF385C]" aria-hidden="true" />
      <span>Superhôte Airbnb</span>
      <span aria-hidden="true">·</span>
      <span>5,0/5 · 10 avis</span>
    </p>
  );
}
