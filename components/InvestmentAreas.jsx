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
import { useTheme } from '@/context/ThemeContext';

const InvestmentAreas = () => {
  const { theme } = useTheme();

  const sectionRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate title
      gsap.from(titleRef.current, {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      });
    }, titleRef.current);


      
    

    return () => ctx.revert();
  }, []);
 


  return (
    <section
      id='investment'
      ref={sectionRef}
      className={`w-full snap-start ${theme === "dark" ? "bg-black" : "bg-purple-900"} min-h-[100vh] text-white py-16 lg:py-24 px-6 lg:px-20`}
    >
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Titre & Introduction */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-5 md:gap-8">
          <h1 ref={titleRef} className={`${styles.title} text-center md:text-start`}>
            مجــالــات <br /> الإسـثـمــار
          </h1>
          <p className="text-[20px] md:text-[22px] text-textColor font-medium leading-relaxed text-center md:text-right max-w-[95%] md:max-w-[450px]">
            نعمل على تنويع محفظتنا ضمن مجالات نُتقنها، ونؤمن بأهميتها لمستقبل الاقتصاد
          </p>
        </div>

  {/* Carrousel */}
  <div className="relative w-full py-10">
  <Swiper
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
                <div className={`relative group duration-300 
  ${theme === "dark" 
    ? "bg-[#1a1c1d] hover:bg-[#2a2c2d] text-white border border-[#222]" 
    : "bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#000]"} 
  rounded-[15px] px-8 py-10 min-h-[300px] 
  mx-4 flex flex-col justify-between gap-6 
  overflow-hidden transition-all cursor-default`}>

                  <h3  className={`${theme === "dark" ? "text-white" : "text-[#000]"} text-[24px] md:text-[28px] font-semibold`}>                  {area.name}
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