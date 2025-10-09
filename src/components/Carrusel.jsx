// src/components/Carrusel.jsx
import React, {useEffect, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import Zoom from 'react-medium-image-zoom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-medium-image-zoom/dist/styles.css';
import './carousel-overrides.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function Carrusel({ imgs = [], slides }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mql = typeof window !== 'undefined' && window.matchMedia?.('(max-width: 768px)');
    const onChange = e => setIsMobile(!!e.matches);
    if (mql) { onChange(mql); mql.addEventListener?.('change', onChange); }
    return () => mql && mql.removeEventListener?.('change', onChange);
  }, []);

  // Permite strings (imgs) o objetos ({src, alt, caption})
  const items = (slides && slides.length ? slides : imgs.map(src => ({ src })))
    .map(it => ({ ...it, src: useBaseUrl(it.src.startsWith('/') ? it.src : `/${it.src}`) }));

  if (!items.length) return <div style={{opacity:.7}}>Sin imágenes</div>;

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
      ariaLabel="Carrusel de capturas"
    >
      {items.map((it, i) => {
        const imgEl = (
          <img
            src={it.src}
            alt={it.alt || `Imagen ${i + 1}`}
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchpriority={i === 0 ? 'high' : 'auto'}
            decoding="async"
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
            key={i}
            className="ht-slide"
            style={{
              padding: '1rem',
              backgroundColor: 'var(--ifm-color-emphasis-100)',
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {isMobile ? imgEl : <Zoom>{imgEl}</Zoom>}
            {it.caption && <p className="legend">{it.caption}</p>}
          </div>
        );
      })}
    </Carousel>
  );
}
