import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import VideoModal from "./VideoModal";

import "swiper/css";
import "swiper/css/navigation";

const Videos = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  // Source videos
  const videoNumbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const videos = videoNumbers.map((num) => `/media/${num}.mp4`);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-pearl to-white">
      <div className="relative max-w-7xl mx-auto">
        {/* Navigation buttons */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3  bg-white/90 hover:bg-white shadow-lg cursor-pointer"
          onClick={() => document.querySelector(".swiper")?.swiper.slidePrev()}
        >
          <ChevronLeft className="w-6 h-6 text-grass" />
        </button>

        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 hover:bg-white shadow-lg cursor-pointer"
          onClick={() => document.querySelector(".swiper")?.swiper.slideNext()}
        >
          <ChevronRight className="w-6 h-6 text-grass" />
        </button>

        <Swiper
          modules={[Navigation]}
          centeredSlides
          slidesPerView={5}
          spaceBetween={24}
          loop
          speed={600}
          onSlideChange={handleSlideChange}
          breakpoints={{
            0: { slidesPerView: 1.3 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
        >
          {videos.map((video, index) => {
            const isActive = index === activeIndex;

            return (
              <SwiperSlide key={video}>
                <div
                  className={`relative aspect-[9/16] overflow-hidden shadow-lg transition-all duration-300 cursor-pointer ${
                    isActive ? "scale-100" : "scale-90 opacity-80"
                  }`}
                  onClick={() => setSelectedVideo(video)}
                >
                  {isActive ? (
                    <video
                      src={video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="w-full h-full object-cover z-10"
                    />
                  ) : null}
                  <img
                    src={`${video.replace(".mp4", ".png")}`}
                    alt=""
                    className="w-full h-full object-cover z-0"
                    loading="lazy"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-center justify-center">
                    <div className="w-14 h-14 bg-white/40 flex items-center justify-center">
                      <Play
                        className="w-7 h-7 text-grass ml-1"
                        fill="currentColor"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Modal video playback */}
      <VideoModal
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo?.replace("/compressed", "") || ""}
      />
    </section>
  );
};

export default Videos;
