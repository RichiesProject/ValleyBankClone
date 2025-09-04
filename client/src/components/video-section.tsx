export default function VideoSection() {
  return (
    <section className="bg-white py-16 lg:py-24" data-testid="video-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4" data-testid="text-video-title">
            Experience Willamette Valley Bank
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" data-testid="text-video-description">
            See how we're making a difference in our communities
          </p>
        </div>
        
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="https://player.vimeo.com/video/966993891?h=0&autoplay=0&loop=0&color=ffffff&byline=0&portrait=0&title=0"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            data-testid="video-player"
            title="Willamette Valley Bank Experience"
          ></iframe>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500" data-testid="text-video-credit">
            <a 
              href="https://vimeo.com/966993891?fl=pl&fe=sh" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-opacity-80 transition-colors"
              data-testid="link-vimeo-original"
            >
              Watch on Vimeo
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}