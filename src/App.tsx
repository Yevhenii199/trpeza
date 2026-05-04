import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Analytics } from "@vercel/analytics/react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { supportedLanguages, type SupportedLanguage } from "@/i18n";
import MainLayout from "@/layouts/MainLayout";
import Index from "@/pages/Index";

// Code-split non-critical routes (not part of LCP / initial fold)
const GalleryPage = lazy(() => import("@/pages/GalleryPage"));
const MenuPage = lazy(() => import("@/pages/MenuPage"));
const WineListPage = lazy(() => import("@/pages/WineListPage"));
const AboutPage = lazy(() => import("@/pages/AboutPage"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const queryClient = new QueryClient();

function LangGuard({ children }: { children: React.ReactNode }) {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && supportedLanguages.includes(lang as SupportedLanguage)) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  if (!lang || !supportedLanguages.includes(lang as SupportedLanguage)) {
    return <Navigate to="/en" replace />;
  }

  return <>{children}</>;
}

const RouteFallback = () => (
  <div className="min-h-[60vh] flex items-center justify-center" aria-busy="true" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Analytics />
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />
            <Route
              path="/:lang/*"
              element={
                <LangGuard>
                  <MainLayout />
                </LangGuard>
              }
            >
              <Route index element={<Index />} />
              <Route path="gallery" element={<GalleryPage />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="wine-list" element={<WineListPage />} />
              <Route path="about" element={<AboutPage />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
