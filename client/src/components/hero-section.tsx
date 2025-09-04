export default function HeroSection() {
  return (
    <section className="bg-white py-16 lg:py-24" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b9d07c37f26e549c64b2aa_66b64d085e84150bd3a56016_IMG_4636.jpg" 
              alt="A no 1 community bank sign hanging from the side of a building." 
              className="w-full h-auto rounded-lg shadow-lg"
              data-testid="img-number-one-bank-award"
            />
          </div>
          <div className="space-y-6">
            <div className="text-sm font-semibold text-primary" data-testid="text-award-years">
              4 Years in a Row 2019-2022
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-primary leading-tight" data-testid="text-hero-title">
              #1 Community Bank Nationwide
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed" data-testid="text-hero-description">
              At Willamette Valley Bank, we go further for our customers, our employees, and our communities. 
              Our mission is to serve everyone with personalized care and outstanding service.
            </p>
            <div className="text-sm font-medium text-primary" data-testid="text-neighbors-helping">
              Neighbors Helping Neighbors
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
