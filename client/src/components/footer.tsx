export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" data-testid="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-contact-title">Contact Us</h3>
            <div className="space-y-2 text-gray-300">
              <p data-testid="text-phone">Phone: (503) 485-2222</p>
              <p data-testid="text-email">Email: info@willamettevalleybank.com</p>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-services-title">Services</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-personal-banking">
                Personal Banking
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-business-banking">
                Business Banking
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-home-loans-footer">
                Home Loans
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-commercial-loans">
                Commercial Loans
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-about-title">About</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-our-story">
                Our Story
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-leadership">
                Leadership
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-careers-footer">
                Careers
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-community">
                Community
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold" data-testid="text-legal-title">Legal</h3>
            <div className="space-y-2">
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-privacy-policy">
                Privacy Policy
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-terms-of-service">
                Terms of Service
              </a>
              <a href="#" className="block text-gray-300 hover:text-white transition-colors" data-testid="link-fdic-information">
                FDIC Information
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p data-testid="text-copyright">
            &copy; 2024 Willamette Valley Bank. All rights reserved. Member FDIC. Equal Housing Lender.
          </p>
        </div>
      </div>
    </footer>
  );
}
