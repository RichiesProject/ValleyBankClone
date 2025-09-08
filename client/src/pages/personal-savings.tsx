import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function PersonalSavings() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Personal Savings
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Build your financial future with our competitive savings accounts and certificates of deposit.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Regular Savings</h3>
              <p className="text-gray-600 mb-4">Start saving with no minimum balance requirement.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Competitive interest rates</li>
                <li>• No monthly maintenance fees</li>
                <li>• Easy online access</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-regular">
                Open Account
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">High Yield Savings</h3>
              <p className="text-gray-600 mb-4">Maximize your earnings with higher interest rates.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Premium interest rates</li>
                <li>• $1,000 minimum balance</li>
                <li>• Free transfers</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-high-yield">
                Open Account
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Money Market</h3>
              <p className="text-gray-600 mb-4">Combine savings with limited check-writing privileges.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Tiered interest rates</li>
                <li>• Debit card access</li>
                <li>• Check writing privileges</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-money-market">
                Open Account
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}