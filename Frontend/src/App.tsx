import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Pricing from "@/pages/Pricing";
import Documentation from "@/pages/Documentation";

import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import LoadTest from "@/pages/LoadTest";
import LoadTestResult from "@/pages/LoadTestResult";
import Subscription from "@/pages/Subscription";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Landing} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/docs" component={Documentation} />
      {/* Protected Routes - Authentication check handled inside page components or wrapping layout */}
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/load-test" component={LoadTest} />
      <Route path="/load-test/:id" component={LoadTestResult} />
      <Route path="/subscription" component={Subscription} />

      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
