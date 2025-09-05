export default function MobileAppSection() {
  return (
    <div className="bg-gray-50 py-6" data-testid="mobile-app-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-lg font-semibold text-primary mb-4" data-testid="text-mobile-app-title">
          Bank on the go with our Mobile App!
        </h3>
        <div className="flex justify-center space-x-4">
          <a 
            href="https://itunes.apple.com/us/app/willamette-valley-bank-mobile/id1133122347?mt=8" 
            className="float-on-hover"
            data-testid="link-app-store"
          >
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b67b49762b6b0f3ee71441_AppStoreBtn.png" 
              alt="Download From App Store" 
              className="h-12 w-auto"
              data-testid="img-app-store-button"
            />
          </a>
          <a 
            href="https://play.google.com/store/apps/details?id=com.willamettevalleybank.mobile&hl=en" 
            className="float-on-hover"
            data-testid="link-google-play"
          >
            <img 
              src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b67b498ebf423a6af7fbc6_GooglePlayBtn.png" 
              alt="Download From Google Play" 
              className="h-12 w-auto"
              data-testid="img-google-play-button"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
