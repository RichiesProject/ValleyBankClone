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

        {/* Large Image Mosaic Layout - Matching Bank's Website Exactly */}
        <div className="relative h-[500px] lg:h-[600px]">
          {/* Far left - Person with winter hat in forest */}
          <div className="absolute left-0 top-16 w-24 h-80 rounded-lg overflow-hidden shadow-lg opacity-90 z-10">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4673d186da199502445_AdobeStock_341134694.webp" 
              alt="Person with winter hat looking up in forest" 
              className="w-full h-full object-cover"
              data-testid="img-winter-person"
            />
          </div>

          {/* Left top - Beach scene with person and dog */}
          <div className="absolute left-32 top-0 w-64 h-48 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4682ce3e6238b171d64_AdobeStock_555122175.webp" 
              alt="Person running on beach with dog at sunset" 
              className="w-full h-full object-cover"
              data-testid="img-beach-scene"
            />
          </div>

          {/* Left bottom - Happy family with child in blue */}
          <div className="absolute left-32 bottom-16 w-64 h-64 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp" 
              alt="Happy family with child in blue checkered dress" 
              className="w-full h-full object-cover"
              data-testid="img-family-child"
            />
          </div>

          {/* Large center mountain scene */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 w-[450px] h-[450px] rounded-lg overflow-hidden shadow-xl z-30">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4673d186da199502445_AdobeStock_341134694.webp" 
              alt="Mountain hiking trail with wildflowers and hiker" 
              className="w-full h-full object-cover"
              data-testid="img-mountain-hiker"
            />
          </div>

          {/* Right top - Couple looking at house */}
          <div className="absolute right-32 top-0 w-64 h-64 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b9d07c37f26e549c64b2aa_66b64d085e84150bd3a56016_IMG_4636.jpg" 
              alt="Couple looking at their home" 
              className="w-full h-full object-cover"
              data-testid="img-couple-house"
            />
          </div>

          {/* Right bottom - Family cooking together */}
          <div className="absolute right-32 bottom-16 w-64 h-48 rounded-lg overflow-hidden shadow-lg z-20">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp" 
              alt="Family cooking together in kitchen" 
              className="w-full h-full object-cover"
              data-testid="img-family-cooking-right"
            />
          </div>

          {/* Far right - Couple at scenic location */}
          <div className="absolute right-0 top-16 w-24 h-80 rounded-lg overflow-hidden shadow-lg opacity-90 z-10">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b9d07c37f26e549c64b2aa_66b64d085e84150bd3a56016_IMG_4636.jpg" 
              alt="Couple at scenic location" 
              className="w-full h-full object-cover"
              data-testid="img-couple-scenic"
            />
          </div>
        </div>
      </div>
    </section>
  );
}