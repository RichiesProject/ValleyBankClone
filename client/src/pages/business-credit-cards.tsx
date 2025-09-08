import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function BusinessCreditCards() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Business Credit Cards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Manage your business expenses and build credit with our flexible business credit card solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Rewards Card</h3>
              <p className="text-gray-600 mb-4">Earn rewards on every business purchase you make.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 2% cash back on all purchases</li>
                <li>• 3% cash back on gas and office supplies</li>
                <li>• No annual fee for the first year</li>
                <li>• Fraud protection and monitoring</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-rewards">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Platinum Card</h3>
              <p className="text-gray-600 mb-4">Premium card with enhanced benefits and higher credit limits.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Higher credit limits available</li>
                <li>• Travel insurance and benefits</li>
                <li>• Priority customer service</li>
                <li>• Detailed expense reporting</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-platinum">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Business Fleet Card</h3>
              <p className="text-gray-600 mb-4">Specialized card for businesses with vehicle fleets and transportation needs.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 5% cash back on fuel purchases</li>
                <li>• Fleet management tools</li>
                <li>• Individual employee cards</li>
                <li>• Real-time expense tracking</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-fleet">
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