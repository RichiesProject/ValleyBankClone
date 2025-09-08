import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function PersonalCreditCards() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Personal Credit Cards
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find the perfect credit card to match your lifestyle and spending habits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Rewards Card</h3>
              <p className="text-gray-600 mb-4">Earn points on every purchase with no annual fee.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 2% cash back on all purchases</li>
                <li>• No annual fee</li>
                <li>• Fraud protection</li>
                <li>• Online account management</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-rewards">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Travel Card</h3>
              <p className="text-gray-600 mb-4">Perfect for frequent travelers with premium benefits.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• 3x points on travel purchases</li>
                <li>• No foreign transaction fees</li>
                <li>• Travel insurance included</li>
                <li>• Airport lounge access</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-travel">
                Apply Now
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Secured Card</h3>
              <p className="text-gray-600 mb-4">Build or rebuild your credit with a secured credit card.</p>
              <ul className="space-y-2 text-sm text-gray-600 mb-6">
                <li>• Helps build credit history</li>
                <li>• Low security deposit</li>
                <li>• Graduation to unsecured card</li>
                <li>• Credit monitoring tools</li>
              </ul>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-apply-secured">
                Apply Now
              </button>
            </div>
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-center">Credit Card Benefits</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-semibold mb-2">Security</h4>
                <p className="text-gray-600">Advanced fraud protection and zero liability for unauthorized transactions.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Convenience</h4>
                <p className="text-gray-600">Contactless payments, mobile wallets, and online account management.</p>
              </div>
              <div className="text-center">
                <h4 className="font-semibold mb-2">Support</h4>
                <p className="text-gray-600">24/7 customer service and local banking relationships.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}