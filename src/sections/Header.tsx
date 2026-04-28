import { useState, useRef, useEffect } from 'react';
import { Heart, GitCompare, ShoppingCart, User, Search, ChevronDown, Menu, X, Phone, Clock } from 'lucide-react';

interface HeaderProps {
  isScrolled: boolean;
}

const catalogCategories = [
  {
    name: 'Корма',
    subcategories: ['Для собак', 'Для кошек', 'Для рыб', 'Для птиц', 'Для грызунов']
  },
  {
    name: 'Лакомства',
    subcategories: ['Для собак', 'Для кошек', 'Для грызунов']
  },
  {
    name: 'Игрушки',
    subcategories: ['Для собак', 'Для кошек', 'Для птиц']
  },
  {
    name: 'Аксессуары',
    subcategories: ['Ошейники', 'Поводки', 'Одежда', 'Переноски']
  },
  {
    name: 'Уход и гигиена',
    subcategories: ['Шампуни', 'Груминг', 'Пеленки', 'Лотки']
  },
  {
    name: 'Ветаптека',
    subcategories: ['Витамины', 'Антипаразитарные', 'Лечебные корма']
  }
];

export default function Header({ isScrolled }: HeaderProps) {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchFocused, setSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const catalogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (catalogRef.current && !catalogRef.current.contains(event.target as Node)) {
        setIsCatalogOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.05)]' : 'bg-white'
      }`}
    >
      {/* Top bar */}
      <div className="border-b border-[#E9E9E9]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0">
              <div className="w-10 h-10 bg-[#FAEF23] rounded-xl flex items-center justify-center">
                <span className="text-xl font-black text-[#212121]">М</span>
              </div>
              <span className="text-xl lg:text-2xl font-black text-[#212121] tracking-tight">
                МурррКет
              </span>
            </a>

            {/* Catalog button */}
            <div className="hidden lg:block relative" ref={catalogRef}>
              <button
                onClick={() => setIsCatalogOpen(!isCatalogOpen)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-all duration-200 ${
                  isCatalogOpen
                    ? 'bg-[#212121] text-white'
                    : 'bg-[#FAEF23] text-[#212121] hover:bg-[#e8de20]'
                }`}
              >
                {isCatalogOpen ? <X size={20} /> : <Menu size={20} />}
                Каталог
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${isCatalogOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Mega menu */}
              {isCatalogOpen && (
                <div className="absolute top-full left-0 mt-2 w-[720px] bg-white rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="flex">
                    {/* Left sidebar */}
                    <div className="w-[240px] bg-[#F7F8FA] p-4">
                      {catalogCategories.map((cat, idx) => (
                        <button
                          key={cat.name}
                          onMouseEnter={() => setActiveCategory(idx)}
                          className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-150 ${
                            activeCategory === idx
                              ? 'bg-[#FAEF23] text-[#212121]'
                              : 'text-[#212121]/70 hover:text-[#212121] hover:bg-white'
                          }`}
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                    {/* Right content */}
                    <div className="flex-1 p-6">
                      <h3 className="font-bold text-lg text-[#212121] mb-4">
                        {catalogCategories[activeCategory].name}
                      </h3>
                      <div className="grid grid-cols-2 gap-2">
                        {catalogCategories[activeCategory].subcategories.map((sub) => (
                          <a
                            key={sub}
                            href="#"
                            className="px-4 py-2.5 rounded-xl text-sm text-[#212121]/80 hover:text-[#EE5A36] hover:bg-[#FAEF23]/20 transition-all duration-150"
                          >
                            {sub}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Search */}
            <div className="hidden md:flex flex-1 max-w-xl mx-6">
              <div
                className={`relative w-full transition-all duration-200 ${
                  searchFocused ? 'ring-2 ring-[#FAEF23]' : ''
                } rounded-full bg-[#F7F8FA]`}
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#212121]/40" size={20} />
                <input
                  type="text"
                  placeholder="Поиск товаров"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  className="w-full pl-12 pr-4 py-2.5 bg-transparent rounded-full text-sm focus:outline-none"
                />
              </div>
            </div>

            {/* Right icons */}
            <div className="flex items-center gap-1 lg:gap-2">
              {/* Phone - desktop only */}
              <div className="hidden xl:flex flex-col items-end mr-4">
                <a href="tel:+78124411144" className="flex items-center gap-1.5 text-sm font-bold text-[#212121] hover:text-[#EE5A36] transition-colors">
                  <Phone size={14} />
                  +7 (812) 44-111-44
                </a>
                <span className="text-xs text-[#212121]/50 flex items-center gap-1">
                  <Clock size={12} />
                  Пн-Пт: 09:00-21:00
                </span>
              </div>

              {[
                { icon: Heart, label: 'Избранное' },
                { icon: GitCompare, label: 'Сравнение' },
                { icon: ShoppingCart, label: 'Корзина', badge: 2 },
                { icon: User, label: 'Профиль' }
              ].map(({ icon: Icon, label, badge }) => (
                <button
                  key={label}
                  className="relative p-2.5 rounded-full hover:bg-[#FAEF23] transition-all duration-150 group"
                  title={label}
                >
                  <Icon size={22} className="text-[#212121] group-hover:text-[#212121]" />
                  {badge && (
                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-[#EE5A36] text-white text-xs font-bold rounded-full flex items-center justify-center">
                      {badge}
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sub navigation */}
      <div className="hidden lg:block border-b border-[#E9E9E9]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 h-12">
            {['О компании', 'Акции', 'Новости и статьи', 'Доставка и оплата', 'Контакты', 'Дисконтная программа'].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 text-sm font-medium text-[#212121]/70 hover:text-[#EE5A36] rounded-lg hover:bg-[#FAEF23]/10 transition-all duration-150"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}