import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function BusinessSavings() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Business Savings
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your business's financial future with our competitive savings accounts and money market options.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Savings Account</h3>
              <p className="text-gray-600 mb-4">Earn competitive interest while maintaining easy access to your funds.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Competitive interest rates</li>
                <li>• No monthly maintenance fees</li>
                <li>• Online account management</li>
                <li>• $500 minimum opening deposit</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-savings">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Money Market</h3>
              <p className="text-gray-600 mb-4">Higher yields for businesses with larger cash reserves.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Tiered interest rates</li>
                <li>• Check writing capabilities</li>
                <li>• Debit card access</li>
                <li>• $10,000 minimum balance</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-money-market">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Certificate of Deposit</h3>
              <p className="text-gray-600 mb-4">Lock in guaranteed returns with our flexible CD terms.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Terms from 3 months to 5 years</li>
                <li>• Guaranteed interest rates</li>
                <li>• FDIC insured up to $250,000</li>
                <li>• Automatic renewal options</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-cd">
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