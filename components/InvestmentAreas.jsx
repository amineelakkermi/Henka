'use client';
import { useRef, useEffect } from 'react';
import { GoArrowUpLeft } from 'react-icons/go';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import styles from '@/styles/style';
import { investment_areas } from '@/constants/data';

const InvestmentAreas = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: titleRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      id='investment'
      ref={sectionRef}
      className="w-full bg-black min-h-[100vh] text-white py-16 lg:py-24 px-6 lg:px-20"
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Titre & Introduction */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-8">
          <h2 ref={titleRef} className={`${styles.title} text-center md:text-start`}>
            مجــالــات <br /> الإسـثـمــار
          </h2>
          <p className="text-[20px] md:text-[22px] text-textColor font-medium leading-relaxed text-center md:text-right max-w-[95%] md:max-w-[450px]">
            نعمل على تنويع محفظتنا ضمن مجالات نُتقنها، ونؤمن بأهميتها لمستقبل الاقتصاد
          </p>
        </div>

  {/* Carrousel */}
  <div className="relative w-full py-10">
  <Swiper
  ref={swiperRef}
  modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
  grabCursor={true}
  centeredSlides={true}
  slidesPerView={'auto'}
  
 
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  loop={true}
  breakpoints={{
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  }}
  className="w-full"
>
            {investment_areas.areas.map((area, index) => (
              <SwiperSlide key={index} className="!w-[300px] md:!w-[350px] lg:!w-[400px]">
                <div className="relative group border border-1 border-[#222] bg-[#0f1011] rounded-[15px] px-8 py-10 min-h-[300px]
                mx-4 flex flex-col justify-between gap-6 overflow-hidden transition-all duration-300 cursor-default">
                  <h3 className="text-white text-[24px] md:text-[28px] font-semibold">
                    {area.name}
                  </h3>
                  <p className="text-right text-textColor text-[18px] leading-[28px]">
                    {area.details}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="swiper-button-prev !text-white after:!text-xl"></div>
          <div className="swiper-button-next !text-white after:!text-xl"></div>
          <div className="swiper-pagination !relative !mt-10"></div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentAreas;