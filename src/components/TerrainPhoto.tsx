import { Dialog, DialogContent, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";

const terrainPhotos = [
  { number: "01", alt: "Vista abierta del terreno y la vegetación del predio" },
  { number: "02", alt: "Árbol junto al camino y terreno en preparación" },
  { number: "03", alt: "Vista panorámica de los trabajos de preparación del suelo" },
  { number: "04", alt: "Maquinaria sobre el terreno trabajado del complejo" },
  { number: "05", alt: "Retroexcavadora trabajando en la preparación del predio" },
  { number: "06", alt: "Terreno en preparación con maquinaria al fondo" },
  { number: "07", alt: "Vegetación y vista del entorno del predio" },
];

export function TerrainPhoto({ index, className = "", caption }: { index: number; className?: string; caption?: string }) {
  const photo = terrainPhotos[index];
  const src = `/images/avances/terreno-${photo.number}.webp`;
  return (
    <figure className={`terrain-photo ${className}`}>
      <Dialog>
        <DialogTrigger asChild>
          <button type="button" className="terrain-photo-button" aria-label={`Ampliar foto: ${photo.alt}`}>
            <img src={src} srcSet={`/images/avances/terreno-${photo.number}-720.webp 720w, ${src} 1600w`} sizes="(max-width: 767px) 100vw, (max-width: 1199px) 50vw, 800px" alt={photo.alt} loading="lazy" decoding="async" width="1600" height="737" />
            <span className="photo-expand" aria-hidden="true">↗</span>
          </button>
        </DialogTrigger>
        <DialogContent className="terrain-lightbox" overlayClassName="terrain-photo-overlay">
          <DialogTitle className="sr-only">{photo.alt}</DialogTitle>
          <img src={src} alt={photo.alt} width="1600" height="737" />
          <DialogDescription className="photo-description">{photo.alt}</DialogDescription>
        </DialogContent>
      </Dialog>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
