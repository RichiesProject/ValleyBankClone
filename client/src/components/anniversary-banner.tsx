export default function AnniversaryBanner() {
  return (
    <div className="anniversary-banner py-2" data-testid="anniversary-banner">
      <div className="max-w-7xl mx-auto text-center">
        <img 
          src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/67d1faccda1c4e43dbff3d30_WVBK25Years_WebsiteHeader3.png" 
          alt="Willamette Valley Bank 25 Years" 
          className="h-12 mx-auto object-contain"
          data-testid="img-25th-anniversary"
        />
      </div>
    </div>
  );
}
