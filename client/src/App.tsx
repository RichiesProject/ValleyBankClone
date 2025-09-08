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
import LiveChatWidget from "@/components/live-chat-widget";

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
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
