export default function HeroSection() {
  return (
    <section className="hero-gradient text-white py-20 lg:py-32 relative overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Main content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-light leading-tight mb-8" data-testid="text-hero-title">
              Where Local Means Everything
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                className="bg-white text-primary px-8 py-3 rounded font-medium hover:bg-gray-100 transition-colors"
                data-testid="button-community-banking"
              >
                Community Banking
              </button>
              <button 
                className="border-2 border-white text-white px-8 py-3 rounded font-medium hover:bg-white hover:text-primary transition-colors"
                data-testid="button-home-loan-journeys"
              >
                Home Loan Journeys
              </button>
            </div>
          </div>

          {/* Right side - Image collage */}
          <div className="relative grid grid-cols-2 gap-4 h-96">
            {/* Top left - Beach scene */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4682ce3e6238b171d64_AdobeStock_555122175.webp" 
                alt="Person running on beach with dog" 
                className="w-full h-full object-cover"
                data-testid="img-beach-scene"
              />
            </div>

            {/* Top right - Mountain scene */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4673d186da199502445_AdobeStock_341134694.webp" 
                alt="Mountain landscape with trees" 
                className="w-full h-full object-cover"
                data-testid="img-mountain-scene"
              />
            </div>

            {/* Bottom left - Couple scene */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp" 
                alt="Happy couple together" 
                className="w-full h-full object-cover"
                data-testid="img-couple-scene"
              />
            </div>

            {/* Bottom right - Home scene */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b9d07c37f26e549c64b2aa_66b64d085e84150bd3a56016_IMG_4636.jpg" 
                alt="Beautiful home exterior" 
                className="w-full h-full object-cover"
                data-testid="img-home-scene"
              />
            </div>

            {/* Additional floating images for more dynamic layout */}
            <div className="absolute -left-8 top-8 w-24 h-24 rounded-lg overflow-hidden opacity-80">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp" 
                alt="Lifestyle image" 
                className="w-full h-full object-cover"
                data-testid="img-lifestyle-1"
              />
            </div>

            <div className="absolute -right-8 bottom-8 w-32 h-20 rounded-lg overflow-hidden opacity-80">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4682ce3e6238b171d64_AdobeStock_555122175.webp" 
                alt="Lifestyle image" 
                className="w-full h-full object-cover"
                data-testid="img-lifestyle-2"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
