import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function HomeLoans() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Home Loans
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Turn your homeownership dreams into reality with our competitive home loan programs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Conventional Loans</h3>
              <p className="text-gray-600 mb-4">Traditional financing with competitive rates and flexible terms.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Down payments as low as 3%</li>
                <li>• Fixed and adjustable rates</li>
                <li>• 15 and 30-year terms</li>
                <li>• No mortgage insurance with 20% down</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-conventional">
                Learn More
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">FHA Loans</h3>
              <p className="text-gray-600 mb-4">Government-backed loans with low down payment requirements.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Down payments as low as 3.5%</li>
                <li>• Flexible credit requirements</li>
                <li>• Government backing</li>
                <li>• First-time buyer friendly</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-fha">
                Learn More
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">VA Loans</h3>
              <p className="text-gray-600 mb-4">Exclusive benefits for our military veterans and service members.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• No down payment required</li>
                <li>• No mortgage insurance</li>
                <li>• Competitive interest rates</li>
                <li>• No prepayment penalties</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-va">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="bg-slate-800 text-white rounded-lg p-8 text-center">
            <h2 className="text-3xl font-semibold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Get pre-approved in minutes and start shopping with confidence.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors" data-testid="button-get-preapproved">
                Get Pre-Approved
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors" data-testid="button-calculate-payment">
                Calculate Payment
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}