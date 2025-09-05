import { ChevronDown, Building2 } from 'lucide-react';

export default function NavigationHeader() {
  return (
    <header className="bg-slate-800 text-white py-4" data-testid="navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-6">
            {/* Bank Logo and Name */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                {/* Willamette Valley Bank Logo - Mountain Design */}
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#2c3e50"/>
                  <path d="M4 12c0-1.5 1-3 2.5-4.5C8 6 10 5 12 5s4 1 5.5 2.5C19 9 20 10.5 20 12" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M4 16c2-1 4-1.5 6-1s4 1 6 0.5c2-0.5 4-1.5 4-2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M8 18c1.5-0.5 3-0.5 4 0s3 0.5 4.5 0" stroke="white" strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              <div>
                <div className="text-xl font-bold" data-testid="text-bank-name">
                  Willamette
                </div>
                <div className="text-xl font-bold -mt-1" data-testid="text-bank-name-2">
                  Valley Bank
                </div>
              </div>
            </div>
            
            {/* Vertical divider */}
            <div className="h-12 w-px bg-gray-400"></div>
            
            {/* 25 Years of Service Badge */}
            <div className="text-white font-bold text-2xl tracking-wide flex items-center" data-testid="logo-25-years">
              <span className="text-4xl">25</span>
              <div className="text-sm leading-tight ml-2">
                YEARS <span className="italic">of</span><br />
                SERVICE
              </div>
            </div>
          </div>
          <nav className="flex space-x-12 text-lg" data-testid="nav-primary">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-business">
                <span>Business</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Business dropdown menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-4">
                  <div className="px-4 py-2 font-semibold text-slate-600 border-b">Banking Services</div>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-business-checking">Business Checking</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-business-savings">Business Savings</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-merchant-services">Merchant Services</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-treasury-management">Treasury Management</a>
                  
                  <div className="px-4 py-2 font-semibold text-slate-600 border-b border-t mt-2">Lending</div>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-business-loans">Business Loans</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-equipment-financing">Equipment Financing</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-commercial-real-estate">Commercial Real Estate</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-sba-loans">SBA Loans</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-personal">
                <span>Personal</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Personal dropdown menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-4">
                  <div className="px-4 py-2 font-semibold text-slate-600 border-b">Banking</div>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-personal-checking">Personal Checking</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-personal-savings">Personal Savings</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-cds">Certificates of Deposit</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-online-banking">Online Banking</a>
                  
                  <div className="px-4 py-2 font-semibold text-slate-600 border-b border-t mt-2">Lending</div>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-home-loans">Home Loans</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-refinancing">Refinancing</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-personal-loans">Personal Loans</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-auto-loans">Auto Loans</a>
                  
                  <div className="px-4 py-2 font-semibold text-slate-600 border-b border-t mt-2">Investment Services</div>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-wealth-management">Wealth Management</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-retirement-planning">Retirement Planning</a>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-about">
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* About dropdown menu */}
              <div className="absolute top-full left-0 mt-2 w-80 bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-4">
                  <div className="px-4 py-2 font-semibold text-slate-600 border-b">Our Bank</div>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-about-us">About Willamette Valley Bank</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-leadership">Leadership Team</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-board-directors">Board of Directors</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-history">Our History</a>
                  
                  <div className="px-4 py-2 font-semibold text-slate-600 border-b border-t mt-2">Community</div>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-community-involvement">Community Involvement</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-financial-education">Financial Education</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-local-partnerships">Local Partnerships</a>
                  
                  <div className="px-4 py-2 font-semibold text-slate-600 border-b border-t mt-2">News & Careers</div>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-news-events">News & Events</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-press-releases">Press Releases</a>
                  <a href="#" className="block px-4 py-3 hover:bg-gray-100 transition-colors" data-testid="link-careers">Careers</a>
                </div>
              </div>
            </div>
            <a href="#" className="hover:text-gray-300 transition-colors" data-testid="link-locations">
              Locations
            </a>
          </nav>
          
          {/* Right side - Login and Open Account */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-login">
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
