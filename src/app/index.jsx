import { createRoot } from "react-dom/client";
import { CombinedProviders } from "./lib/CombinedProviders";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element must be in document!");
}

createRoot(root).render(<CombinedProviders />);
