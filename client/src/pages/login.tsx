import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { login, isLoggingIn } = useAuth();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Convert username to email format for compatibility with existing auth system
      const email = username.includes('@') ? username : `${username}@wvbk.com`;
      await login({ email, password });
      toast({
        title: 'Welcome back!',
        description: 'Successfully logged into your banking account',
      });
    } catch (error: any) {
      toast({
        title: 'Login Failed',
        description: error.message || 'Please check your credentials and try again',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100" data-testid="login-page">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="white"/>
                  <path d="M4 12c0-1.5 1-3 2.5-4.5C8 6 10 5 12 5s4 1 5.5 2.5C19 9 20 10.5 20 12" stroke="#1e40af" strokeWidth="1.5" fill="none"/>
                  <path d="M4 16c2-1 4-1.5 6-1s4 1 6 0.5c2-0.5 4-1.5 4-2.5" stroke="#1e40af" strokeWidth="1.5" fill="none"/>
                  <path d="M8 18c1.5-0.5 3-0.5 4 0s3 0.5 4.5 0" stroke="#1e40af" strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-blue-800">Willamette Valley Bank</span>
            </div>

            {/* Top Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded" data-testid="button-contact-us">
                Contact Us
              </button>
              <button className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded" data-testid="button-locations">
                Locations
              </button>
              <button className="px-4 py-2 text-sm text-white bg-gray-800 hover:bg-gray-700 rounded" data-testid="button-log-in-header">
                Log In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FDIC Banner */}
      <div className="bg-gray-200 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center space-x-2 text-sm text-gray-700">
            <span className="font-bold">FDIC</span>
            <span>FDIC-Insured - Backed by the full faith and credit of the U.S. Government</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-md mx-auto pt-12 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-normal text-gray-900 mb-8" data-testid="text-login-heading">
            Log in
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-900 mb-2">
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  type={showPassword ? "text" : "text"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder=""
                  required
                  data-testid="input-username"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2 text-xs text-blue-600 hover:text-blue-800"
                  data-testid="button-hide-username"
                >
                  HIDE
                </button>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder=""
                required
                data-testid="input-password"
              />
            </div>

            {/* Login Button */}
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                disabled={isLoggingIn}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-log-in"
              >
                {isLoggingIn ? 'Logging in...' : 'Log In'}
              </button>
              <a 
                href="#" 
                className="text-sm text-blue-600 hover:text-blue-800"
                data-testid="link-forgot-password"
              >
                Forgot password?
              </a>
            </div>

            {/* Enrollment Link */}
            <div className="pt-4">
              <p className="text-sm text-gray-600">
                Not yet enrolled? 
                <a 
                  href="#" 
                  className="ml-1 text-blue-600 hover:text-blue-800"
                  data-testid="link-enroll-now"
                >
                  Enroll now.
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-800" data-testid="link-help">Help</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" data-testid="link-privacy-policy">Privacy Policy</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" data-testid="link-disclosures">Disclosures</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" data-testid="link-estatement">eStatement Agreement</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" data-testid="link-contact-us-footer">Contact Us</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" data-testid="link-locations-footer">Locations</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" data-testid="link-online-access">Online Access Agreement</a>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-600">
            <div className="flex items-center space-x-2">
              <span>Member FDIC. Equal Housing Lender</span>
              <div className="w-4 h-4 bg-gray-400 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">=</span>
              </div>
            </div>
            <div className="mt-2 sm:mt-0">
              © 2015-2025 Fiserv, Inc. or its affiliates.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}