import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ShoppingCart, Heart, Star } from 'lucide-react';

interface Product {
  id: number;
  image: string;
  badges: string[];
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  rating: number;
}

interface ProductsSectionProps {
  title: string;
  linkText: string;
  products: Product[];
}

export default function ProductsSection({ title, linkText, products }: ProductsSectionProps) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set());
  const [addedToCart, setAddedToCart] = useState<Set<number>>(new Set());
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      const newPosition = direction === 'left' 
        ? scrollPosition - scrollAmount 
        : scrollPosition + scrollAmount;
      sliderRef.current.scrollTo({ left: newPosition, behavior: 'smooth' });
      setScrollPosition(newPosition);
    }
  };

  const toggleLike = (productId: number) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  const addToCart = (productId: number) => {
    setAddedToCart(prev => new Set(prev).add(productId));
    setTimeout(() => {
      setAddedToCart(prev => {
        const newSet = new Set(prev);
        newSet.delete(productId);
        return newSet;
      });
    }, 1500);
  };

  const getBadgeStyle = (badge: string) => {
    if (badge.includes('%')) return 'bg-[#EE5A36] text-white';
    if (badge === 'Новинка') return 'bg-[#FAEF23] text-[#212121]';
    if (badge === 'Хит') return 'bg-[#22C55E] text-white';
    return 'bg-[#FAEF23] text-[#212121]';
  };

  return (
    <section className="py-10 lg:py-14">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-[32px] font-black text-[#212121]">
            {title}
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-semibold text-[#EE5A36] hover:text-[#212121] transition-colors duration-150"
          >
            {linkText}
            <ChevronRight size={16} />
          </a>
        </div>

        {/* Slider container */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 w-11 h-11 bg-white hover:bg-[#FAEF23] rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft size={22} className="text-[#212121]" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 w-11 h-11 bg-white hover:bg-[#FAEF23] rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-110"
          >
            <ChevronRight size={22} className="text-[#212121]" />
          </button>

          {/* Products slider */}
          <div
            ref={sliderRef}
            className="flex gap-4 lg:gap-5 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {products.map((product) => (
              <div
                key={product.id}
                className="flex-shrink-0 w-[260px] lg:w-[280px] bg-white rounded-2xl border border-[#E9E9E9] overflow-hidden group hover:shadow-[0_12px_24px_rgba(0,0,0,0.1)] hover:-translate-y-2 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-[200px] bg-[#F7F8FA] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    {product.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`px-2.5 py-1 rounded-lg text-xs font-bold ${getBadgeStyle(badge)} ${badge === 'Новинка' ? 'animate-pulse' : ''}`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  {/* Like button */}
                  <button
                    onClick={() => toggleLike(product.id)}
                    className="absolute top-3 right-3 w-9 h-9 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-110"
                  >
                    <Heart
                      size={18}
                      className={`transition-colors duration-200 ${
                        likedProducts.has(product.id)
                          ? 'fill-[#EE5A36] text-[#EE5A36]'
                          : 'text-[#212121]/40 hover:text-[#EE5A36]'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold text-[#212121] text-sm mb-1.5 line-clamp-1">
                    {product.title}
                  </h3>
                  <p className="text-xs text-[#212121]/50 mb-3 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={13}
                        className={`${
                          i < Math.floor(product.rating)
                            ? 'fill-[#FAEF23] text-[#FAEF23]'
                            : 'text-[#E9E9E9]'
                        }`}
                      />
                    ))}
                    <span className="text-xs text-[#212121]/50 ml-1">{product.rating}</span>
                  </div>

                  {/* Price */}
                  <div className="flex items-end gap-2 mb-3">
                    <span className="text-xl font-black text-[#212121]">{product.price}</span>
                    {product.oldPrice && (
                      <span className="text-sm text-[#212121]/40 line-through mb-0.5">
                        {product.oldPrice}
                      </span>
                    )}
                  </div>

                  {/* Add to cart button */}
                  <button
                    onClick={() => addToCart(product.id)}
                    className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                      addedToCart.has(product.id)
                        ? 'bg-green-500 text-white'
                        : 'bg-[#FAEF23] text-[#212121] hover:bg-[#EE5A36] hover:text-white'
                    }`}
                  >
                    {addedToCart.has(product.id) ? (
                      <>Добавлено</>
                    ) : (
                      <>
                        <ShoppingCart size={16} />
                        В корзину
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
