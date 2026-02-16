import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./app/App.tsx";
import { ArrivalGuide } from "./app/pages/ArrivalGuide.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/closdupatis/">
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/guide-arrivee" element={<ArrivalGuide />} />
    </Routes>
  </BrowserRouter>
);
  