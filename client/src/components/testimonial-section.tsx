import { Quote } from 'lucide-react';
import ryanImage from '@assets/generated_images/Professional_CEO_headshot_portrait_0ec2e71c.png';

export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-16 lg:py-24" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Award sign */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              {/* Background building image */}
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp"
                alt="Bank building background" 
                className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                data-testid="img-building-background"
              />
              
              {/* Award sign overlay - recreated exactly from screenshot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white rounded-full w-64 h-64 shadow-2xl border-4 border-gray-800 flex flex-col items-center justify-center relative">
                  <div className="text-center px-6">
                    <div className="text-5xl font-bold text-gray-900 mb-1">N°1</div>
                    <div className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">COMMUNITY</div>
                    <div className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-1">BANK</div>
                    <div className="text-xs text-gray-700 uppercase mb-3">IN THE NATION</div>
                    
                    {/* Black banner */}
                    <div className="bg-gray-900 text-white px-3 py-1 text-xs font-semibold mb-3 rounded">
                      AMERICAN BANKER MAGAZINE 2019, 2020 & 2021
                    </div>
                    
                    {/* Bank logo and name */}
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

          {/* Right side - Award content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-600 uppercase tracking-wide mb-2" data-testid="text-award-years">
                4 YEARS IN A ROW 2019-2022
              </p>
              <h2 className="text-4xl lg:text-5xl font-medium text-gray-900 leading-tight" data-testid="text-award-title">
                <span className="text-3xl lg:text-4xl text-gray-600 font-semibold">#1</span> <span className="font-medium">Community Bank</span><br />
                <span className="block font-medium">Nationwide</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg font-medium" data-testid="text-award-description">
              At Willamette Valley Bank, we go further for our customers, our employees, and our communities. Our mission is to serve everyone with personalized care and outstanding service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}