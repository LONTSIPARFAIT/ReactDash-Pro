import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
  title: string;
  value: string | number;
  change: string;
  changeType: 'positive' | 'negative';
  icon?: ReactNode;
}

export default function StatCard({ 
  title, 
  value, 
  change, 
  changeType, 
  icon 
}: StatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      className="bg-surface border border-surface rounded-[var(--radius)] p-7 card-hover group"
    >
      <div className="flex justify-between items-start">
        <div>
          <div className="text-muted text-sm font-medium">{title}</div>
          <div className="text-4xl font-semibold tracking-tighter text-text mt-3">
            {value}
          </div>
        </div>
        {icon && <div className="text-4xl opacity-80">{icon}</div>}
      </div>

      <div className={`flex items-center gap-2 mt-6 text-sm font-medium ${
        changeType === 'positive' ? 'text-success' : 'text-danger'
      }`}>
        <span>{changeType === 'positive' ? '↑' : '↓'} {change}</span>
        <span className="text-text-muted">this month</span>
      </div>
    </motion.div>
  );
}