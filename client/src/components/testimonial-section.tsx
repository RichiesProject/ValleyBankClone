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
              <img 
                src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp"
                alt="No. 1 Community Bank Award Sign" 
                className="w-full max-w-lg h-auto rounded-lg shadow-lg"
                data-testid="img-award-sign"
              />
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