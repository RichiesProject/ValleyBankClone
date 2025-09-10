import { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'wouter';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showUsername, setShowUsername] = useState(false);
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
    <div className="min-h-screen bg-gray-200" data-testid="login-page">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Back Button */}
            <Link href="/" className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors" data-testid="button-back-home">
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
            {/* Logo - Centered */}
            <div className="flex items-center space-x-3 mx-auto">
              {/* Willamette Valley Bank Circular Logo */}
              <div className="w-12 h-12 relative">
                <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle with border */}
                  <circle cx="24" cy="24" r="23" fill="white" stroke="#2563eb" strokeWidth="2"/>
                  
                  {/* Mountain/landscape design */}
                  <g transform="translate(6, 8)">
                    {/* Sky/background */}
                    <rect x="0" y="0" width="36" height="32" rx="20" fill="#60a5fa"/>
                    
                    {/* Back mountains */}
                    <path d="M0 20 L8 12 L16 16 L24 8 L32 14 L36 16 L36 32 L0 32 Z" fill="#1d4ed8"/>
                    
                    {/* Front mountains */}
                    <path d="M0 24 L6 18 L12 20 L18 16 L24 20 L30 18 L36 22 L36 32 L0 32 Z" fill="#1e40af"/>
                    
                    {/* Forest/trees */}
                    <path d="M0 26 L4 22 L8 24 L12 22 L16 24 L20 23 L24 24 L28 23 L32 24 L36 25 L36 32 L0 32 Z" fill="#16a34a"/>
                    
                    {/* Water/river */}
                    <path d="M0 28 L36 28 L36 32 L0 32 Z" fill="#0ea5e9"/>
                  </g>
                </svg>
              </div>
              <span className="text-2xl font-normal text-blue-700" style={{ fontFamily: 'Times, serif' }}>
                Willamette Valley Bank
              </span>
            </div>

            {/* Top Navigation */}
            <div className="flex items-center space-x-1">
              <a 
                href="https://www.willamettevalleybank.com/contact-us" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-sm text-white bg-gray-700 hover:bg-gray-600 rounded-sm" 
                data-testid="button-contact-us"
                onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
              >
                Contact Us
              </a>
              <a 
                href="https://www.willamettevalleybank.com/locations" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2 text-sm text-white bg-gray-700 hover:bg-gray-600 rounded-sm" 
                data-testid="button-locations"
                onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
              >
                Locations
              </a>
              <button className="px-4 py-2 text-sm text-white bg-gray-900 hover:bg-gray-800 rounded-sm" data-testid="button-log-in-header">
                Log In
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FDIC Banner */}
      <div className="bg-gray-300 border-b border-gray-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center space-x-2 text-sm text-gray-800">
            <span className="font-bold text-black">FDIC</span>
            <span className="italic">FDIC-Insured - Backed by the full faith and credit of the U.S. Government</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-12 px-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-normal text-gray-900 mb-8 text-left" data-testid="text-login-heading">
            Log in
          </h1>

          <form onSubmit={handleLogin} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="block text-base font-normal text-gray-900 mb-3">
                Username
              </label>
              <div className="relative">
                <input
                  id="username"
                  type={showUsername ? "text" : "text"}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-64 px-3 py-2 border-2 border-blue-400 rounded-none focus:outline-none focus:border-blue-600 text-sm"
                  placeholder=""
                  required
                  data-testid="input-username"
                />
                <button
                  type="button"
                  onClick={() => setShowUsername(!showUsername)}
                  className="absolute right-3 top-2 text-xs text-blue-600 hover:text-blue-800 font-normal"
                  data-testid="button-hide-username"
                >
                  HIDE
                </button>
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-base font-normal text-gray-900 mb-3">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-64 px-3 py-2 border-2 border-gray-300 rounded-none focus:outline-none focus:border-blue-600 text-sm"
                placeholder=""
                required
                data-testid="input-password"
              />
            </div>

            {/* Login Button and Links */}
            <div className="flex items-center space-x-6 pt-4">
              <button
                type="submit"
                disabled={isLoggingIn}
                className="px-6 py-2 bg-blue-600 text-white font-normal text-base rounded-sm hover:bg-blue-700 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                data-testid="button-log-in"
              >
                {isLoggingIn ? 'Log In' : 'Log In'}
              </button>
              <a 
                href="https://www.willamettevalleybank.com/forgot-password" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-base text-blue-600 hover:text-blue-800 font-normal"
                data-testid="link-forgot-password"
                onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
              >
                Forgot password?
              </a>
            </div>

            {/* Enrollment Link */}
            <div className="pt-6">
              <p className="text-base text-gray-700">
                Not yet enrolled? 
                <a 
                  href="https://www.willamettevalleybank.com/enroll" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-1 text-blue-600 hover:text-blue-800 font-normal"
                  data-testid="link-enroll-now"
                  onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
                >
                  Enroll now.
                </a>
              </p>
            </div>
          </form>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-gray-200 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-wrap justify-start gap-x-6 gap-y-2 text-base mb-6">
            <a 
              href="https://web15.secureinternetbank.com/PBI_PBI1151/Help/Content/STUB_start.htm" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800" 
              data-testid="link-help"
              onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
            >
              Help
            </a>
            <a 
              href="https://www.willamettevalleybank.com/disclosures/privacy-policy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800" 
              data-testid="link-privacy-policy"
              onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
            >
              Privacy Policy
            </a>
            <a 
              href="https://www.willamettevalleybank.com/disclosures" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800" 
              data-testid="link-disclosures"
              onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
            >
              Disclosures
            </a>
            <a 
              href="https://assets.website-files.com/652866cb9396994a56ed17f2/66997bca77af0e37c4994e0e_eSTATEMENT-AND-ELECTRONIC-DISCLOSURE-AGREEMENT.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800" 
              data-testid="link-estatement"
              onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
            >
              eStatement Agreement
            </a>
            <a 
              href="https://www.willamettevalleybank.com/contact-us" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800" 
              data-testid="link-contact-us-footer"
              onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
            >
              Contact Us
            </a>
            <a 
              href="https://www.willamettevalleybank.com/locations" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800" 
              data-testid="link-locations-footer"
              onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
            >
              Locations
            </a>
            <a 
              href="https://www.willamettevalleybank.com/disclosures/online-access-agreement" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blue-600 hover:text-blue-800" 
              data-testid="link-online-access"
              onClick={(e) => { try { window.open(e.currentTarget.href, '_blank', 'noopener,noreferrer'); } catch(err) { console.warn('Link error:', err); } }}
            >
              Online Access Agreement
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start text-sm text-gray-700">
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <span>Member FDIC. Equal Housing Lender</span>
              <div className="w-4 h-4 bg-black text-white flex items-center justify-center text-xs font-bold">
                =
              </div>
            </div>
            <div>
              © 2015-2025 Fiserv, Inc. or its affiliates.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}