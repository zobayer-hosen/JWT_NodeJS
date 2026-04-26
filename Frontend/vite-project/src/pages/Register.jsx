import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { authService } from '../api/auth.service';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';
import { UserPlus, Mail, Lock, User } from 'lucide-react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data = await authService.register(formData);
      toast.success(data.message || 'Registration successful!');
      login(data.user);
      navigate('/dashboard');
    } catch (error) {
      toast.error(error || 'Failed to register');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8fafc] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 glass-card">
        <div>
          <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-2xl bg-indigo-600 shadow-lg shadow-indigo-200 rotate-3 group hover:rotate-0 transition-transform duration-300">
            <UserPlus className="h-8 w-8 text-white" />
          </div>
          <h2 className="mt-8 text-center text-4xl font-black tracking-tight text-slate-900">
            Welcome <span className="text-gradient">Back</span>
          </h2>
          <p className="mt-2 text-center text-slate-500 font-medium">Create your secure account</p>
        </div>
        <form className="mt-10 space-y-5" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div className="relative group">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="text"
                required
                className="input-field pl-12"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              />
            </div>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="email"
                required
                className="input-field pl-12"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <input
                type="password"
                required
                className="input-field pl-12"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 px-6 rounded-2xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all duration-300 active:scale-[0.98] ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Setting up...' : 'Get Started Now'}
            </button>
          </div>
          
          <div className="text-center">
             <p className="text-sm font-semibold text-slate-500">
               Already a member? <span className="text-indigo-600 hover:text-indigo-800 cursor-pointer">Login here</span>
             </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
