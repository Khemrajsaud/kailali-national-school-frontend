import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Lock, ShieldCheck, User, ArrowRight, Loader2, Eye, EyeOff } from "lucide-react";
import { useAdminAuth } from "../../contexts/AdminAuthContext";

const AdminLogin = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from || "/admin/dashboard";

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    if (!formData.username.trim() || !formData.password.trim()) {
      setError("Enter both username and password.");
      return;
    }

    try {
      setLoading(true);
      await login({
        username: formData.username.trim(),
        password: formData.password,
      });
      navigate(from, { replace: true });
    } catch (err) {
      setError(err?.response?.data?.message || "Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,#1f5a78_0,transparent_32%),linear-gradient(135deg,#08111f_0%,#10253d_45%,#f4f8fb_45%,#f4f8fb_100%)] px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hidden lg:block pr-10 text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
            <ShieldCheck size={14} /> Secure Admin Portal
          </div>
          <h1 className="mt-6 max-w-xl text-5xl font-black leading-[0.95] tracking-tight">
            Kailali National School admin access
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80">
            Sign in once to manage gallery, news, and notices from the protected dashboard.
          </p>
        </div>

        <div className="mx-auto w-full max-w-lg rounded-4xl border border-white/20 bg-white p-6 shadow-[0_30px_120px_rgba(0,0,0,0.22)] sm:p-8">
          <div className="mb-8 text-center">
            <div className="mx-auto inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1f5a78] text-white shadow-lg shadow-[#1f5a78]/30">
              <ShieldCheck size={26} />
            </div>
            <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900">Admin Login</h2>
            <p className="mt-2 text-sm text-slate-500">Use your admin credentials to continue to the dashboard.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Username</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#1f5a78]">
                <User size={18} className="text-slate-400" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Enter username"
                  className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  autoComplete="username"
                />
              </div>
            </label>

            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.25em] text-slate-500">Password</span>
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 focus-within:border-[#1f5a78]">
                <Lock size={18} className="text-slate-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="w-full bg-transparent text-sm font-medium text-slate-900 outline-none placeholder:text-slate-400"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="flex shrink-0 items-center justify-center rounded-xl p-2 text-slate-500 transition-colors hover:bg-slate-200 hover:text-slate-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  aria-pressed={showPassword}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </label>

            {error && (
              <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-[#b0173b] px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#b0173b]/25 transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <ArrowRight size={18} />}
              {loading ? "Signing in..." : "Go to dashboard"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;