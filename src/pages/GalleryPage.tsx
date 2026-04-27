import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";
import PhotoGallery, { type GalleryImage } from "@/components/PhotoGallery";
import gallery1 from "@/assets/gallery-1.jpeg";
import gallery2 from "@/assets/gallery-2.jpeg";
import gallery3 from "@/assets/gallery-3.jpeg";
import gallery4 from "@/assets/gallery-4.jpeg";
import gallery5 from "@/assets/gallery-5.jpeg";
import gallery6 from "@/assets/gallery-6.jpeg";
import gallery7 from "@/assets/gallery-7.jpeg";
import gallery8 from "@/assets/gallery-8.jpeg";
import gallery9 from "@/assets/gallery-9.jpeg";
import gallery10 from "@/assets/gallery-10.jpeg";
import gallery11 from "@/assets/gallery-11.jpeg";
import gallery12 from "@/assets/gallery-12.jpeg";
import gallery13 from "@/assets/gallery-13.jpeg";
import gallery14 from "@/assets/gallery-14.jpeg";
import gallery15 from "@/assets/gallery-15.jpeg";

const galleryImages: GalleryImage[] = [
  { src: gallery1, alt: "Нарезанный стейк из тунца со свежим лимоном" },
  { src: gallery2, alt: "Сомелье представляет бутылку итальянского вина" },
  { src: gallery3, alt: "Паста с морепродуктами и Пино Гриджио" },
  { src: gallery4, alt: "Осьминог на гриле с чёрным ризотто и оливками" },
  { src: gallery5, alt: "Тальятелле с морепродуктами и белым вином" },
  { src: gallery6, alt: "Гость наслаждается пастой с морепродуктами" },
  { src: gallery7, alt: "Паста с морепродуктами и розовым вином" },
  { src: gallery8, alt: "Крупный план пасты с осьминогом и мидиями" },
  { src: gallery9, alt: "Сервировка стола с пастой из морепродуктов" },
  { src: gallery10, alt: "Блюдо с морепродуктами и розовым вином" },
  { src: gallery11, alt: "Осьминог на гриле с чёрным ризотто, оливками и белым вином" },
  { src: gallery12, alt: "Пара поднимает бокалы с красным и белым вином" },
  { src: gallery13, alt: "Осьминог на ризотто с чернилами каракатицы и корзиной хлеба" },
  { src: gallery14, alt: "Шеф выжимает свежий лимон на стейк из тунца" },
  { src: gallery15, alt: "Крупный план щупальца осьминога на чёрном ризотто" },
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
