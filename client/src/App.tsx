import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useAuth } from "@/hooks/useAuth";
import Home from "@/pages/home";
import Login from "@/pages/login";
import Dashboard from "@/pages/dashboard";
import NotFound from "@/pages/not-found";
import PersonalChecking from "@/pages/personal-checking";
import PersonalSavings from "@/pages/personal-savings";
import PersonalBanking from "@/pages/personal-banking";
import PersonalCreditCards from "@/pages/personal-credit-cards";
import HomeLoans from "@/pages/home-loans";
import HomeLoanCenters from "@/pages/home-loan-centers";
import HomeLoanQuestions from "@/pages/home-loan-questions";
import BusinessChecking from "@/pages/business-checking";
import BusinessSavings from "@/pages/business-savings";
import BusinessCreditCards from "@/pages/business-credit-cards";
import BusinessLoans from "@/pages/business-loans";
import CommercialLenders from "@/pages/commercial-lenders";
import CommercialLenderCenters from "@/pages/commercial-lender-centers";
import LiveChatWidget from "@/components/live-chat-widget";
import PrivacyConsent from "@/components/privacy-consent";

function Router() {
  const { isAuthenticated, isLoading } = useAuth();
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <img 
            src="https://cdn.prod.website-files.com/652866cb9396994a56ed17f2/66b9d07c37f26e549c64b2aa_66b64d085e84150bd3a56016_IMG_4636.jpg"
            alt="Willamette Valley Bank"
            className="h-16 mx-auto mb-4"
          />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }
  
  if (!isAuthenticated) {
    return (
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Home} />
        <Route path="/personal-checking" component={PersonalChecking} />
        <Route path="/personal-savings" component={PersonalSavings} />
        <Route path="/personal-banking" component={PersonalBanking} />
        <Route path="/personal-credit-cards" component={PersonalCreditCards} />
        <Route path="/home-loans" component={HomeLoans} />
        <Route path="/home-loan-centers" component={HomeLoanCenters} />
        <Route path="/home-loan-questions" component={HomeLoanQuestions} />
        <Route path="/business-checking" component={BusinessChecking} />
        <Route path="/business-savings" component={BusinessSavings} />
        <Route path="/business-credit-cards" component={BusinessCreditCards} />
        <Route path="/business-loans" component={BusinessLoans} />
        <Route path="/commercial-lenders" component={CommercialLenders} />
        <Route path="/commercial-lender-centers" component={CommercialLenderCenters} />
        <Route component={NotFound} />
      </Switch>
    );
  }
  
  // Authenticated routes
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/" component={Dashboard} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
        <LiveChatWidget />
        <PrivacyConsent />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
