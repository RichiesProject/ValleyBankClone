import { ChevronDown } from 'lucide-react';

export default function NavigationHeader() {
  return (
    <header className="bg-primary text-white py-4" data-testid="navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold text-sm">WV</span>
              </div>
              <div>
                <div className="text-lg font-bold" data-testid="text-bank-name">
                  Willamette
                </div>
                <div className="text-lg font-bold -mt-1" data-testid="text-bank-name-2">
                  Valley Bank
                </div>
              </div>
              <div className="ml-4 bg-white text-primary px-3 py-1 rounded text-xs font-bold">
                25 YEARS OF SERVICE
              </div>
            </div>
            <nav className="hidden lg:flex space-x-6" data-testid="nav-primary">
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-business">
                  <span>Business</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-personal">
                  <span>Personal</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <div className="relative group">
                <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-about">
                  <span>About</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="link-locations">
                Locations
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <button className="flex items-center space-x-1 hover:text-gray-300 transition-colors" data-testid="button-login">
                <span>Login</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button 
              className="bg-white text-primary px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
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
