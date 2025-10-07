import React, {useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-medium-image-zoom/dist/styles.css';
// 👇 importa los overrides DESPUÉS del CSS de la lib
import './carousel-overrides.css';

// 👇 clave para que /img/... funcione con cualquier baseUrl
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Carrusel({ imgs = [] }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia?.('(max-width: 768px)');
    const onChange = e => setIsMobile(!!e.matches);
    if (mql) {
      onChange(mql);
      mql.addEventListener?.('change', onChange);
      return () => mql.removeEventListener?.('change', onChange);
    }
  }, []);

  // Normalizamos rutas: aceptamos 'img/...' o '/img/...'
  const items = imgs.map(p =>
    p.startsWith('/') ? p : `/${p}`
  );

  return (
    <Carousel
      className="ht-carousel"
      showThumbs={false}
      showStatus={false}
      showArrows
      infiniteLoop
      autoPlay
      interval={5000}
      stopOnHover
      swipeable
      emulateTouch
    >
      {items.map((p, idx) => {
        const resolved = useBaseUrl(p); // ← la magia para baseUrl
        const ImgTag = (
          <img
            src={resolved}
            alt={`Imagen ${idx + 1}`}
            loading="lazy"
            style={{
              borderRadius: 8,
              maxHeight: 450,
              width: '100%',
              objectFit: 'contain',
              boxShadow: '0 0 0 2px rgba(0,0,0,0.08)',
            }}
          />
        );
        return (
          <div
            key={idx}
            style={{
              padding: '1rem',
              backgroundColor: 'var(--ifm-color-emphasis-100)',
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {isMobile ? ImgTag : <Zoom>{ImgTag}</Zoom>}
          </div>
        );
      })}
    </Carousel>
  );
}
