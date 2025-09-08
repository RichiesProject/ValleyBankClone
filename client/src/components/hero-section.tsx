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

        {/* Clean Photo Gallery Layout */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-4 h-[400px]">
            {/* Left column - Tall image */}
            <div className="col-span-2 row-span-2">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8a7ee841fdd36d4077c87_AdobeStock_326565831.png" 
                alt="Person with skis in winter forest" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                data-testid="img-winter-skier"
              />
            </div>

            {/* Second column - Two stacked images */}
            <div className="col-span-3 row-span-1">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e89d0e48b098a8c63b2175_AdobeStock_262265733.png" 
                alt="Person running on beach with dog" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                data-testid="img-beach-scene"
              />
            </div>
            
            <div className="col-span-3 row-span-1">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66eb3eae5bb23131069a0a46_AdobeStock_388021466%20(1)-p-1080.png" 
                alt="Happy family with child in blue" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                data-testid="img-family-child"
              />
            </div>

            {/* Large center image */}
            <div className="col-span-4 row-span-2">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8adcd7105b1f7ac24548c_AdobeStock_913272681-hood-sm.png" 
                alt="Mountain hiking trail with wildflowers and hiker" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                data-testid="img-mountain-hiker"
              />
            </div>

            {/* Right column - Two stacked images */}
            <div className="col-span-3 row-span-1">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8a4c18adb7c866821a811_AdobeStock_115986933%20(3)-p-1080.png" 
                alt="Couple looking at their home" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                data-testid="img-couple-house"
              />
            </div>
            
            <div className="col-span-3 row-span-1">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8a8b3d2e4275477dfd8ef_happy-african-american-father-and-daughter-making-2023-11-27-05-07-56-utc.png" 
                alt="Happy father and daughter cooking together" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                data-testid="img-kitchen-scene"
              />
            </div>

            {/* Far right - Tall image */}
            <div className="col-span-2 row-span-2">
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66e8a1fc4ea46beef106deff_AdobeStock_416809840.png" 
                alt="Outdoor nature scene" 
                className="w-full h-full object-cover rounded-lg shadow-lg"
                data-testid="img-waterfall-scene"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}