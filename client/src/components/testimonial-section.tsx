export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-20 lg:py-32" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Award sign recreation */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative max-w-lg w-full">
              {/* Building background blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 rounded-xl blur-sm"></div>
              
              {/* Award sign circle */}
              <div className="relative bg-white rounded-full w-80 h-80 mx-auto shadow-2xl border-8 border-gray-800 flex flex-col items-center justify-center p-8">
                <div className="text-center space-y-3">
                  {/* No 1 */}
                  <div className="text-6xl font-bold text-gray-900 tracking-tight">N°1</div>
                  
                  {/* Community Bank */}
                  <div className="space-y-1">
                    <div className="text-xl font-bold text-gray-800 uppercase tracking-widest">COMMUNITY</div>
                    <div className="text-xl font-bold text-gray-800 uppercase tracking-widest">BANK</div>
                  </div>
                  
                  {/* In the Nation */}
                  <div className="text-sm text-gray-700 uppercase tracking-wide">IN THE NATION</div>
                  
                  {/* Magazine banner */}
                  <div className="bg-gray-900 text-white px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded">
                    AMERICAN BANKER MAGAZINE 2019, 2020 & 2021
                  </div>
                  
                  {/* Bank logo and name */}
                  <div className="flex items-center justify-center space-x-3 pt-2">
                    <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                        <div className="w-6 h-3 bg-gray-900 rounded-full"></div>
                      </div>
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-bold text-gray-900">Willamette</div>
                      <div className="text-sm font-bold text-gray-900">Valley Bank</div>
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