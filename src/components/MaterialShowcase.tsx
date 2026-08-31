import React, { useState, useRef } from "react";
import { Play, Pause, Volume2, VolumeX, RotateCcw, Sparkles, CheckCircle2 } from "lucide-react";
import thumbnailCaderno from "../assets/images/foto_caderno_mesa_1_1788142711511.jpg";

export const MaterialShowcase: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(48); // 48s duration matching demonstration
  const [videoSrc, setVideoSrc] = useState<string>("/grafismo.mp4");
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current && videoSrc) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(true);
        });
      }
    } else {
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleRestart = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current && videoSrc) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      setCurrentTime(0);
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current && videoRef.current.duration) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  return (
    <section id="por-dentro" className="py-12 sm:py-16 bg-[var(--color-bg-page)] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Solution Bridge with High-Impact Video Demonstration */}
        <div className="bg-[var(--color-bg-card)] p-5 sm:p-7 md:p-8 rounded-3xl border border-[var(--color-border)] shadow-xs max-w-3xl mx-auto relative">
          <div className="relative z-10">
            
            {/* Header */}
            <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--color-success-bg)] border border-[var(--color-success)]/20 text-[var(--color-success)] text-xs font-bold uppercase tracking-wider mb-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-success)] animate-pulse" />
                <span>VEJA NA PRÁTICA</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-extrabold text-[var(--color-text-title)] leading-snug">
                Veja como é fácil ensinar seu filho a ler com o Grafismo Fonético...
              </h3>

            </div>

            {/* Video Player Container */}
            <div className="relative max-w-md mx-auto rounded-2xl overflow-hidden bg-neutral-900 border border-[var(--color-border)]/60 shadow-lg group">
              
              <div 
                className="relative aspect-9/16 sm:aspect-4/5 md:aspect-9/16 max-h-[540px] w-full flex items-center justify-center bg-black cursor-pointer overflow-hidden"
                onClick={togglePlay}
              >
                {/* HTML5 Video Element */}
                {videoSrc ? (
                  <video
                    ref={videoRef}
                    src={videoSrc}
                    playsInline
                    muted={isMuted}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  /* Video Poster Frame preview when source not yet uploaded */
                  <div className="relative w-full h-full flex items-center justify-center">
                    <img
                      src={thumbnailCaderno}
                      alt="Demonstração do caderno de alfabetização em uso real"
                      className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? "scale-105" : "scale-100"}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40" />
                  </div>
                )}

                {/* Big Play/Pause Overlay Button */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all">
                    <button
                      onClick={togglePlay}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-2xl shadow-[var(--color-primary)]/50 hover:scale-110 active:scale-95 transition-all cursor-pointer group-hover:bg-[var(--color-primary-hover)]"
                      aria-label="Reproduzir vídeo demonstrativo"
                    >
                      <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-current translate-x-0.5" />
                    </button>
                    <span className="mt-4 px-4 py-1.5 rounded-full bg-white/90 text-neutral-900 text-xs sm:text-sm font-bold shadow-md">
                      Clique para dar play no vídeo
                    </span>
                  </div>
                )}

                {/* Top Video Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/15">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    Demonstração Real
                  </span>
                  
                  <button
                    onClick={toggleMute}
                    className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center border border-white/15 hover:bg-black/80 transition-all pointer-events-auto cursor-pointer"
                    aria-label={isMuted ? "Ativar som" : "Desativar som"}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                  </button>
                </div>

                {/* Bottom Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-black/90 via-black/50 to-transparent flex flex-col gap-2">
                  <div className="flex items-center justify-between text-white text-xs font-semibold">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          togglePlay();
                        }}
                        className="hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                        aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                      >
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                      </button>
                      <button
                        onClick={handleRestart}
                        className="hover:text-[var(--color-primary)] transition-colors cursor-pointer"
                        aria-label="Reiniciar vídeo"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                      </button>
                      <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                    </div>

                    <span className="text-[11px] text-white/80 flex items-center gap-1 font-medium">
                      <Sparkles className="w-3 h-3 text-[var(--color-accent)]" />
                      Método Fônico
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-[var(--color-primary)] h-full transition-all duration-150 rounded-full"
                      style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Sub-bar with Highlights */}
              <div className="p-3.5 bg-neutral-950/80 border-t border-white/10 text-white/90 text-xs">
                <div className="flex items-center justify-center gap-2 text-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-medium text-xs sm:text-sm">Aba interativa: a criança descobre a palavra sozinha</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
