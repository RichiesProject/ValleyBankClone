export default function FeaturesSection() {
  const features = [
    {
      title: "Convenient",
      description: "Fall in love with our digital banking options. From mobile to online services, we have choices that go with you.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4682ce3e6238b171d64_AdobeStock_555122175.webp",
      alt: "a man and a woman standing in a room filled with boxes"
    },
    {
      title: "Local",
      description: "Being there is important. That's why we have home loan centers where our customers need them most.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4673d186da199502445_AdobeStock_341134694.webp",
      alt: "a living room filled with furniture and a fire place"
    },
    {
      title: "Giving Back",
      description: "We live in the best places. That's why we love being out in our communities, giving back whenever we can.",
      image: "https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/653ee4670c6cbb7e6146527b_AdobeStock_418984784.webp",
      alt: "a group of people standing around a wooden table"
    }
  ];

  return (
    <section className="bg-white py-16" data-testid="features-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-6 hover-lift" data-testid={`card-feature-${index}`}>
              <img 
                src={feature.image} 
                alt={feature.alt} 
                className="w-full h-48 object-cover rounded-lg shadow-md"
                data-testid={`img-feature-${index}`}
              />
              <h3 className="text-xl font-bold text-primary" data-testid={`text-feature-title-${index}`}>
                {feature.title}
              </h3>
              <p className="text-gray-600" data-testid={`text-feature-description-${index}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
