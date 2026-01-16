import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { lazy, Suspense } from "react";

// Lazy load non-critical pages
const Method = lazy(() => import("./pages/Method"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Contact = lazy(() => import("./pages/Contact"));
const Confirmation = lazy(() => import("./pages/Confirmation"));
const Legal = lazy(() => import("./pages/Legal"));
const Results = lazy(() => import("./pages/Results"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const Insights = lazy(() => import("./pages/Insights"));
const InsightDetail = lazy(() => import("./pages/InsightDetail"));
const ContentCalendar = lazy(() => import("./pages/ContentCalendar"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-white">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#CCFF00]"></div>
      <p className="mt-4 text-gray-600">Chargement...</p>
    </div>
  </div>
);

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/method"} component={() => <Suspense fallback={<LoadingFallback />}><Method /></Suspense>} />
      <Route path={"/about"} component={() => <Suspense fallback={<LoadingFallback />}><About /></Suspense>} />
      <Route path={"/services"} component={() => <Suspense fallback={<LoadingFallback />}><Services /></Suspense>} />
      <Route path={"/contact"} component={() => <Suspense fallback={<LoadingFallback />}><Contact /></Suspense>} />
      <Route path="/confirmation" component={() => <Suspense fallback={<LoadingFallback />}><Confirmation /></Suspense>} />
      <Route path="/legal" component={() => <Suspense fallback={<LoadingFallback />}><Legal /></Suspense>} />
      <Route path={"/results"} component={() => <Suspense fallback={<LoadingFallback />}><Results /></Suspense>} />
      <Route path={"/blog"} component={() => <Suspense fallback={<LoadingFallback />}><Blog /></Suspense>} />
      <Route path={"/blog/:id"} component={() => <Suspense fallback={<LoadingFallback />}><BlogPost /></Suspense>} />
      <Route path={"/case-studies"} component={() => <Suspense fallback={<LoadingFallback />}><CaseStudies /></Suspense>} />
      <Route path={"/insights"} component={() => <Suspense fallback={<LoadingFallback />}><Insights /></Suspense>} />
      <Route path={"/insights/:id"} component={() => <Suspense fallback={<LoadingFallback />}><InsightDetail /></Suspense>} />
      <Route path={"/content-calendar"} component={() => <Suspense fallback={<LoadingFallback />}><ContentCalendar /></Suspense>} />
      <Route path={"/portfolio"} component={() => <Suspense fallback={<LoadingFallback />}><Portfolio /></Suspense>} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
