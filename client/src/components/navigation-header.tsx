import { ChevronDown, Building2 } from 'lucide-react';

export default function NavigationHeader() {
  return (
    <header className="bg-slate-800 text-white py-3" data-testid="navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Building2 className="w-7 h-7 text-slate-800" />
              </div>
              <div className="flex items-center space-x-3">
                <div>
                  <div className="text-xl font-bold" data-testid="text-bank-name">
                    Willamette
                  </div>
                  <div className="text-xl font-bold -mt-1" data-testid="text-bank-name-2">
                    Valley Bank
                  </div>
                </div>
                <div className="bg-white text-slate-800 px-3 py-1 rounded text-sm font-bold">
                  25 YEARS<br />OF SERVICE
                </div>
              </div>
            </div>
            <nav className="hidden lg:flex space-x-8" data-testid="nav-primary">
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors text-base" data-testid="button-business">
                  <span>Business</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Business dropdown menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-business-banking">Business Banking</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-business-loans">Business Loans</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-treasury-management">Treasury Management</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-commercial-real-estate">Commercial Real Estate</a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors text-base" data-testid="button-personal">
                  <span>Personal</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* Personal dropdown menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-personal-banking">Personal Banking</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-home-loans">Home Loans</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-personal-loans">Personal Loans</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-credit-cards">Credit Cards</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-investment-services">Investment Services</a>
                  </div>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors text-base" data-testid="button-about">
                  <span>About</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {/* About dropdown menu */}
                <div className="absolute top-full left-0 mt-2 w-64 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="py-2">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-about-us">About Us</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-leadership">Leadership</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-community-involvement">Community Involvement</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-news-events">News & Events</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-careers">Careers</a>
                  </div>
                </div>
              </div>
              <a href="#" className="hover:text-gray-300 transition-colors text-base" data-testid="link-locations">
                Locations
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors text-base" data-testid="button-login">
                <span>Login</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Login dropdown menu */}
              <div className="absolute top-full right-0 mt-2 w-56 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-online-banking">Online Banking</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-mobile-app">Mobile App</a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100 transition-colors" data-testid="link-business-online">Business Online</a>
                </div>
              </div>
            </div>
            <button 
              className="bg-white text-slate-800 px-6 py-2 rounded font-medium hover:bg-gray-100 transition-all duration-300"
              data-testid="button-open-account"
            >
              Open Account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
