import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function BusinessChecking() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Business Checking
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamline your business banking with our comprehensive checking account solutions designed for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Small Business Checking</h3>
              <p className="text-gray-600 mb-4">Perfect for startups and small businesses with straightforward banking needs.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 200 free transactions per month</li>
                <li>• Free online and mobile banking</li>
                <li>• Business debit card included</li>
                <li>• No minimum balance requirement</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-small">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Commercial Checking</h3>
              <p className="text-gray-600 mb-4">Designed for growing businesses with higher transaction volumes.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Unlimited transactions</li>
                <li>• Advanced online banking features</li>
                <li>• ACH and wire transfer services</li>
                <li>• Dedicated relationship manager</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-commercial">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Non-Profit Checking</h3>
              <p className="text-gray-600 mb-4">Special account designed for non-profit organizations and community groups.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Reduced fees for qualified organizations</li>
                <li>• Free electronic deposits</li>
                <li>• Donation processing tools</li>
                <li>• Community partnership support</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-nonprofit">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}