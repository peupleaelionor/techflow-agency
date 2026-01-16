import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Method from "./pages/Method";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Confirmation from "./pages/Confirmation";
import Legal from "./pages/Legal";
import Results from "./pages/Results";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import CaseStudies from "./pages/CaseStudies";
import Insights from "./pages/Insights";
import InsightDetail from "./pages/InsightDetail";
import ContentCalendar from "./pages/ContentCalendar";
import Portfolio from "./pages/Portfolio";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/method"} component={Method} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/contact"} component={Contact} />
      <Route path="/confirmation" component={Confirmation} />
      <Route path="/legal" component={Legal} />
      <Route path={"/results"} component={Results} />
      <Route path={"/blog"} component={Blog} />
      <Route path={"/blog/:id"} component={BlogPost} />
      <Route path={"/case-studies"} component={CaseStudies} />
      <Route path={"/insights"} component={Insights} />
      <Route path={"/insights/:id"} component={InsightDetail} />
      <Route path={"/content-calendar"} component={ContentCalendar} />
      <Route path={"/portfolio"} component={Portfolio} />
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
