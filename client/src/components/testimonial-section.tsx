export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-20 lg:py-32" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Award image */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/attached_assets/Screenshot 2025-09-04 at 8.51.42 PM_1757033510462.png"
              alt="No. 1 Community Bank Award Sign" 
              className="w-full max-w-2xl h-auto rounded-xl shadow-2xl"
              data-testid="img-award-sign"
            />
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