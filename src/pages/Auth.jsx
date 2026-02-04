import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔐 later you’ll add real auth here
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-200 to-yellow-100 px-6">
      <div className="bg-black text-white w-full max-w-md p-8 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-6">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700"
            />
          )}

          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-zinc-700"
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-yellow-400 text-black font-semibold"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="ml-2 text-yellow-400 font-semibold"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Auth;
