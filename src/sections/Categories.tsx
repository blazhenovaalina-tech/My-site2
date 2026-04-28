import { ChevronRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    name: 'Корма для собак',
    image: '/images/category-1.jpg'
  },
  {
    id: 2,
    name: 'Корма для кошек',
    image: '/images/category-2.jpg'
  },
  {
    id: 3,
    name: 'Домики и лежанки',
    image: '/images/category-3.jpg'
  },
  {
    id: 4,
    name: 'Игрушки и игры',
    image: '/images/category-4.jpg'
  },
  {
    id: 5,
    name: 'Ветаптека',
    image: '/images/category-5.jpg'
  },
  {
    id: 6,
    name: 'Груминг и косметика',
    image: '/images/category-6.jpg'
  }
];

export default function Categories() {
  return (
    <section className="py-10 lg:py-14 bg-[#F7F8FA]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-[32px] font-black text-[#212121]">
            Популярные категории
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-semibold text-[#EE5A36] hover:text-[#212121] transition-colors duration-150"
          >
            Все категории
            <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-5">
          {categories.map((category) => (
            <a
              key={category.id}
              href="#"
              className="group relative rounded-2xl overflow-hidden aspect-square bg-white shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3 lg:p-4">
                <h3 className="text-white font-bold text-sm lg:text-base leading-tight drop-shadow-lg">
                  {category.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
