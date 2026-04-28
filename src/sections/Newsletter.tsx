import { useState } from 'react';
import { Send, Check } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section className="py-10 lg:py-14 bg-[#F7F8FA]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#212121] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#FAEF23]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#EE5A36]/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
              Рассылка
            </h2>
            <p className="text-white/70 mb-8 leading-relaxed">
              Подпишитесь на нашу рассылку и получайте свежие новости и эксклюзивные предложения прямо на вашу электронную почту
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <div className="flex-1 relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  placeholder="Введите email"
                  className={`w-full px-5 py-3.5 rounded-xl bg-white/10 text-white placeholder-white/50 border-2 transition-all duration-200 focus:outline-none ${
                    isFocused ? 'border-[#FAEF23]' : 'border-transparent'
                  }`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitted}
                className={`px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-[#FAEF23] text-[#212121] hover:bg-[#e8de20] hover:shadow-lg hover:-translate-y-0.5'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <Check size={18} />
                    Спасибо!
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Подписаться
                  </>
                )}
              </button>
            </form>

            <p className="text-white/40 text-xs mt-4">
              Нажимая на кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
