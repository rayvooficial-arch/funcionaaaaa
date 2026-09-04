import React, { useEffect, useRef, useState } from "react";
import { VolumeX } from "lucide-react";

export const MaterialShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Tenta dar play com o som ativado
            video.muted = false;
            const playPromise = video.play();
            
            if (playPromise !== undefined) {
              playPromise.catch((error) => {
                console.log("Autoplay com som bloqueado pelo navegador. Tentando sem som.", error);
                // Fallback: se o navegador bloquear (ex: usuário não interagiu com a página ainda),
                // toca o vídeo mudo para não ficar travado e exibe o botão para ligar o som.
                video.muted = true;
                setShowUnmuteOverlay(true);
                video.play().catch(() => {
                  console.log("Autoplay totalmente bloqueado.");
                });
              });
            }
          } else {
            // Pausa o vídeo quando sai da tela para economizar processamento e não deixar o som tocando
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Dispara quando 50% do vídeo aparecer na tela
      }
    );

    observer.observe(video);

    return () => {
      observer.unobserve(video);
    };
  }, []);

  const handleUnmute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play(); // Garante que continua tocando
      setShowUnmuteOverlay(false);
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight uppercase">
          Veja como é fácil <span className="text-[var(--color-primary)]">ensinar:</span>
        </h2>
        
        <div className="relative w-fit max-w-full mx-auto rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-50 bg-black flex items-center justify-center">
          <video 
            ref={videoRef}
            src="/grafismo.mp4"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
            controls={!showUnmuteOverlay}
            loop
            playsInline
          />
          
          {showUnmuteOverlay && (
            <div 
              className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer z-10 transition-opacity"
              onClick={handleUnmute}
            >
              <div className="bg-[var(--color-primary)] text-white px-6 py-4 rounded-full font-bold flex items-center gap-3 shadow-[0_0_40px_rgba(255,107,158,0.6)] animate-pulse scale-105 hover:scale-110 transition-transform">
                <VolumeX className="w-6 h-6" />
                <span className="text-lg">Toque para ouvir o som</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

