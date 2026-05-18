import { Link, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { featuredDishes } from "@/data/menuData"; // Импортируем уже готовый массив
import type { SupportedLanguage } from "@/i18n";

function formatPrice(price: number) {
  return `${price.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })} EUR`;
}

export default function FeaturedDishes() {
  const { t } = useTranslation();
  const { lang } = useParams<{ lang?: string }>();
  const currentLang = (lang || "en") as SupportedLanguage;

  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        {/* Заголовок секции */}
        <div className="text-center mb-14">
          <div className="mx-auto mb-4 h-px w-12 bg-primary" />
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">
            {t("home.featured.title")}
          </h2>
          <p className="mt-3 font-body text-muted-foreground">
            {t("home.featured.subtitle")}
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish) => {
            // Проверяем, есть ли у блюда реальное фото (не плейсхолдер)
            const hasPhoto = dish.imageUrl && dish.imageUrl !== "/placeholder.svg";

            return (
              <div
                key={dish.id}
                className="group flex flex-col h-full overflow-hidden rounded-lg bg-card border border-border transition-all duration-300 hover:shadow-xl hover:border-primary/30"
              >
                {/* Область изображения или плейсхолдера */}
                <div className="aspect-[4/3] overflow-hidden shrink-0 bg-muted flex items-center justify-center">
                  {hasPhoto ? (
                    <img
                      src={dish.imageUrl}
                      alt={dish.name[currentLang]}
                      loading="lazy"
                      width={640}
                      height={480}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center px-6 text-center">
                      <span className="font-display text-xs uppercase tracking-widest text-muted-foreground/60">
                        {t("home.featured.no_photo")}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-display text-lg font-semibold text-card-foreground group-hover:text-primary transition-colors">
                      {dish.name[currentLang]}
                    </h3>
                    <span className="shrink-0 font-display text-base font-semibold text-primary">
                      {formatPrice(dish.price)}
                    </span>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {dish.description[currentLang]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Кнопка перехода в меню */}
        <div className="mt-12 text-center">
          <Link
            to={`/${currentLang}/menu`}
            className="inline-block rounded-sm bg-primary px-8 py-3.5 font-body text-sm uppercase tracking-[0.2em] text-primary-foreground transition-colors hover:bg-gold-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {t("home.hero.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
}