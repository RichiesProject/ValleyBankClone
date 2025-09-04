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
            src="data:image/jpeg;base64,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"
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