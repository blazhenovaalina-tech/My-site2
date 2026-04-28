import { Truck, Trophy, Headphones, Leaf } from 'lucide-react';

const uspItems = [
  {
    icon: Truck,
    image: '/images/usp-1.png',
    title: 'Быстрая доставка',
    description: 'Привезем товары за 1-3 дня или сегодня, по СПб и ЛО'
  },
  {
    icon: Trophy,
    image: '/images/usp-2.png',
    title: 'Бонусы за покупки',
    description: 'Начисляем баллы за каждую покупку на дисконтную карту'
  },
  {
    icon: Headphones,
    image: '/images/usp-3.png',
    title: 'Оперативная поддержка',
    description: 'Менеджеры ответят на ваши вопросы, помогут с выбором'
  },
  {
    icon: Leaf,
    image: '/images/usp-4.png',
    title: 'Эко-упаковка',
    description: 'Используем только биоразлагаемые материалы для упаковки заказов'
  }
];

export default function USP() {
  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {uspItems.map((item, index) => (
            <div
              key={item.title}
              className="group flex items-start gap-4 p-5 rounded-2xl bg-[#F7F8FA] hover:bg-white hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-xl overflow-hidden bg-white shadow-sm">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-[#212121] mb-1 text-sm lg:text-base">
                  {item.title}
                </h3>
                <p className="text-sm text-[#212121]/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
