import { Facebook, Instagram, Linkedin, Home } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                {/* Willamette Valley Bank Logo - Mountain Design */}
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#2c3e50"/>
                  <path d="M4 12c0-1.5 1-3 2.5-4.5C8 6 10 5 12 5s4 1 5.5 2.5C19 9 20 10.5 20 12" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M4 16c2-1 4-1.5 6-1s4 1 6 0.5c2-0.5 4-1.5 4-2.5" stroke="white" strokeWidth="1.5" fill="none"/>
                  <path d="M8 18c1.5-0.5 3-0.5 4 0s3 0.5 4.5 0" stroke="white" strokeWidth="1.2" fill="none"/>
                </svg>
              </div>
              <span className="text-lg font-semibold" data-testid="text-bank-name-footer">
                Willamette Valley Bank
              </span>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1" data-testid="text-contact-label">CONTACT:</p>
                <a href="tel:5034852222" className="text-gray-300 hover:text-white transition-colors cursor-pointer" data-testid="text-phone">503.485.2222</a>
                <a href="mailto:contact@wvbk.com" className="text-gray-300 hover:text-white transition-colors cursor-pointer" data-testid="text-email">contact@wvbk.com</a>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1" data-testid="text-headquarters-label">Bank Headquarters</p>
                <p className="text-gray-300 text-sm" data-testid="text-address-line1">101 High St NE</p>
                <p className="text-gray-300 text-sm" data-testid="text-address-line2">Salem, Oregon 97301</p>
              </div>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.facebook.com/LiveLendLocal" className="text-gray-300 hover:text-white gentle-float" data-testid="link-facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white gentle-float" data-testid="link-instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/willamette-valley-bank" className="text-gray-300 hover:text-white gentle-float" data-testid="link-linkedin">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://www.zillow.com/lender-profile/WVBKhomeloans/" className="text-gray-300 hover:text-white gentle-float" data-testid="link-zillow">
                <Home className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide" data-testid="text-about-title">ABOUT</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-community">
                Community
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-about-us">
                About Us
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-news">
                News
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-education">
                Education
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-faqs">
                FAQs
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-support">
                Support
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-careers-footer">
                Careers
              </a>
            </div>
          </div>

          {/* Personal Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide" data-testid="text-personal-title">PERSONAL</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-personal-checking">
                Personal Checking
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-personal-savings">
                Personal Savings
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-personal-banking">
                Personal Banking
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-personal-credit-cards">
                Personal Credit Cards
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-home-loans-footer">
                Home Loans
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-home-loan-centers">
                Home Loan Centers
              </a>
            </div>
          </div>

          {/* Business Section */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold tracking-wide" data-testid="text-business-title">BUSINESS</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-business-checking">
                Business Checking
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-business-savings">
                Business Savings
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-business-credit-cards">
                Business Credit Cards
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-business-loans">
                Business Loans
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-commercial-lenders">
                Commercial Lenders
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors text-sm gentle-float" data-testid="link-commercial-lender-centers">
                Commercial Lender Centers
              </a>
            </div>
          </div>
        </div>

        {/* FDIC and Legal Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-6 lg:space-y-0">
            {/* FDIC Logo and Text */}
            <div className="flex items-center space-x-6">
              <div className="flex flex-col items-center">
                <div className="bg-white text-primary px-3 py-1 rounded text-xs font-bold mb-1">
                  FDIC
                </div>
                <p className="text-xs text-gray-300 text-center max-w-xs" data-testid="text-fdic-insured">
                  FDIC Insured - Backed by the full faith and credit of the<br />U.S. Government
                </p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-white rounded flex items-center justify-center mr-2">
                  <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">=</span>
                  </div>
                </div>
                <span className="text-xs text-gray-300" data-testid="text-equal-housing">Equal Housing Lender</span>
              </div>
            </div>

            {/* Right side links */}
            <div className="flex space-x-4 text-xs">
              <a href="#" className="text-gray-300 hover:text-white gentle-float" data-testid="link-privacy-policy">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white gentle-float" data-testid="link-disclosures">
                Disclosures
              </a>
            </div>
          </div>

          {/* Legal disclaimer */}
          <div className="mt-6 text-xs text-gray-400 space-y-1">
            <p data-testid="text-legal-disclaimer">
              This is not a commitment to lend as products are subject to credit approval.
            </p>
            <p data-testid="text-terms">
              Terms subject to change without notice.
            </p>
            <p data-testid="text-routing-number">
              Routing Number - 123206859
            </p>
            <p data-testid="text-copyright">
              © Willamette Valley Bank NMLS# 713109. All rights reserved.
            </p>
            <div className="flex space-x-3 mt-2">
              <a href="#" className="text-gray-400 hover:text-gray-300 gentle-float" data-testid="link-privacy-policy-bottom">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 gentle-float" data-testid="link-disclosures-bottom">
                Disclosures
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-300 gentle-float" data-testid="link-accessibility">
                Accessibility
              </a>
            </div>
            <p data-testid="text-website-by">
              Website by:
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
