import { useAuth } from '../context/AuthContext';
import { Layout, Database, Activity } from 'lucide-react';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col items-center sm:items-start">
        <h1 className="text-5xl font-black text-slate-900 tracking-tight flex items-center">
          <span className="text-gradient">Overview</span>
        </h1>
        <p className="mt-4 text-lg text-slate-500 font-medium">
          Welcome back, {user?.username}! Explore your modern workspace.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stat-item">
          <div className="h-12 w-12 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-100 mb-6">
            <Layout className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">Workspace</h3>
          <p className="text-slate-500 leading-relaxed">
            Your centralized hub for managing everything. Complete with glassmorphism effects.
          </p>
        </div>

        <div className="stat-item border-l-4 border-indigo-500">
          <div className="h-12 w-12 rounded-xl bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-100 mb-6">
            <Database className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">User Credentials</h3>
          <div className="space-y-2 mt-4">
            <div className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-mono text-slate-600 overflow-hidden text-ellipsis whitespace-nowrap">
              ID: {user?._id}
            </div>
            <div className="px-4 py-2 bg-slate-100 rounded-lg text-xs font-mono text-slate-600">
              EMAIL: {user?.email}
            </div>
          </div>
        </div>

        <div className="stat-item">
          <div className="h-12 w-12 rounded-xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-100 mb-6">
            <Activity className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">System Health</h3>
          <div className="flex items-center mt-4">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse mr-2"></div>
            <span className="text-sm font-bold text-green-600 uppercase tracking-wider">Live & Persistent</span>
          </div>
        </div>
      </div>

      <div className="mt-12 p-8 glass-card border-none bg-indigo-600 text-white flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold">Ready to take the next step?</h2>
          <p className="mt-2 text-indigo-100 opacity-80">Explore advanced settings and API integration modules.</p>
        </div>
        <button className="mt-6 md:mt-0 px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl shadow-xl shadow-indigo-900/20 hover:scale-105 transition-all">
          Upgrade Now
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
