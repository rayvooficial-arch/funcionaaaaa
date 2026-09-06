import React from "react";
import videoFile from "../assets/images/video.mp4";

export const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8 tracking-tight">
          Veja como funciona na <span className="text-[var(--color-primary)]">prática</span>
        </h2>
        
        <div className="relative mx-auto rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 border-8 border-white flex items-center justify-center max-w-[fit-content]">
          <video 
            src={videoFile}
            controls
            playsInline
            preload="metadata"
            className="w-full h-auto max-h-[75vh] object-contain rounded-2xl"
          >
            Seu navegador não suporta a tag de vídeo.
          </video>
        </div>
      </div>
    </section>
  );
};

