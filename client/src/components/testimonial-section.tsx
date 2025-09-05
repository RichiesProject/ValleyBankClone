export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-20 lg:py-32" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Award sign photo */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-2xl w-full">
              {/* Award sign - recreated exactly from your image */}
              <div className="relative bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 rounded-xl shadow-2xl overflow-hidden">
                {/* Building background elements */}
                <div className="absolute inset-0 bg-gradient-to-r from-stone-200 to-amber-100 opacity-60"></div>
                <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-b from-stone-400 to-stone-600 opacity-30"></div>
                
                {/* Award sign circle positioned as in your photo */}
                <div className="relative z-10 flex items-center justify-center py-16 px-8">
                  <div className="bg-white rounded-full w-80 h-80 shadow-2xl border-4 border-gray-900 flex flex-col items-center justify-center p-6">
                    <div className="text-center space-y-2">
                      {/* N°1 */}
                      <div className="text-5xl font-bold text-gray-900 mb-2">N°1</div>
                      
                      {/* COMMUNITY BANK */}
                      <div className="space-y-1 mb-2">
                        <div className="text-lg font-bold text-gray-900 uppercase tracking-wider">COMMUNITY</div>
                        <div className="text-lg font-bold text-gray-900 uppercase tracking-wider">BANK</div>
                      </div>
                      
                      {/* IN THE NATION */}
                      <div className="text-xs text-gray-700 uppercase tracking-wide mb-3">IN THE NATION</div>
                      
                      {/* Magazine banner */}
                      <div className="bg-gray-900 text-white px-3 py-1 text-xs font-semibold uppercase tracking-wide mb-3">
                        AMERICAN BANKER MAGAZINE 2019, 2020 & 2021
                      </div>
                      
                      {/* Willamette Valley Bank logo and name */}
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                            <div className="w-4 h-2 bg-gray-900 rounded-full"></div>
                          </div>
                        </div>
                        <div className="text-left">
                          <div className="text-xs font-bold text-gray-900">Willamette</div>
                          <div className="text-xs font-bold text-gray-900">Valley Bank</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Award content */}
          <div className="text-left space-y-8">
            <div className="space-y-6">
              <p className="text-xl font-bold text-gray-600 uppercase tracking-wider" data-testid="text-award-years">
                4 YEARS IN A ROW 2019-2022
              </p>
              <h1 className="text-6xl lg:text-7xl font-light text-gray-900 leading-none" data-testid="text-award-title">
                <span className="text-5xl lg:text-6xl text-gray-600 font-normal">#1</span> Community Bank<br />
                <span className="block">Nationwide</span>
              </h1>
            </div>
            
            <p className="text-2xl text-gray-700 leading-relaxed font-normal max-w-3xl" data-testid="text-award-description">
              At Willamette Valley Bank, we go further for our customers, our employees, and our communities. Our mission is to serve everyone with personalized care and outstanding service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}