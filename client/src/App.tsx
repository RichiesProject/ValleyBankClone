import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
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
  return (
    <Switch>
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
