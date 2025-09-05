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
              {/* Award plaque mockup */}
              <div className="bg-white rounded-full w-64 h-64 shadow-xl border-8 border-gray-800 flex flex-col items-center justify-center relative">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gray-800 mb-1">N°1</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">COMMUNITY</div>
                  <div className="text-sm font-semibold text-gray-700 uppercase tracking-wider">BANK</div>
                  <div className="text-xs text-gray-600 mt-2 uppercase">IN THE NATION</div>
                  <div className="border-t border-gray-400 w-16 mx-auto mt-2 pt-2">
                    <div className="w-12 h-3 bg-gray-800 rounded mx-auto flex items-center justify-center">
                      <span className="text-white text-xs font-bold">WVB</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background building */}
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp"
                alt="Bank building background" 
                className="absolute inset-0 w-full h-full object-cover rounded-lg -z-10 opacity-30"
                data-testid="img-building-background"
              />
            </div>
          </div>

          {/* Right side - Award content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2" data-testid="text-award-years">
                4 YEARS IN A ROW 2019-2022
              </p>
              <h2 className="text-4xl lg:text-5xl font-light text-gray-900 leading-tight" data-testid="text-award-title">
                <span className="text-3xl lg:text-4xl text-gray-600 font-normal">#1</span> <span className="font-light">Community Bank</span><br />
                <span className="block font-light">Nationwide</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg" data-testid="text-award-description">
              At Willamette Valley Bank, we go further for our customers, our employees, and our communities. Our mission is to serve everyone with personalized care and outstanding service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}