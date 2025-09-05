export default function HomeLoansSection() {
  return (
    <section className="bg-slate-800 py-16" data-testid="home-loans-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-sm text-gray-300 tracking-wider uppercase font-medium" data-testid="text-neighbors-tagline">
              NEIGHBORS HELPING NEIGHBORS
            </p>
            <h2 className="text-4xl lg:text-5xl font-light text-white leading-tight" data-testid="text-home-loans-title">
              Home Loans from a<br />Local Source
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed" data-testid="text-home-loans-description">
              We combine local market knowledge with personalized service,<br />
              ensuring you feel valued and supported at every step. Whether<br />
              you're buying your first home, refinancing your mortgage, or<br />
              planning for the future, WVBK is here to empower your financial<br />
              journey, and answer any questions you have along the way.
            </p>
            <button 
              className="bg-white text-slate-800 px-6 py-3 rounded font-medium hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2"
              data-testid="button-home-loans-learn-more"
            >
              <span>Learn More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          <div>
            {/* Remove image to match screenshot layout */}
          </div>
        </div>
      </div>
    </section>
  );
}
