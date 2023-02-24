import { createRoot } from "react-dom/client";
import { App } from "./App";
import "./styles/reset.sass";

createRoot(document.getElementById("root") as HTMLElement).render(<App />);
