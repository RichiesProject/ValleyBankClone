export default function TestimonialSection() {
  return (
    <section className="bg-white py-16 lg:py-24" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Award sign photo exactly as shown in screenshot */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/attached_assets/Screenshot 2025-09-04 at 8.51.42 PM_1757066765236.png"
              alt="Willamette Valley Bank - No. 1 Community Bank Award Sign" 
              className="w-full max-w-md h-auto"
              data-testid="img-award-sign"
            />
          </div>

          {/* Right side - Text content exactly as shown in screenshot */}
          <div className="text-left">
            <div className="mb-6">
              <p className="text-base font-medium text-gray-600 uppercase tracking-wide mb-4" data-testid="text-award-years">
                4 YEARS IN A ROW 2019-2022
              </p>
              <h1 className="text-4xl lg:text-5xl font-normal text-gray-900 leading-tight mb-6" data-testid="text-award-title">
                <span className="text-3xl lg:text-4xl text-gray-600">#1</span> Community Bank<br />
                <span className="block">Nationwide</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed font-normal" data-testid="text-award-description">
              At Willamette Valley Bank, we go further for our customers, our employees, and our communities. Our mission is to serve everyone with personalized care and outstanding service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}