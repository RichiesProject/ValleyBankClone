export default function TestimonialSection() {
  return (
    <section className="bg-white py-16 lg:py-24" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Header with logos, and Award sign photo */}
          <div className="flex flex-col justify-center lg:justify-start">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 text-center lg:text-left mb-4 lg:mb-0" data-testid="text-mobile-app-header">
                Bank on the go with our Mobile App!
              </h2>
              <div className="flex justify-center lg:justify-end space-x-4">
                <a 
                  href="https://itunes.apple.com/us/app/willamette-valley-bank-mobile/id1133122347?mt=8" 
                  className="float-on-hover"
                  data-testid="link-app-store"
                >
                  <img 
                    src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b67b49762b6b0f3ee71441_AppStoreBtn.png" 
                    alt="Download From App Store" 
                    className="h-12 w-auto"
                    data-testid="img-app-store-button"
                  />
                </a>
                <a 
                  href="https://play.google.com/store/apps/details?id=com.willamettevalleybank.mobile&hl=en" 
                  className="float-on-hover"
                  data-testid="link-google-play"
                >
                  <img 
                    src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b67b498ebf423a6af7fbc6_GooglePlayBtn.png" 
                    alt="Download From Google Play" 
                    className="h-12 w-auto"
                    data-testid="img-google-play-button"
                  />
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-start">
              <img 
                src="/bank-award-sign.png"
                alt="Willamette Valley Bank - No. 1 Community Bank Award Sign" 
                className="w-full max-w-md h-auto"
                data-testid="img-award-sign"
              />
            </div>
          </div>

          {/* Right side - Text content exactly as shown in screenshot */}
          <div className="text-left">
            <div className="mb-6">
              <p className="text-xl font-bold text-gray-600 uppercase tracking-wide mb-4" data-testid="text-award-years">
                4 YEARS IN A ROW 2019-2022
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6" data-testid="text-award-title">
                <span className="text-4xl lg:text-5xl text-gray-600">#1</span> Community Bank<br />
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