import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function HomeLoanCenters() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Home Loan Centers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our specialized home loan centers for personalized service and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Salem Home Loan Center</h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>📍 123 Commercial Street SE</p>
                <p>Salem, OR 97301</p>
                <p>📞 (503) 555-0123</p>
                <p>🕒 Mon-Fri: 9AM-6PM, Sat: 9AM-2PM</p>
              </div>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-visit-salem">
                Schedule Visit
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Albany Home Loan Center</h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>📍 456 Pacific Boulevard</p>
                <p>Albany, OR 97321</p>
                <p>📞 (541) 555-0124</p>
                <p>🕒 Mon-Fri: 9AM-6PM, Sat: 9AM-2PM</p>
              </div>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-visit-albany">
                Schedule Visit
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Corvallis Home Loan Center</h3>
              <div className="space-y-2 text-gray-600 mb-6">
                <p>📍 789 Kings Boulevard</p>
                <p>Corvallis, OR 97330</p>
                <p>📞 (541) 555-0125</p>
                <p>🕒 Mon-Fri: 9AM-6PM, Sat: 9AM-2PM</p>
              </div>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-visit-corvallis">
                Schedule Visit
              </button>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-center">What to Expect at Our Centers</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Expert Consultation</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• One-on-one meetings with loan specialists</li>
                  <li>• Personalized loan recommendations</li>
                  <li>• Credit review and improvement advice</li>
                  <li>• Down payment assistance programs</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Streamlined Process</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Document review and collection</li>
                  <li>• Same-day pre-approval available</li>
                  <li>• Application completion assistance</li>
                  <li>• Direct communication with underwriting</li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <button className="bg-slate-800 text-white px-8 py-3 rounded-lg hover:bg-slate-700 transition-colors" data-testid="button-schedule-appointment">
                Schedule an Appointment
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}