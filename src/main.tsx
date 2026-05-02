import { createRoot } from "react-dom/client";
import { inject } from "@vercel/analytics"; // Добавь этот импорт
import App from "./App.tsx";
import "./i18n";
import "./index.css";

// Активация аналитики Vercel
inject(); 

createRoot(document.getElementById("root")!).render(<App />);
