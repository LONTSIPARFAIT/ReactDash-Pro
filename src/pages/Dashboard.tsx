import { motion } from 'framer-motion';

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold tracking-tight mb-2 text-text">Good morning, Parfait 👋</h1>
      <p className="text-muted text-lg mb-10">Here’s what’s happening with your business today.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            className="bg-surface border border-surface rounded-[var(--radius)] p-7 card-hover"
          >
            <div className="text-4xl mb-6">📈</div>
            <div className="text-muted text-sm font-medium">Total Revenue</div>
            <div className="text-5xl font-semibold mt-3 tracking-tighter text-text">$24,591</div>
            <div className="flex items-center gap-2 text-success text-sm mt-5">
              ↑ 22.4% <span className="text-text-muted">this month</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}