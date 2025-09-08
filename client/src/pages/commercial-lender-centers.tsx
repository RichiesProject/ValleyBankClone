import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";

export default function CommercialLenderCenters() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Commercial Lender Centers
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit our commercial lending centers for personalized business banking services and expert guidance.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Salem Commercial Center</h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <p><strong>Address:</strong> 101 High St NE, Salem, OR 97301</p>
                <p><strong>Phone:</strong> (503) 485-2222</p>
                <p><strong>Hours:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>Monday - Thursday: 9:00 AM - 5:00 PM</li>
                  <li>Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <h4 className="font-semibold text-gray-800">Services Available:</h4>
                <ul className="space-y-1">
                  <li>• SBA loan processing</li>
                  <li>• Commercial real estate loans</li>
                  <li>• Equipment financing</li>
                  <li>• Business account setup</li>
                </ul>
              </div>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-visit-salem">
                Schedule Appointment
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Eugene Commercial Center</h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <p><strong>Address:</strong> 1250 Willamette St, Eugene, OR 97401</p>
                <p><strong>Phone:</strong> (541) 555-0100</p>
                <p><strong>Hours:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>Monday - Thursday: 9:00 AM - 5:00 PM</li>
                  <li>Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <h4 className="font-semibold text-gray-800">Services Available:</h4>
                <ul className="space-y-1">
                  <li>• Business development consulting</li>
                  <li>• Commercial lending services</li>
                  <li>• Cash management solutions</li>
                  <li>• Treasury services</li>
                </ul>
              </div>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-visit-eugene">
                Schedule Appointment
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Portland Commercial Center</h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <p><strong>Address:</strong> 555 SW Oak St, Portland, OR 97204</p>
                <p><strong>Phone:</strong> (503) 555-0200</p>
                <p><strong>Hours:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>Monday - Thursday: 8:00 AM - 5:30 PM</li>
                  <li>Friday: 8:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 2:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <h4 className="font-semibold text-gray-800">Services Available:</h4>
                <ul className="space-y-1">
                  <li>• Large commercial loans</li>
                  <li>• International banking</li>
                  <li>• Investment services</li>
                  <li>• Private banking</li>
                </ul>
              </div>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-visit-portland">
                Schedule Appointment
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Bend Commercial Center</h3>
              <div className="space-y-3 text-gray-600 mb-6">
                <p><strong>Address:</strong> 875 NW Wall St, Bend, OR 97703</p>
                <p><strong>Phone:</strong> (541) 555-0300</p>
                <p><strong>Hours:</strong></p>
                <ul className="text-sm space-y-1 ml-4">
                  <li>Monday - Thursday: 9:00 AM - 5:00 PM</li>
                  <li>Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 9:00 AM - 1:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <h4 className="font-semibold text-gray-800">Services Available:</h4>
                <ul className="space-y-1">
                  <li>• Small business lending</li>
                  <li>• Agricultural loans</li>
                  <li>• Tourism industry financing</li>
                  <li>• Local business support</li>
                </ul>
              </div>
              <button className="w-full bg-slate-800 text-white py-2 rounded hover:bg-slate-700 transition-colors" data-testid="button-visit-bend">
                Schedule Appointment
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}