import { ArrowRight } from 'lucide-react';

export default function CareersSection() {
  return (
    <section className="bank-primary text-white py-16" data-testid="careers-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="text-sm font-medium" data-testid="text-careers-subtitle">
            Join our team
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold font-serif" data-testid="text-careers-title">
            We're Expanding Our Family
          </h2>
          <p className="text-lg text-gray-200" data-testid="text-careers-description">
            Career opportunities at Willamette Valley Bank
          </p>
          <a 
            href="https://www.willamettevalleybank.com/careers"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
            data-testid="button-browse-careers"
          >
            <span>Browse Careers</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
