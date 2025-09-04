export default function ScamAlertBanner() {
  return (
    <div className="scam-alert py-3 px-4" data-testid="scam-alert-banner">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm font-medium text-white">
          <strong>Scam alert:</strong> Please protect yourself against fraud. Customers are reporting receiving calls from fraudsters claiming to be bank employees.
          <a 
            href="https://www.willamettevalleybank.com/scam-alert" 
            className="underline ml-2 hover:no-underline"
            data-testid="link-scam-alert-learn-more"
          >
            Learn More
          </a>
        </p>
      </div>
    </div>
  );
}
