import Link from 'next/link';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  price: string;
  href: string;
  badge?: string;
}

export default function ServiceCard({ icon, title, description, price, href, badge }: ServiceCardProps) {
  return (
    <Link href={href} className="card p-6 group cursor-pointer block hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        {badge && (
          <span className="badge bg-gold-400/10 text-gold-600">{badge}</span>
        )}
      </div>
      <h3 className="font-display font-bold text-slate-800 text-lg mb-2 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="text-slate-500 text-sm leading-relaxed mb-4">{description}</p>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">Mulai dari</p>
          <p className="text-primary-600 font-bold text-lg">{price}</p>
        </div>
        <div className="w-8 h-8 bg-primary-50 rounded-lg flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
