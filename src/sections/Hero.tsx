import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: '/images/hero-1.jpg',
    title: '-15% на корма для питомцев',
    subtitle: 'Радуйте своих пушистых друзей вкусными и полезными кормами по суперцене!',
    bgColor: 'bg-[#FAEF23]'
  },
  {
    id: 2,
    image: '/images/hero-2.jpg',
    title: '-20% на туалеты для кошек',
    subtitle: 'Успейте обновить кошачий туалет с выгодой!',
    bgColor: 'bg-[#EE5A36]'
  },
  {
    id: 3,
    image: '/images/hero-3.jpg',
    title: 'Новая коллекция игрушек',
    subtitle: 'Захватывающие развлечения для ваших четвероногих друзей!',
    bgColor: 'bg-[#FAEF23]'
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 600);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative pt-[128px] lg:pt-[144px] overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[480px] lg:h-[520px]">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-xl ml-8 md:ml-12 lg:ml-16">
                  <div
                    className={`transition-all duration-500 delay-100 ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight drop-shadow-lg">
                      {slide.title}
                    </h1>
                  </div>
                  <div
                    className={`transition-all duration-500 delay-200 ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <p className="text-base md:text-lg text-white/90 mb-8 leading-relaxed drop-shadow">
                      {slide.subtitle}
                    </p>
                  </div>
                  <div
                    className={`transition-all duration-500 delay-300 ${
                      index === currentSlide
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                  >
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FAEF23] text-[#212121] font-bold rounded-full hover:bg-[#e8de20] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
                    >
                      Подробнее
                      <ChevronRight size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-[#FAEF23] rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          >
            <ChevronLeft size={24} className="text-[#212121]" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 hover:bg-[#FAEF23] rounded-full flex items-center justify-center transition-all duration-200 shadow-lg hover:scale-110"
          >
            <ChevronRight size={24} className="text-[#212121]" />
          </button>

          {/* Pagination dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentSlide
                    ? 'w-8 h-3 bg-[#FAEF23]'
                    : 'w-3 h-3 bg-white/60 hover:bg-white'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
