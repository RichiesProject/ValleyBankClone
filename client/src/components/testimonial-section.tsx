import { Quote } from 'lucide-react';

export default function TestimonialSection() {
  return (
    <section className="hero-gradient text-white py-16 lg:py-24" data-testid="testimonial-section">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white bg-opacity-20 rounded-lg mb-8">
            <Quote className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <h2 className="text-4xl lg:text-5xl font-light leading-tight mb-6" data-testid="text-testimonial-heading">
          Community banking<br />is in our DNA
        </h2>
        
        <p className="text-lg lg:text-xl text-gray-200 mb-12 max-w-3xl mx-auto" data-testid="text-testimonial-description">
          Willamette Valley Bank is made up of people who live and work in the communities we serve.
        </p>
        
        <div className="flex flex-col items-center">
          <img 
            src="/attached_assets/Screenshot 2025-09-04 at 7.25.42 PM_1757030097098.png"
            alt="Ryan Dempster, President & CEO" 
            className="w-16 h-16 rounded-full object-cover mb-4"
            data-testid="img-ceo-profile"
          />
          <div className="text-center">
            <h3 className="text-lg font-semibold text-white" data-testid="text-ceo-name">
              Ryan Dempster
            </h3>
            <p className="text-gray-300" data-testid="text-ceo-title">
              President, CEO
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}