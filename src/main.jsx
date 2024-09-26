import { createRoot } from "react-dom/client";
import { App } from "./components/app/App.jsx";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement);

// компонент верстки карточки товара
root.render(<App title="Рестораны"/>);
