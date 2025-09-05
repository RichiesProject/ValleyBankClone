export default function FeaturesSection() {
  const features = [
    {
      title: "Convenient",
      description: "Fall in love with our digital banking options. From mobile to online services, we have choices that go with you.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp",
      alt: "Family enjoying time together"
    },
    {
      title: "Local", 
      description: "Being there is important. That's why we have home loan centers where our customers need them most.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4682ce3e6238b171d64_AdobeStock_555122175.webp",
      alt: "Couple in their new home"
    },
    {
      title: "Giving Back",
      description: "We live in the best places. That's why we love being out in our communities, giving back whenever we can.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4673d186da199502445_AdobeStock_341134694.webp",
      alt: "Modern living room interior"
    }
  ];

  return (
    <section className="bg-white py-16" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer transition-all duration-500 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl" data-testid={`card-feature-${index}`}>
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={feature.image} 
                  alt={feature.alt} 
                  className="w-full h-96 object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                  data-testid={`img-feature-${index}`}
                />
                
                {/* Always visible title bar at bottom */}
                <div className="absolute bottom-0 left-0 right-0">
                  <div className="bg-white text-center py-3 px-4 mx-4 mb-4 rounded shadow-md">
                    <h3 className="text-lg font-semibold text-gray-800" data-testid={`text-feature-title-${index}`}>
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* Hover overlay with description */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                  <div className="p-6 w-full">
                    <div className="bg-white text-center py-3 px-4 rounded shadow-md mb-4">
                      <h3 className="text-lg font-semibold text-gray-800" data-testid={`text-feature-title-hover-${index}`}>
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-white text-sm leading-relaxed transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500" data-testid={`text-feature-description-${index}`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
