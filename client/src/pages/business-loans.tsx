import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function BusinessLoans() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Business Loans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fuel your business growth with our flexible loan options designed to meet your financing needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">SBA Loans</h3>
              <p className="text-gray-600 mb-4">Government-backed loans with favorable terms for qualified businesses.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Up to $5 million financing</li>
                <li>• Lower down payments required</li>
                <li>• Competitive interest rates</li>
                <li>• Flexible repayment terms</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-sba">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Equipment Financing</h3>
              <p className="text-gray-600 mb-4">Finance the equipment your business needs to grow and succeed.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Up to 100% equipment financing</li>
                <li>• Quick approval process</li>
                <li>• Equipment serves as collateral</li>
                <li>• Terms up to 10 years</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-equipment">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Commercial Real Estate</h3>
              <p className="text-gray-600 mb-4">Finance your business property with our commercial real estate loans.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Purchase or refinance options</li>
                <li>• Competitive rates and terms</li>
                <li>• Local decision making</li>
                <li>• Experienced commercial team</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-real-estate">
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