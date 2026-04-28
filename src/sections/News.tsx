import { ChevronRight, Calendar } from 'lucide-react';

const newsItems = [
  {
    id: 1,
    date: '22 апреля',
    title: 'Витамины и добавки для кошек: зачем они нужны?',
    image: '/images/news-1.jpg'
  },
  {
    id: 2,
    date: '22 апреля',
    title: 'Как правильно ухаживать за шерстью собаки?',
    image: '/images/news-2.jpg'
  },
  {
    id: 3,
    date: '21 апреля',
    title: 'Как выбрать корм для щенка?',
    image: '/images/news-3.jpg'
  }
];

export default function News() {
  return (
    <section className="py-10 lg:py-14">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-[32px] font-black text-[#212121]">
            Новости и статьи
          </h2>
          <a
            href="#"
            className="flex items-center gap-1 text-sm font-semibold text-[#EE5A36] hover:text-[#212121] transition-colors duration-150"
          >
            Все новости
            <ChevronRight size={16} />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {newsItems.map((item) => (
            <a
              key={item.id}
              href="#"
              className="group block bg-white rounded-2xl overflow-hidden border border-[#E9E9E9] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative h-[200px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs text-[#212121]/50 mb-2">
                  <Calendar size={13} />
                  {item.date}
                </div>
                <h3 className="font-bold text-[#212121] group-hover:text-[#EE5A36] transition-colors duration-200 leading-snug">
                  {item.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
