export default function HeroSection() {
  return (
    <section className="bg-slate-800 text-white py-16 relative overflow-hidden" data-testid="hero-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Title and Buttons */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 font-serif" data-testid="text-hero-title">
            Where Local Means Everything
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="bg-white text-slate-800 px-8 py-3 rounded font-medium hover:bg-gray-100 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
              data-testid="button-community-banking"
            >
              Community Banking
            </button>
            <button 
              className="bg-slate-700 text-white px-8 py-3 rounded font-medium hover:bg-slate-600 hover:-translate-y-2 hover:shadow-lg transition-all duration-300"
              data-testid="button-home-loan-journeys"
            >
              Home Loan Journeys
            </button>
          </div>
        </div>

        {/* Large Image Mosaic Layout with Proper Spacing */}
        <div className="relative h-[700px] lg:h-[800px] px-4">
          {/* Far left - Person with skis in winter forest */}
          <div className="absolute left-8 top-20 w-40 h-96 rounded-lg overflow-hidden shadow-lg opacity-90 z-10">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8a7ee841fdd36d4077c87_AdobeStock_326565831.png" 
              alt="Person with skis in winter forest" 
              className="w-full h-full object-cover"
              data-testid="img-winter-skier"
            />
          </div>

          {/* Left top - Beach scene with person and dog */}
          <div className="absolute left-56 top-0 w-80 h-60 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e89d0e48b098a8c63b2175_AdobeStock_262265733.png" 
              alt="Person running on beach with dog" 
              className="w-full h-full object-cover"
              data-testid="img-beach-scene"
            />
          </div>

          {/* Left bottom - Family with child in blue */}
          <div className="absolute left-56 bottom-20 w-80 h-80 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66eb3eae5bb23131069a0a46_AdobeStock_388021466%20(1)-p-1080.png" 
              alt="Happy family with child in blue" 
              className="w-full h-full object-cover"
              data-testid="img-family-child"
            />
          </div>

          {/* Large center mountain scene with hiker and wildflowers */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[600px] h-[600px] rounded-lg overflow-hidden shadow-xl z-30">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8adcd7105b1f7ac24548c_AdobeStock_913272681-hood-sm.png" 
              alt="Mountain hiking trail with wildflowers and hiker" 
              className="w-full h-full object-cover"
              data-testid="img-mountain-hiker"
            />
          </div>

          {/* Right top - Couple looking at house */}
          <div className="absolute right-56 top-0 w-80 h-80 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8a4c18adb7c866821a811_AdobeStock_115986933%20(3)-p-1080.png" 
              alt="Couple looking at their home" 
              className="w-full h-full object-cover"
              data-testid="img-couple-house"
            />
          </div>

          {/* Right bottom - Happy father and daughter */}
          <div className="absolute right-56 bottom-20 w-80 h-60 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8a8b3d2e4275477dfd8ef_happy-african-american-father-and-daughter-making-2023-11-27-05-07-56-utc.png" 
              alt="Happy father and daughter cooking together" 
              className="w-full h-full object-cover"
              data-testid="img-kitchen-scene"
            />
          </div>

          {/* Far right - Outdoor nature scene */}
          <div className="absolute right-8 top-20 w-40 h-96 rounded-lg overflow-hidden shadow-lg opacity-90 z-10">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8a1fc4ea46beef106deff_AdobeStock_416809840.png" 
              alt="Outdoor nature scene" 
              className="w-full h-full object-cover"
              data-testid="img-waterfall-scene"
            />
          </div>
        </div>
      </div>
    </section>
  );
}