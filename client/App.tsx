import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Layout from "@/components/site/Layout";
import Brands from "./pages/Brands";
import About from "./pages/About";
import Services from "./pages/Services";
import Calculator from "./pages/Calculator";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import ProductListing from "./pages/ProductListing";
import PhotoEditing from "./pages/PhotoEditing";
import VideoEditing from "./pages/VideoEditing";
import KeywordOptimization from "./pages/KeywordOptimization";
import AplusContent from "./pages/AplusContent";
import PPCTraining from "./pages/PPCTraining";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            {/* Individual Service Pages */}
            <Route path="/services/product-listing" element={<ProductListing />} />
            <Route path="/services/photo-editing" element={<PhotoEditing />} />
            <Route path="/services/video-editing" element={<VideoEditing />} />
            <Route path="/services/keyword-optimization" element={<KeywordOptimization />} />
            <Route path="/services/aplus-content" element={<AplusContent />} />
            <Route path="/services/ppc-training" element={<PPCTraining />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
