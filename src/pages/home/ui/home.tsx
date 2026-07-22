import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Product {
  id: string;
  name: string;
  priceCurrent: number;
  priceOld: number | null;
  image: string;
}

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        if (data && data.clothing) {
          setProducts(data.clothing);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка загрузки продуктов:', error);
        setIsLoading(false);
      });
  }, []);


  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center font-['Raleway'] text-lg text-gray-500">
        Загрузка коллекции Womazing...
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white font-['Raleway'] select-none">
   
      <main className="relative pt-66.25 pb-30 overflow-hidden">
        <div className="max-w-277.5 mx-auto px-3.75 flex justify-between items-start">
          <div className="w-140.75 h-96.25 relative">
            <h1 className="absolute top-0 left-0 text-[55px] font-medium leading-[1.1] text-black m-0">
              Новые поступления<br />в этом сезоне
            </h1>
            <p className="absolute top-41.75 left-3.75 w-96.25 h-21 text-[20px] font-normal leading-[1.4] text-black text-right m-0">
              Утонченные сочетания и бархатные оттенки - вот то, что вы искали в этом сезоне. Время исследовать.
            </p>
            <div className="absolute top-75.75 left-18.75 flex">
              <button className="w-17 h-17 bg-[#6E9C9F]/10 flex items-center justify-center transition-colors duration-200 hover:bg-[#6E9C9F]/20">
                <img src="/icon-arrow-down.svg" alt="Иконка вниз" className="w-6 h-6" />
              </button>
              <button className="w-60.75 h-17 bg-[#6E9C9F] text-white text-[17px] font-normal tracking-[0.02em] flex items-center justify-center transition-colors duration-200 hover:bg-[#578487]">
                Открыть магазин
              </button>
            </div>
          </div>
          <div className="relative w-129 h-201.5">
            <div className="absolute w-176.25 h-201.5 bg-[#F1EADC] z-1 -top-30 left-26.5" />
            <img 
              src="/hero-first.png" 
              alt="Девушка в очках" 
              className="absolute w-102.5 h-161.5 object-cover top-0 left-26.5 z-2" 
            />
            <img 
              src="/hero-second.png" 
              alt="Девушка в шляпе" 
              className="absolute w-49.25 h-49.25 object-cover top-28.5 left-136.5 z-3" 
            />
            <img 
              src="/hero-third.png" 
              alt="Девушка смотрит вверх" 
              className="absolute w-47.5 h-79.5 object-cover bottom-20 left-0 z-3" 
            />
          </div>
        </div>
      </main>
      <section className="py-32.5 bg-white">
        <div className="max-w-277.5 mx-auto px-3.75 h-206.75 flex flex-col items-start relative">
          <h2 className="text-[40px] font-medium leading-[1.1] text-black mb-23">
            Новая коллекция
          </h2>
          <div className="w-full mb-16.25">
            <Swiper
              spaceBetween={30}
              slidesPerView={3}
              className="w-full"
            >
              {products.map((product) => (
                <SwiperSlide key={product.id} className="w-87.5">
                  <a href={`/product/${product.id}`} className="flex flex-col items-center no-underline text-black group">
                    <div className="w-87.5 h-119.5 relative overflow-hidden mb-6">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover" 
                      />
                      {product.id === "3" && (
                        <div className="absolute top-0 left-0 w-full h-full bg-[#6E9C9F]/70 flex items-center justify-center opacity-100 transition-opacity duration-300">
                          <img src="/icon-arrow-right-white.svg" alt="Подробнее" className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                    <h3 className="text-[20px] font-medium leading-[1.4] mb-1.75 text-center">
                      {product.name}
                    </h3>
                    <div className="flex gap-2.5 items-center">
                      {product.priceOld && (
                        <span className="text-[15px] line-through text-[#9C9C9C]">
                          ${product.priceOld}
                        </span>
                      )}
                      <span className="text-[15px] font-medium text-[#9C9C9C]">
                        ${product.priceCurrent}
                      </span>
                    </div>
                  </a>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <button className="w-60.75 h-17 border border-[#6E9C9F] bg-transparent text-[#6E9C9F] text-[17px] font-normal tracking-[0.02em] flex items-center justify-center self-center transition-all duration-300 hover:bg-[#6E9C9F] hover:text-white">
            Открыть магазин
          </button>
        </div>
      </section>
      <section className="py-25 bg-white">
        <div className="max-w-277.5 mx-auto px-3.75 h-102 flex flex-col items-start">
          <h2 className="text-[40px] font-medium leading-[1.1] text-black mb-23">
            Что для нас важно
          </h2>
          <div className="flex w-full justify-between gap-7.5">
            <div className="w-87.5 flex flex-col items-start">
              <div className="w-15.25 h-15.25 mb-9.25 flex items-center justify-start">
                <img src="/icon-badge.svg" alt="Иконка Качество" className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-[17px] font-medium leading-[1.4] text-black mb-6">
                Качество
              </h3>
              <p className="text-[17px] font-medium leading-[1.4] text-black m-0">
                Наши professionalы работают на лучшем оборудовании для пошива одежды беспрецедентного качества
              </p>
            </div>
            <div className="w-87.5 flex flex-col items-start">
              <div className="w-15.25 h-15.25 mb-9.25 flex items-center justify-start">
                <img src="/icon-gear.svg" alt="Иконка Скорость" className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-[17px] font-medium leading-[1.4] text-black mb-6">
                Скорость
              </h3>
              <p className="text-[17px] font-medium leading-[1.4] text-black m-0">
                Благодаря отлаженной системе в Womazing мы можем отшивать до 20-ти единиц продукции в наших собственных цехах
              </p>
            </div>
            <div className="w-87.5 flex flex-col items-start">
              <div className="w-15.25 h-15.25 mb-9.25 flex items-center justify-start">
                <img src="/icon-hand.svg" alt="Иконка Ответственность" className="max-w-full max-h-full object-contain" />
              </div>
              <h3 className="text-[17px] font-medium leading-[1.4] text-black mb-6">
                Ответственность
              </h3>
              <p className="text-[17px] font-medium leading-[1.4] text-black m-0">
                Мы заботимся о людях и планете. Безотходное производство и комфортные условия труда - все это Womazing
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-30 bg-white">
        <div className="max-w-277.5 mx-auto px-3.75 flex flex-col">
          <h2 className="text-[40px] font-medium leading-[1.1] text-black mb-23">
            Команда мечты Womazing
          </h2>
          <div className="flex items-center justify-between w-full">
            <div className="relative w-165 h-120">
              <Swiper
                modules={[Pagination]}
                pagination={{
                  clickable: true,
                  bulletClass: 'inline-block w-[30px] h-[4px] bg-white/40 cursor-pointer transition-colors duration-300 mx-[4px]',
                  bulletActiveClass: '!bg-white',
                }}
                className="w-full h-full"
              >
                <SwiperSlide>
                  <img 
                    src="/team-slide-1.webp" 
                    alt="Команда Womazing" 
                    className="w-full h-full object-cover block" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img 
                    src="/team-slide-2.webp" 
                    alt="Команда Womazing 2" 
                    className="w-full h-full object-cover block brightness-90" 
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img 
                    src="/team-slide-3.jpg" 
                    alt="Команда Womazing 3" 
                    className="w-full h-full object-cover block brightness-75" 
                  />
                </SwiperSlide>
              </Swiper>
            </div>
                        <div className="flex items-center justify-center px-5">
              <img src="/icon-arrow-right-black.svg" alt="Разделитель" className="w-6 h-6" />
            </div>
            <div className="w-87.5 flex flex-col items-start">
              <h3 className="text-[25px] font-medium leading-[1.3] text-black mb-7">
                Для каждой
              </h3>
              <div className="flex flex-col gap-3.75 mb-7">
                <p className="text-[17px] font-normal leading-normal text-black m-0">
                  Каждая девушка уникальна. Однако, мы схожи в миллионе мелочей.
                </p>
                <p className="text-[17px] font-normal leading-normal text-black m-0">
                  Womazing ищет эти мелочи и создает прекрасные вещи, которые выгодно подчеркивают достоинства каждой девушки.
                </p>
              </div>
              <a 
                href="#" 
                className="text-[17px] font-medium text-[#6E9C9F] no-underline border-b border-transparent transition-colors duration-300 hover:border-[#6E9C9F]"
              >
                Подробнее о бренде
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}



