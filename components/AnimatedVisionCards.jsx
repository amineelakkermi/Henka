'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const AnimatedVisionCards = () => {
  const card1Ref = useRef();
  const card2Ref = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    [card1Ref, card2Ref].forEach(ref => {
      gsap.from(ref.current, {
        y: -80,
        opacity: 0,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
        },
      });
    });
  }, []);

  return (
    <>
      {/* رسالتنا */}
      <div
        ref={card1Ref}
        className="md:border-t-2 border-b-2 md:border-l-2 border-[#222] flex flex-col gap-5 py-24 px-10"
      >
       <div className='flex items-center gap-5'>
       <h3 className="text-[28px] lg:text-[45px] font-bold">رسالتنــا</h3>
       <div>
       <svg width="50" height="50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> 
       <g clipPath="url(#clip0_105_672)"> <path fillRule="evenodd" clipRule="evenodd" 
       d="M18.4046 100.422C8.31777 102.425 0.714259 111.325 0.714259 122L0.714256 178C0.714256 190.15 10.564 200 22.7143 200L78.7143 200C89.6402 200 98.7058 192.035 100.422 181.595C102.425 191.682 111.325 199.286 122 199.286H178C190.15 199.286 200 189.436 200 177.286V121.286C200 110.36 192.035 101.294 181.596 99.578C191.682 97.5746 199.286 88.6752 199.286 78V22C199.286 9.84974 189.436 2.97894e-06 177.286 2.44784e-06L121.286 0C110.36 -4.77585e-07 101.294 7.96461 99.5781 18.4046C97.5747 8.31778 88.6753 0.71428 78 0.71428H22C9.84974 0.71428 0 10.564 0 22.7143V78.7143C0 89.6401 7.96462 98.7058 18.4046 100.422Z" fill="url(#paint0_linear_105_672)"/> </g> <defs> <linearGradient id="paint0_linear_105_672" x1="157.5" y1="32" x2="44" y2="147.5" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stopColor="#8A3FFC"/> <stop offset="1" stopColor="#FBE3EA"/> </linearGradient> <clipPath id="clip0_105_672">
       <rect width="200" height="200" fill="white"/> </clipPath> </defs> </svg>
        </div>

       </div>
        <p className="text-[20px] lg:text-[22px] text-textColor leading-relaxed font-medium">
          أن نحافظ على ثروة العائلة وننميها من خلال استثمارات مدروسة، تحترم القيم وتتبنّى الابتكار، مع التخطيط المستدام للأجيال القادمة.
        </p>
      </div>

      {/* رؤيتنا */}
      <div
        ref={card2Ref}
        className="border-t-2 md:border-b-2 border-[#222] flex flex-col gap-5 py-24 px-10"
      >
       <div className='flex items-center gap-5'>
       <h3 className="text-[28px] lg:text-[45px] font-bold">رؤيتنــا</h3>
       <div>
       <svg width="50" height="50" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg"> <path fillRule="evenodd" clipRule="evenodd" d="M99.9994 153.877C141.147 153.877 176.851 127.54 194.627 111.673C201.789 105.28 201.789 94.597 194.627 88.204C176.851 72.3371 141.147 46 99.9994 46C58.8516 46 23.1479 72.3371 5.37163 88.2041C-1.79055 94.597 -1.79054 105.28 5.37164 111.673C23.1479 127.54 58.8516 153.877 99.9994 153.877ZM99.9994 137.57C120.783 137.57 137.631 120.722 137.631 99.9383C137.631 79.1551 120.783 62.3069 99.9994 62.3069C79.2161 62.3069 62.368 79.1551 62.368 99.9383C62.368 120.722 79.2161 137.57 99.9994 137.57Z" fill="url(#paint0_linear_105_535)"/> <defs> <linearGradient id="paint0_linear_105_535" x1="157.499" y1="63.2603" x2="106.827" y2="158.86" gradientUnits="userSpaceOnUse"> <stop offset="0.0509862" stopColor="#FFB6E1"/> 
       <stop offset="1" stopColor="#8A3FFC"/> </linearGradient> </defs> </svg>       </div>

       </div>
        <p className="text-[20px] lg:text-[22px] text-textColor leading-relaxed font-medium">
          أن نكون نموذجًا سعوديًا رائدًا في إدارة الاستثمارات العائلية بحكمة مؤسسية، وشراكات استراتيجية، ونمو متزن.
        </p>
      </div>
    </>
  );
};

export default AnimatedVisionCards;
