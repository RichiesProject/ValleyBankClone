import { Quote } from 'lucide-react';
import ryanImage from '@assets/generated_images/Professional_CEO_headshot_portrait_0ec2e71c.png';

export default function TestimonialSection() {
  return (
    <section className="bg-gray-100 py-16 lg:py-24" data-testid="testimonial-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Award image standalone */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp"
              alt="No. 1 Community Bank Award Sign" 
              className="w-full max-w-xl h-auto rounded-lg shadow-lg"
              data-testid="img-award-sign"
            />
          </div>

          {/* Right side - Award content */}
          <div className="text-center lg:text-left flex flex-col justify-center">
            <div className="mb-8">
              <p className="text-lg font-bold text-gray-600 uppercase tracking-wide mb-4" data-testid="text-award-years">
                4 YEARS IN A ROW 2019-2022
              </p>
              <h2 className="text-5xl lg:text-6xl font-medium text-gray-900 leading-tight mb-6" data-testid="text-award-title">
                <span className="text-4xl lg:text-5xl text-gray-600 font-semibold">#1</span> <span className="font-medium">Community Bank</span><br />
                <span className="block font-medium">Nationwide</span>
              </h2>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed font-medium max-w-2xl" data-testid="text-award-description">
              At Willamette Valley Bank, we go further for our customers, our employees, and our communities. Our mission is to serve everyone with personalized care and outstanding service.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}