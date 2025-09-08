import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function PersonalBanking() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Personal Banking
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive banking services tailored to your personal financial needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6">Online & Mobile Banking</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-2">24/7 Account Access</h3>
                  <p className="text-gray-600">Check balances, transfer funds, and pay bills anytime, anywhere.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-2">Mobile Deposit</h3>
                  <p className="text-gray-600">Deposit checks directly from your smartphone camera.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-2">Bill Pay</h3>
                  <p className="text-gray-600">Schedule and manage all your bills in one convenient location.</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-6">Additional Services</h2>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-2">ATM Network</h3>
                  <p className="text-gray-600">Access to thousands of fee-free ATMs nationwide.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-2">Financial Planning</h3>
                  <p className="text-gray-600">Work with our experts to plan your financial future.</p>
                </div>
                <div className="bg-white rounded-lg shadow p-6">
                  <h3 className="font-semibold mb-2">Safe Deposit Boxes</h3>
                  <p className="text-gray-600">Secure storage for your important documents and valuables.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors" data-testid="button-get-started">
              Get Started Today
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}