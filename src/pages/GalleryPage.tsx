import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PhotoGallery, { type GalleryImage } from "@/components/PhotoGallery";
import gallery1 from "@/assets/gallery-1.webp";
import gallery2 from "@/assets/gallery-2.webp";
import gallery3 from "@/assets/gallery-3.webp";
import gallery4 from "@/assets/gallery-4.webp";
import gallery5 from "@/assets/gallery-5.webp";
import gallery6 from "@/assets/gallery-6.webp";
import gallery7 from "@/assets/gallery-7.webp";
import gallery8 from "@/assets/gallery-8.webp";
import gallery9 from "@/assets/gallery-9.webp";
import gallery10 from "@/assets/gallery-10.webp";
import gallery11 from "@/assets/gallery-11.webp";
import gallery12 from "@/assets/gallery-12.webp";
import gallery13 from "@/assets/gallery-13.webp";
import gallery14 from "@/assets/gallery-14.webp";

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: "Sliced tuna steak with fresh lemon" },
  { src: gallery2, alt: "Sommelier presenting a bottle of Italian wine" },
  { src: gallery3, alt: "Seafood pasta with Pinot Grigio" },
  { src: gallery4, alt: "Grilled octopus on black risotto with olives" },
  { src: gallery5, alt: "Plated seafood tagliatelle with white wine" },
  { src: gallery6, alt: "Guest enjoying seafood pasta" },
  { src: gallery7, alt: "Seafood pasta with rosé wine" },
  { src: gallery8, alt: "Close-up of octopus and mussel pasta" },
  { src: gallery9, alt: "Restaurant table setting with seafood pasta" },
  { src: gallery10, alt: "Plated frutti di mare with rosé" },
  { src: gallery11, alt: "Grilled octopus on black risotto with olives and white wine" },
  { src: gallery12, alt: "Couple toasting with red and white wine at the table" },
  { src: gallery13, alt: "Octopus on squid ink risotto with bread basket" },
  { src: gallery14, alt: "Chef squeezing fresh lemon over seared tuna steak" },
];

export default function GalleryPage() {
  const { t } = useTranslation();

  return (
    <>
      <SEO
        title={`${t("home.gallery.title")} — ${t("home.hero.title")}`.slice(0, 60)}
        description={t("home.gallery.subtitle")}
      />
      <section className="relative bg-secondary py-20">
        <div className="container">
          <div className="text-center">
            <div className="mx-auto mb-4 h-px w-12 bg-primary" />
            <h1 className="font-display text-4xl md:text-5xl font-bold text-secondary-foreground">
              {t("home.gallery.title")}
            </h1>
            <p className="mt-4 font-body text-lg text-secondary-foreground/70 max-w-2xl mx-auto">
              {t("home.gallery.subtitle")}
            </p>
            <div className="mt-4 h-px w-12 mx-auto bg-primary" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <PhotoGallery images={galleryImages} />
        </div>
      </section>
    </>
  );
}
