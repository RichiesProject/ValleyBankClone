import { ChevronDown } from 'lucide-react';

export default function NavigationHeader() {
  return (
    <header className="bg-slate-800 text-white py-4" data-testid="navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo - 25 Years of Service */}
            <div className="text-white font-bold text-2xl tracking-wide" data-testid="logo-25-years">
              <span className="text-4xl">25</span>
              <div className="text-sm leading-tight ml-2 inline-block">
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
        </div>
      </div>
    </header>
  );
}
