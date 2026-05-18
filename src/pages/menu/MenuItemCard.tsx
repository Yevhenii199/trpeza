import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
// IMPORT LIGHTBOX STYLES IS MANDATORY
import "yet-another-react-lightbox/styles.css";

import { SupportedLanguage } from "@/i18n";
import { formatPrice } from "./utils";
// We use the specific path as before
import { MenuItem } from "@/data/menuData";

interface MenuItemCardProps {
  item: MenuItem;
  currentLang: SupportedLanguage;
}

export default function MenuItemCard({ item, currentLang }: MenuItemCardProps) {
  // 1. Management of the opening state
  const [isOpen, setIsOpen] = useState(false);

  // Still check for photo existence to determine if text is clickable
  const hasPhoto = item.imageUrl && item.imageUrl !== "/placeholder.svg";

  // Cursor styles: text is only clickable if there is a photo
  const clickActionClass = hasPhoto ? "cursor-pointer group-hover:text-primary transition-colors" : "";

  return (
    <>
      <div className="group relative overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 hover:shadow-xl hover:border-primary/30 flex flex-col h-full">
        
        {/* --- MODIFICATION STARTS HERE --- */}
        {/* The section that rendered the image on the card has been completely removed */}
        {/* --- MODIFICATION ENDS HERE --- */}

        {/* Text content of the card */}
        <div className="p-6 flex flex-col justify-between flex-1 relative">
          <div className="flex justify-between items-start gap-4 mb-4">
            <div className="flex-1">
              
              {/* 2. Added click handler to the TITLE */}
              <h3 
                className={`font-display text-xl font-semibold text-card-foreground ${clickActionClass}`}
                onClick={hasPhoto ? () => setIsOpen(true) : undefined}
                role={hasPhoto ? "button" : undefined}
                aria-label={hasPhoto ? `Open photo of ${item.name[currentLang]}` : undefined}
              >
                {item.name[currentLang]}
              </h3>

              {/* 3. Added click handler to the DESCRIPTION */}
              <p 
                className={`mt-2 font-body text-sm text-muted-foreground leading-relaxed ${clickActionClass}`}
                onClick={hasPhoto ? () => setIsOpen(true) : undefined}
                role={hasPhoto ? "button" : undefined}
                aria-label={hasPhoto ? `Open photo of ${item.name[currentLang]}` : undefined}
              >
                {item.description[currentLang]}
              </p>
            </div>
            
            <div className="shrink-0">
              <span className="font-display text-lg font-semibold text-primary">
                {formatPrice(item.price)}
              </span>
            </div>
          </div>

          {/* Animated gold bar on hover */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full" />
        </div>
      </div>

      {/* 4. The Lightbox itself - Now the sole place the photo is visible */}
      {hasPhoto && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          // Pass the array with the slide (in our case - a single slide)
          slides={[{ 
            src: item.imageUrl, 
            alt: item.name[currentLang],
            // Optional: you can add captions
            title: item.name[currentLang],
            description: item.description[currentLang]
          }]}
          // Enable built-in plugins if needed (e.g., Zoom)
          // plugins={[Zoom]}
        />
      )}
    </>
  );
}