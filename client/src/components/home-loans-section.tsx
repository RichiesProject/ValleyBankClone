export default function HomeLoansSection() {
  return (
    <section className="bg-gray-50 py-16" data-testid="home-loans-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary" data-testid="text-home-loans-title">
              Home Loans from a Local Source
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed" data-testid="text-home-loans-description">
              We combine local market knowledge with personalized service, ensuring you feel valued and 
              supported at every step. Whether you're buying your first home, refinancing your mortgage, 
              or planning for the future, WVBK is here to empower your financial journey, and answer any 
              questions you have along the way.
            </p>
            <button 
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors hover-lift"
              data-testid="button-home-loans-learn-more"
            >
              Learn More
            </button>
          </div>
          <div>
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp" 
              alt="a group of people standing around a wooden table" 
              className="w-full h-auto rounded-lg shadow-lg"
              data-testid="img-home-loans-consultation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
