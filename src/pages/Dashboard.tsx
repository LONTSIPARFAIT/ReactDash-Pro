import StatCard from '../components/ui/Card';
import { StatCardProps } from '../types';

const stats: StatCardProps[] = [
  {
    title: "Total Revenue",
    value: "$24,591",
    change: "22.4%",
    changeType: "positive",
    icon: "📈"
  },
  {
    title: "Total Users",
    value: "8,459",
    change: "12.8%",
    changeType: "positive",
    icon: "👥"
  },
  {
    title: "Active Sessions",
    value: "1,243",
    change: "3.2%",
    changeType: "positive",
    icon: "🔴"
  },
  {
    title: "Bounce Rate",
    value: "24.8%",
    change: "5.1%",
    changeType: "negative",
    icon: "📉"
  }
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold tracking-tight text-text">
          Good morning, Parfait 👋
        </h1>
        <p className="text-muted text-lg mt-2">
          Here’s what’s happening with your business today.
        </p>
      </div>

      {/* Statistiques Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            changeType={stat.changeType}
            icon={stat.icon}
          />
        ))}
      </div>

      {/* Zone pour les graphiques (on ajoutera ça à l'étape suivante) */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-text mb-6">Analytics Overview</h2>
        <div className="bg-surface border border-surface rounded-[var(--radius)] h-96 flex items-center justify-center">
          <p className="text-muted">Graphiq arriveront à l'étape prochaine...</p>
        </div>
      </div>
    </div>
  );
}