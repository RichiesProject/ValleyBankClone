export default function FeaturesSection() {
  const features = [
    {
      title: "Convenient",
      description: "Fall in love with our digital banking options. From mobile to online services, we have choices that go with you.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp",
      alt: "Family enjoying time together",
      hasOverlay: true
    },
    {
      title: "Local",
      description: "Being there is important. That's why we have home loan centers where our customers need them most.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4682ce3e6238b171d64_AdobeStock_555122175.webp",
      alt: "Couple in their new home",
      hasOverlay: false
    },
    {
      title: "Modern Living",
      description: "Beautiful spaces for modern families. Creating the perfect environment for your home and lifestyle.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4673d186da199502445_AdobeStock_341134694.webp",
      alt: "Modern living room interior",
      hasOverlay: false
    }
  ];

  return (
    <section className="bg-white py-16" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer float-on-hover" data-testid={`card-feature-${index}`}>
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={feature.image} 
                  alt={feature.alt} 
                  className="w-full h-96 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-feature-${index}`}
                />
                {feature.hasOverlay && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-6">
                    <div className="bg-white text-center py-2 px-4 rounded mb-4">
                      <h3 className="text-lg font-semibold text-gray-800" data-testid={`text-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                )}
              </div>
              {!feature.hasOverlay && (
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-bold text-primary mb-3" data-testid={`text-feature-title-${index}`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-600" data-testid={`text-feature-description-${index}`}>
                    {feature.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
