import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function CommercialLenders() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Commercial Lenders
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet our experienced commercial lending team dedicated to helping your business succeed.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">JD</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">John Davis</h3>
              <p className="text-gray-600 mb-4">Senior Commercial Loan Officer</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6 text-left">
                <li>• 15+ years commercial lending experience</li>
                <li>• SBA loan specialist</li>
                <li>• Equipment financing expert</li>
                <li>• Local business advocate</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-contact-john">
                Contact John
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">SM</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Martinez</h3>
              <p className="text-gray-600 mb-4">Commercial Real Estate Specialist</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6 text-left">
                <li>• Commercial real estate expert</li>
                <li>• 12+ years industry experience</li>
                <li>• Investment property financing</li>
                <li>• Construction loan specialist</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-contact-sarah">
                Contact Sarah
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-300 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-600">MJ</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Michael Johnson</h3>
              <p className="text-gray-600 mb-4">Business Development Officer</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6 text-left">
                <li>• New business development</li>
                <li>• 10+ years commercial banking</li>
                <li>• Working capital solutions</li>
                <li>• Cash management services</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-contact-michael">
                Contact Michael
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}