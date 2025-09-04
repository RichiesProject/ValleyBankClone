export default function NavigationHeader() {
  return (
    <header className="bank-primary text-white py-4" data-testid="navigation-header">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <div className="text-xl font-bold" data-testid="text-bank-name">
              Willamette Valley Bank
            </div>
            <nav className="hidden md:flex space-x-6" data-testid="nav-primary">
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="link-personal">
                Personal
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="link-business">
                Business
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="link-loans">
                Loans
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="link-about">
                About
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="link-careers">
                Careers
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors" data-testid="link-contact">
                Contact
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="bg-white text-primary px-4 py-2 rounded font-medium hover:bg-gray-100 transition-colors"
              data-testid="button-online-banking"
            >
              Online Banking
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
