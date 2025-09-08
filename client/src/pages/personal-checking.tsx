import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function PersonalChecking() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Personal Checking
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our variety of checking accounts designed to meet your everyday banking needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Free Checking</h3>
              <p className="text-gray-600 mb-4">No monthly fees, no minimum balance required.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Free online and mobile banking</li>
                <li>• Free debit card</li>
                <li>• 24/7 customer support</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-free">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Interest Checking</h3>
              <p className="text-gray-600 mb-4">Earn interest on your checking account balance.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Competitive interest rates</li>
                <li>• Free online banking</li>
                <li>• Premium debit card</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-interest">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Premium Checking</h3>
              <p className="text-gray-600 mb-4">Our full-service checking with premium benefits.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Higher interest rates</li>
                <li>• Free checks and wire transfers</li>
                <li>• Priority customer service</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-premium">
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