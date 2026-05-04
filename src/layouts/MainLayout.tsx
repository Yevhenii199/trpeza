import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";
import AppHeader from "@/components/global/AppHeader";

// Footer is below the fold — defer its JS until the user scrolls near it (or after idle)
const AppFooter = lazy(() => import("@/components/global/AppFooter"));

export default function MainLayout() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    if (showFooter) return;

    // Fallback: load on idle so footer is ready even on short pages
    const idleId = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number })
      .requestIdleCallback?.(() => setShowFooter(true), { timeout: 3000 })
      ?? window.setTimeout(() => setShowFooter(true), 2000);

    const el = sentinelRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShowFooter(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px 0px" },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      const w = window as Window & { cancelIdleCallback?: (id: number) => void };
      if (w.cancelIdleCallback && typeof idleId === "number") {
        w.cancelIdleCallback(idleId);
      } else if (typeof idleId === "number") {
        window.clearTimeout(idleId);
      }
    };
  }, [showFooter]);

  return (
    <div className="min-h-screen flex flex-col">
      <AppHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <div ref={sentinelRef} aria-hidden="true" />
      {showFooter && (
        <Suspense fallback={null}>
          <AppFooter />
        </Suspense>
      )}
    </div>
  );
}
