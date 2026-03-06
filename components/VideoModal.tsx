import { X } from "lucide-react";
import { useEffect } from "react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 transition-colors z-50 cursor-pointer"
        aria-label="Close video"
      >
        <X className="w-6 h-6 text-white" />
      </button>

      <div
        className="relative w-full max-w-2xl mx-4 overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{ aspectRatio: "9/16" }}
      >
        <video
          src={videoUrl}
          controls
          autoPlay
          className="w-full h-full object-cover"
          controlsList="nodownload"
        />
      </div>
    </div>
  );
};

export default VideoModal;
