import NavigationHeader from "@/components/navigation-header";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function HomeLoanQuestions() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationHeader />
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold font-serif mb-6" data-testid="text-page-title">
              Home Loan Questions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find answers to commonly asked questions about our home loan process and programs.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-3">How much can I borrow?</h3>
              <p className="text-gray-600">The amount you can borrow depends on your income, credit score, debt-to-income ratio, and the type of loan. Most conventional loans allow you to borrow up to 80% of the home's value, while FHA loans may allow up to 96.5% with mortgage insurance.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-3">What credit score do I need?</h3>
              <p className="text-gray-600">Credit score requirements vary by loan type. Conventional loans typically require a minimum score of 620, while FHA loans may accept scores as low as 580 with a 3.5% down payment, or 500 with a 10% down payment.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-3">How long does the approval process take?</h3>
              <p className="text-gray-600">Our typical timeline is 30-45 days from application to closing. However, we offer expedited processing for qualified borrowers, with some approvals possible in as little as 2-3 weeks.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-3">What documents do I need to provide?</h3>
              <p className="text-gray-600">Common documents include: pay stubs (last 30 days), tax returns (last 2 years), bank statements (last 2-3 months), employment verification, and documentation of any additional income sources.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-3">Can I get pre-approved?</h3>
              <p className="text-gray-600">Yes! Pre-approval gives you a better understanding of your budget and shows sellers you're a serious buyer. You can apply for pre-approval online or visit one of our home loan centers.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-3">Are there programs for first-time homebuyers?</h3>
              <p className="text-gray-600">We offer several first-time homebuyer programs including FHA loans, VA loans (for eligible veterans), and down payment assistance programs. Our loan specialists can help you find the best option for your situation.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-3">What are closing costs?</h3>
              <p className="text-gray-600">Closing costs typically range from 2-5% of the loan amount and include fees for appraisal, title insurance, attorney fees, and loan origination. We provide a detailed estimate upfront so there are no surprises.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold mb-3">Can I lock in my interest rate?</h3>
              <p className="text-gray-600">Yes, we offer rate locks for up to 60 days at no cost, with extensions available. This protects you from rate increases while your loan is being processed.</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-slate-800 text-white rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-4">Still Have Questions?</h2>
              <p className="mb-6">Our home loan specialists are here to help you through every step of the process.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-slate-800 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors" data-testid="button-speak-specialist">
                  Speak with a Specialist
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-slate-800 transition-colors" data-testid="button-schedule-consultation">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}