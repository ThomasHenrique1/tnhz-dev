// components/project/ProjectGallery.tsx
'use client';

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Maximize2 } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedIndex(null);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (images.length === 0) return null;

  return (
    <>
      {/* Grid de imagens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {images.map((image, index) => (
          <div 
            key={index}
            className="group relative rounded-xl overflow-hidden border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative h-64 w-full">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-4 h-4" />
              </div>
            </div>
            {image.caption && (
              <div className="p-4 bg-card/50 backdrop-blur-sm">
                <p className="text-sm text-muted-foreground">{image.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-300">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-4 p-3 rounded-full bg-background/20 hover:bg-background/40 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 p-3 rounded-full bg-background/20 hover:bg-background/40 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh] mx-4">
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
            {(images[currentIndex].caption || images.length > 1) && (
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <div className="flex items-center justify-between">
                  <p className="text-white text-lg">
                    {images[currentIndex].caption}
                  </p>
                  <p className="text-white/60">
                    {currentIndex + 1} / {images.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}