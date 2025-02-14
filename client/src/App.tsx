import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Services from "@/pages/Services";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Quote from "@/pages/Quote";
import { useEffect, useState } from "react";
import LoadingScreen from "./components/ui/LoadingScreen";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/quote" component={Quote} />
      <Route component={NotFound} />
    </Switch>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2023 Wayamoja. All rights reserved.</p>
    </footer>
  );
}


function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen />}
      <QueryClientProvider client={queryClient}>
        <Router />
        <Toaster />
        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;