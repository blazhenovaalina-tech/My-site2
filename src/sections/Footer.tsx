import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const footerMenu1 = [
  'Корма для собак',
  'Корма для кошек',
  'Домики и лежанки',
  'Игрушки и игры',
  'Ветаптека',
  'Груминг и косметика'
];

const footerMenu2 = [
  'О компании',
  'Акции',
  'Новости и статьи',
  'Доставка и оплата',
  'Контакты'
];

export default function Footer() {
  return (
    <footer className="bg-[#212121] text-white pt-14 pb-8">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-10">
          {/* Logo and description */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-[#FAEF23] rounded-xl flex items-center justify-center">
                <span className="text-xl font-black text-[#212121]">М</span>
              </div>
              <span className="text-xl font-black tracking-tight">МурррКет</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              Интернет-магазин товаров для ваших любимых питомцев. Качественные корма, игрушки и аксессуары.
            </p>
            {/* Social icons */}
            <div className="flex items-center gap-2">
              {['VK', 'IG', 'YT', 'FB'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-white/10 hover:bg-[#FAEF23] rounded-full flex items-center justify-center text-xs font-bold text-white hover:text-[#212121] transition-all duration-200"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Menu 1 */}
          <div>
            <h4 className="font-bold text-base mb-4">Каталог</h4>
            <ul className="space-y-2.5">
              {footerMenu1.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-[#FAEF23] transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Menu 2 */}
          <div>
            <h4 className="font-bold text-base mb-4">Покупателям</h4>
            <ul className="space-y-2.5">
              {footerMenu2.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-white/60 hover:text-[#FAEF23] transition-colors duration-150"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="font-bold text-base mb-4">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#FAEF23] mt-0.5 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  г. Санкт-Петербург, ул. Лесная, д. 20
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={16} className="text-[#FAEF23] flex-shrink-0" />
                <a href="tel:+78124411144" className="text-sm text-white/60 hover:text-[#FAEF23] transition-colors">
                  +7 (812) 44-111-44
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={16} className="text-[#FAEF23] flex-shrink-0" />
                <a href="mailto:info@mrrrket.ru" className="text-sm text-white/60 hover:text-[#FAEF23] transition-colors">
                  info@mrrrket.ru
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={16} className="text-[#FAEF23] flex-shrink-0" />
                <span className="text-sm text-white/60">
                  Пн-Пт: 09:00 - 21:00
                </span>
              </li>
            </ul>

            {/* Payment icons */}
            <div className="flex items-center gap-2 mt-5">
              {['VISA', 'MC', 'MIR'].map((card) => (
                <div
                  key={card}
                  className="px-3 py-1.5 bg-white/10 rounded-md text-xs font-bold text-white/70"
                >
                  {card}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            © МурррКет, 2024
          </p>
          <div className="flex items-center gap-4 text-sm text-white/40">
            <a href="#" className="hover:text-white/70 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white/70 transition-colors">Пользовательское соглашение</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
