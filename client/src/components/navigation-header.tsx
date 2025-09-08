import { ChevronDown, Building2 } from 'lucide-react';

export default function NavigationHeader() {
  return (
    <header className="bg-slate-800 text-white py-4" data-testid="navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          {/* Left side - Logo and Badge */}
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
          
          {/* Center - Main Navigation */}
          <nav className="flex space-x-8 text-lg ml-16" data-testid="nav-primary">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-business">
                <span>Business</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Business dropdown menu - Enhanced Megamenu Design */}
              <div className="absolute top-full left-0 mt-2 w-[700px] bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Banking Section */}
                    <div>
                      <h3 className="font-semibold text-slate-700 mb-4 text-lg">Banking</h3>
                      <div className="space-y-1">
                        <a href="https://www.willamettevalleybank.com/business/business-checking" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-business-checking">
                          Business Checking
                        </a>
                        <a href="https://www.willamettevalleybank.com/business/business-savings" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-business-savings">
                          Business Savings
                        </a>
                        <a href="https://www.willamettevalleybank.com/business/business-credit-cards" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-business-credit-cards">
                          Business Credit Cards
                        </a>
                      </div>
                    </div>
                    
                    {/* Loans Section */}
                    <div>
                      <h3 className="font-semibold text-slate-700 mb-4 text-lg">Loans</h3>
                      <div className="space-y-1">
                        <a href="https://www.willamettevalleybank.com/business/commercial-loans" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-business-loans">
                          Business Loans
                        </a>
                        <a href="https://www.willamettevalleybank.com/branch-location/salem" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-locate-commercial-lender">
                          Locate a Commercial Lender
                        </a>
                      </div>
                    </div>
                    
                    {/* Promotional Section */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="mb-3">
                        <img 
                          src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/65e96d60e44da13127ffb7a5_pexels-fauxels-3182796.webp" 
                          alt="Business team meeting" 
                          className="w-full h-16 object-cover rounded"
                          data-testid="img-business-loan-promo"
                        />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">Apply for a Business Loan Today</h4>
                      <a 
                        href="#" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                        data-testid="link-learn-more-business"
                      >
                        Apply Now →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-personal">
                <span>Personal</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* Personal dropdown menu - Megamenu Design */}
              <div className="absolute top-full left-0 mt-2 w-[800px] bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Banking Section */}
                    <div>
                      <h3 className="font-semibold text-slate-700 mb-4 text-lg">Banking</h3>
                      <div className="space-y-1">
                        <a href="/personal-checking" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-personal-checking">
                          Personal Checking
                        </a>
                        <a href="/personal-savings" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-personal-savings">
                          Personal Savings
                        </a>
                        <a href="https://www.willamettevalleybank.com/personal/personal-digital-banking" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-personal-banking">
                          Personal Banking
                        </a>
                        <a href="https://www.willamettevalleybank.com/personal/personal-credit-cards" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-personal-credit-cards">
                          Personal Credit Cards
                        </a>
                      </div>
                    </div>
                    
                    {/* Loans Section */}
                    <div>
                      <h3 className="font-semibold text-slate-700 mb-4 text-lg">Loans</h3>
                      <div className="space-y-1">
                        <a href="https://www.willamettevalleybank.com/personal/home-loans" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-home-loans">
                          Home Loans
                        </a>
                        <a href="https://www.willamettevalleybank.com/personal/home-loan-centers" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-home-loan-centers">
                          Home Loan Centers
                        </a>
                        <a href="https://www.willamettevalleybank.com/education" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors" data-testid="link-home-loan-questions">
                          Home Loan Questions
                        </a>
                      </div>
                    </div>
                    
                    {/* Promotional Section */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="mb-3">
                        <img 
                          src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                          alt="Modern home exterior" 
                          className="w-full h-16 object-cover rounded"
                          data-testid="img-home-loan-promo"
                        />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2">Apply for a Home Loan Today</h4>
                      <a 
                        href="/home-loans" 
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                        data-testid="link-apply-now"
                      >
                        Apply Now →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-about">
                <span>About</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {/* About dropdown menu - 2 column layout */}
              <div className="absolute top-full left-0 mt-2 w-[700px] bg-white text-slate-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Left Column - Who We Are */}
                    <div>
                      <h3 className="font-semibold text-slate-700 mb-4 text-base border-b pb-2">Who We Are</h3>
                      <div className="space-y-1">
                        <a href="https://www.willamettevalleybank.com/about-us" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-about-us">About Us</a>
                        <a href="https://www.willamettevalleybank.com/about-us/executives" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-executives-directors">Executives & Directors</a>
                        <a href="https://www.willamettevalleybank.com/about-us/mortgage-leaders" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-mortgage-leadership">Mortgage Leadership Team</a>
                        <a href="https://www.willamettevalleybank.com/community" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-community">Community</a>
                      </div>
                    </div>
                    
                    {/* Middle Column - Find Out More */}
                    <div>
                      <h3 className="font-semibold text-slate-700 mb-4 text-base border-b pb-2">Find Out More</h3>
                      <div className="space-y-1">
                        <a href="https://www.willamettevalleybank.com/about-us/news" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-news">News</a>
                        <a href="https://www.willamettevalleybank.com/education" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-education">Education</a>
                        <a href="https://ir.willamettevalleybank.com/overview/default.aspx" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-investor-relations">Investor Relations</a>
                        <a href="https://www.willamettevalleybank.com/careers" target="_blank" rel="noopener noreferrer" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-careers">Careers</a>
                        <a href="#" className="block py-2 text-slate-600 hover:text-slate-800 hover:bg-gray-50 rounded px-2 transition-colors text-sm" data-testid="link-contact-us">Contact Us</a>
                      </div>
                    </div>
                    
                    {/* Right Column - Promotional Section */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <div className="mb-3">
                        <img 
                          src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/65dce87bebfcc75bfdb40344_AdobeStock_197235867.webp" 
                          alt="Community banking professionals" 
                          className="w-full h-16 object-cover rounded"
                          data-testid="img-about-promo"
                        />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-2 text-sm">Discover Our Community Focus</h4>
                      <a 
                        href="https://www.willamettevalleybank.com/about-us" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 text-xs font-medium transition-colors"
                        data-testid="link-learn-more-about"
                      >
                        Learn More →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="https://www.willamettevalleybank.com/locations" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300 transition-colors" data-testid="link-locations">
              Locations
            </a>
          </nav>
          
          {/* Right side - Login and Open Account with lots of space */}
          <div className="flex items-center space-x-3 ml-auto">
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
              className="bg-white text-slate-800 px-4 py-1.5 rounded text-sm font-medium hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
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
