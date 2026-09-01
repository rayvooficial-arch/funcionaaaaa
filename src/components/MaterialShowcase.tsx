import React, { useEffect, useRef } from "react";

export const MaterialShowcase: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

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
                // toca o vídeo mudo para não ficar travado.
                video.muted = true;
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

  return (
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-3xl md:text-4xl mb-10 font-bold text-slate-800 tracking-tight">
          COMO ENSINAR O SEU FILHO A LER <span className="text-[var(--color-primary)]">EM 3 DIAS:</span>
        </h2>
        
        <div className="relative w-fit max-w-full mx-auto rounded-[32px] overflow-hidden shadow-2xl border-4 border-slate-50 bg-black flex items-center justify-center">
          <video 
            ref={videoRef}
            src="/grafismo.mp4"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
            controls
            loop
            playsInline
          />
        </div>
      </div>
    </section>
  );
};

