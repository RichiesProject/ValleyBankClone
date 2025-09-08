export default function HeroSection() {
  return (
    <section className="bg-slate-800 text-white py-16 relative overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title and Buttons */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8" data-testid="text-hero-title">
            Where Local Means Everything
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-slate-800 px-8 py-3 rounded font-medium hover:bg-gray-100 transition-all duration-300"
              data-testid="button-community-banking"
            >
              Community Banking
            </button>
            <button 
              className="bg-slate-700 text-white px-8 py-3 rounded font-medium hover:bg-slate-600 transition-all duration-300"
              data-testid="button-home-loan-journeys"
            >
              Home Loan Journeys
            </button>
          </div>
        </div>

        {/* Large Image Mosaic Layout - Exactly like Bank's Original Website */}
        <div className="relative h-[500px] lg:h-[600px]">
          {/* Far left - Person with skis in winter forest */}
          <div className="absolute left-0 top-16 w-24 h-80 rounded-lg overflow-hidden shadow-lg opacity-90 z-10">
            <img 
              src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Person with skis in winter forest" 
              className="w-full h-full object-cover"
              data-testid="img-winter-skier"
            />
          </div>

          {/* Left top - Beach scene with person and dog */}
          <div className="absolute left-32 top-0 w-64 h-48 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e89d0e48b098a8c63b2175_AdobeStock_262265733.png" 
              alt="Person running on beach with dog" 
              className="w-full h-full object-cover"
              data-testid="img-beach-scene"
            />
          </div>

          {/* Left bottom - Family with child in blue */}
          <div className="absolute left-32 bottom-16 w-64 h-64 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://images.unsplash.com/photo-1511895426328-dc8714aecd7" 
              alt="Happy family with child in blue" 
              className="w-full h-full object-cover"
              data-testid="img-family-child"
            />
          </div>

          {/* Large center mountain scene with hiker and wildflowers */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[450px] h-[450px] rounded-lg overflow-hidden shadow-xl z-30">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8adcd7105b1f7ac24548c_AdobeStock_913272681-hood-sm.png" 
              alt="Mountain hiking trail with wildflowers and hiker" 
              className="w-full h-full object-cover"
              data-testid="img-mountain-hiker"
            />
          </div>

          {/* Right top - Couple looking at house */}
          <div className="absolute right-32 top-0 w-64 h-64 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80" 
              alt="Couple looking at their home" 
              className="w-full h-full object-cover"
              data-testid="img-couple-house"
            />
          </div>

          {/* Right bottom - Family cooking together */}
          <div className="absolute right-32 bottom-16 w-64 h-48 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Family cooking together in kitchen" 
              className="w-full h-full object-cover"
              data-testid="img-kitchen-scene"
            />
          </div>

          {/* Far right - Waterfall scene */}
          <div className="absolute right-0 top-16 w-24 h-80 rounded-lg overflow-hidden shadow-lg opacity-90 z-10">
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Waterfall in forest" 
              className="w-full h-full object-cover"
              data-testid="img-waterfall-scene"
            />
          </div>
        </div>
      </div>
    </section>
  );
}