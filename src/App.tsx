import { useState } from 'react'
import { Menu, X, Home, BarChart3, Users, Settings, LogOut } from 'lucide-react'
import { motion } from 'framer-motion'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex overflow-hidden">
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-zinc-900 border-r border-zinc-800 transition-all duration-300 flex flex-col h-screen`}>
        <div className="p-5 flex items-center justify-between border-b border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-violet-600 rounded-2xl flex items-center justify-center font-bold text-lg">RD</div>
            {sidebarOpen && <span className="font-semibold text-2xl tracking-tight">ReactDash Pro</span>}
          </div>
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)} 
            className="text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-zinc-800"
          >
            {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {[
            { icon: Home, label: 'Dashboard', active: true },
            { icon: BarChart3, label: 'Analytics' },
            { icon: Users, label: 'Users' },
            { icon: Settings, label: 'Settings' },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 8 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex items-center gap-3 px-4 py-3.5 rounded-2xl cursor-pointer transition-all ${
                item.active 
                  ? 'bg-zinc-800 text-white shadow-sm' 
                  : 'hover:bg-zinc-800/70 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              <item.icon size={22} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </motion.div>
          ))}
        </nav>

        <div className="p-4 border-t border-zinc-800 mt-auto">
          <div className="flex items-center gap-3 px-4 py-3 text-zinc-400 hover:text-white cursor-pointer rounded-2xl hover:bg-zinc-800">
            <LogOut size={22} />
            {sidebarOpen && <span className="font-medium">Logout</span>}
          </div>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Top Navbar */}
        <nav className="bg-zinc-900 border-b border-zinc-800 h-16 flex items-center px-6">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden mr-4">
            <Menu size={26} />
          </button>

          <div className="flex-1 max-w-lg">
            <div className="bg-zinc-800/80 border border-zinc-700 rounded-full px-5 py-2.5 text-sm text-zinc-400 flex items-center gap-3">
              🔍 Search projects, users or metrics...
            </div>
          </div>

          <div className="flex items-center gap-6 ml-auto">
            <div className="w-9 h-9 bg-zinc-700 rounded-2xl"></div>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold">Parfait</p>
              <p className="text-xs text-zinc-500 -mt-0.5">Developer</p>
            </div>
          </div>
        </nav>

        {/* Content */}
        <div className="flex-1 p-8 overflow-auto">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight mb-2">Good morning, Parfait 👋</h1>
            <p className="text-zinc-400 text-lg">Here’s what’s happening with your business today.</p>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-zinc-900 border border-zinc-800 rounded-3xl p-7 hover:border-violet-500/30 transition-all group"
                >
                  <div className="text-4xl mb-6">📈</div>
                  <div className="text-zinc-400 text-sm font-medium">Total Revenue</div>
                  <div className="text-5xl font-semibold mt-3 tracking-tighter">$24,591</div>
                  <div className="flex items-center gap-2 text-emerald-400 text-sm mt-5">
                    <span>↑ 22.4%</span>
                    <span className="text-zinc-500">this month</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App