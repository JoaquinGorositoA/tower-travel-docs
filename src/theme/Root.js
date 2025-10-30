import React, { useEffect } from "react";
import { useLocation } from "@docusaurus/router";

export default function Root({ children }) {
  const location = useLocation();

  useEffect(() => {
    console.log("✅ Root.js montado en:", location.pathname);

    // Reintenta varias veces hasta encontrar los videos
    let attempts = 0;
    const tryPlayVideos = () => {
      const videos = document.querySelectorAll("video[autoplay]");
      if (videos.length > 0) {
        console.log("🎥 Videos encontrados:", videos.length);
        videos.forEach((v, i) => {
          try {
            v.muted = true;
            v.play()
              .then(() => console.log(`▶️ Video ${i + 1} en reproducción`))
              .catch((err) => console.warn(`⚠️ No se pudo reproducir video ${i + 1}:`, err));
          } catch (err) {
            console.warn(`🚫 Error en video ${i + 1}:`, err);
          }
        });
      } else if (attempts < 10) {
        attempts++;
        setTimeout(tryPlayVideos, 300); // vuelve a intentar cada 300ms
      } else {
        console.warn("❌ No se detectaron videos con autoplay después de varios intentos.");
      }
    };

    tryPlayVideos();
  }, [location.pathname]);

  return <>{children}</>;
}
