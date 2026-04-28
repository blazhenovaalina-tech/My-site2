import { useState, useEffect, useCallback } from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import USP from './sections/USP';
import ProductsSection from './sections/ProductsSection';
import Categories from './sections/Categories';
import News from './sections/News';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';
import ScrollToTop from './sections/ScrollToTop';

function App() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsHeaderScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-white">
      <Header isScrolled={isHeaderScrolled} />
      <main>
        <Hero />
        <USP />
        <ProductsSection 
          title="Акции" 
          linkText="Все акции" 
          products={[
            {
              id: 1,
              image: '/images/product-1.jpg',
              badges: ['-15%', 'Новинка'],
              title: 'Консервы для собак PRO PLAN',
              description: 'Консервы для собак Purina Pro Plan Adult для поддержания здорового пищеварения с ягненком и рисом, 400 г',
              price: '320 ₽',
              oldPrice: '377 ₽',
              rating: 4.8
            },
            {
              id: 2,
              image: '/images/product-2.jpg',
              badges: ['-15%', 'Новинка'],
              title: 'Влажные салфетки Doggy Dolly',
              description: 'Влажные салфетки Doggy Dolly с лосьоном, для ухода за глазами, 30 шт',
              price: '129 ₽',
              oldPrice: '152 ₽',
              rating: 4.5
            },
            {
              id: 3,
              image: '/images/product-3.jpg',
              badges: ['-15%'],
              title: 'Лакомство для кошек DREAMIES',
              description: 'Лакомство для кошек Dreamies с курицей, 180 г',
              price: '159 ₽',
              oldPrice: '187 ₽',
              rating: 4.9
            },
            {
              id: 4,
              image: '/images/product-4.jpg',
              badges: ['-15%'],
              title: 'Пеленки одноразовые ZooOne',
              description: 'Пеленки впитывающие одноразовые ZooOne, 60x40 см, 30 шт',
              price: '212 ₽',
              oldPrice: '249 ₽',
              rating: 4.6
            }
          ]}
        />
        <Categories />
        <ProductsSection 
          title="Хиты продаж" 
          linkText="Все хиты" 
          products={[
            {
              id: 5,
              image: '/images/product-1.jpg',
              badges: ['Хит'],
              title: 'Консервы для собак PRO PLAN',
              description: 'Консервы для собак Purina Pro Plan Adult для поддержания здорового пищеварения с ягненком и рисом, 400 г',
              price: '377 ₽',
              rating: 4.8
            },
            {
              id: 6,
              image: '/images/product-2.jpg',
              badges: ['Хит'],
              title: 'Влажные салфетки Doggy Dolly',
              description: 'Влажные салфетки Doggy Dolly с лосьоном, для ухода за глазами, 30 шт',
              price: '152 ₽',
              rating: 4.5
            },
            {
              id: 7,
              image: '/images/product-3.jpg',
              badges: ['Хит', 'Новинка'],
              title: 'Лакомство для кошек DREAMIES',
              description: 'Лакомство для кошек Dreamies с курицей, 180 г',
              price: '187 ₽',
              rating: 4.9
            },
            {
              id: 8,
              image: '/images/product-4.jpg',
              badges: ['Хит'],
              title: 'Пеленки одноразовые ZooOne',
              description: 'Пеленки впитывающие одноразовые ZooOne, 60x40 см, 30 шт',
              price: '249 ₽',
              rating: 4.6
            }
          ]}
        />
        <ProductsSection 
          title="Новинки" 
          linkText="Все новинки" 
          products={[
            {
              id: 9,
              image: '/images/product-3.jpg',
              badges: ['Новинка'],
              title: 'Лакомство для кошек DREAMIES',
              description: 'Лакомство для кошек Dreamies с курицей, 180 г',
              price: '187 ₽',
              rating: 4.9
            },
            {
              id: 10,
              image: '/images/product-1.jpg',
              badges: ['Новинка'],
              title: 'Консервы для собак PRO PLAN',
              description: 'Консервы для собак Purina Pro Plan Adult для поддержания здорового пищеварения с ягненком и рисом, 400 г',
              price: '377 ₽',
              rating: 4.8
            },
            {
              id: 11,
              image: '/images/product-2.jpg',
              badges: ['Новинка'],
              title: 'Влажные салфетки Doggy Dolly',
              description: 'Влажные салфетки Doggy Dolly с лосьоном, для ухода за глазами, 30 шт',
              price: '152 ₽',
              rating: 4.5
            },
            {
              id: 12,
              image: '/images/product-4.jpg',
              badges: ['Новинка'],
              title: 'Пеленки одноразовые ZooOne',
              description: 'Пеленки впитывающие одноразовые ZooOne, 60x40 см, 30 шт',
              price: '249 ₽',
              rating: 4.6
            }
          ]}
        />
        <News />
        <Newsletter />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;