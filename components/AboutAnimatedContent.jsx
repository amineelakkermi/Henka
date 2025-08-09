'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutAnimatedContent = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const svgRef = useRef(null);

  const paragraphs = [
    "هي مكتب استثمار عائلي سعودي، تأسس على يد عائلة تمتلك إرثًا من الريادة والاستثمار الممتد لعقود.",
    "نُؤمن أن الثروة مسؤولية، وأن إدارة الأصول لا تتعلق بالأرقام فقط، بل بما تحمله من أثر، ورؤية، واستمرارية.",
    "حنكة ليست مجرد كيان مالي، بل عقلية تعمل على ترجمة قيم العائلة في الحكمة، الانضباط، والرؤية بعيدة المدى، إلى قرارات مالية رشيدة تنمّي الثروة وتحافظ عليها.",
    "نحن نعمل بصمت، لكن بأثر عميق.",
  ];

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
          once: true,
        },
      });

      // Animate SVG
      if (svgRef.current) {
        gsap.to(svgRef.current, {
          x: -80,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Animate each paragraph word by word
      const paragraphEls = gsap.utils.toArray(".animated-paragraph");

      paragraphEls.forEach((el) => {
        const words = el.innerText.trim().split(' ');
        el.innerHTML = words
          .map(word => `<span class="inline-block opacity-0 translate-y-[20px]">${word}</span>`)
          .join(' ');

        const spans = el.querySelectorAll('span');

        gsap.to(spans, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            once: true,
          },
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="flex relative flex-col justify-center gap-5">

      <div className="flex z-20 gap-2 lg:gap-8 items-center">
        <h1
          ref={titleRef}
          className="text-[20px] lg:text-[60px] font-bold text-start text-white"
        >
          حنكــة للإستثمـــار
        </h1>

        <div ref={svgRef}>
          {/* SVG content */}
          <svg width="70" height="70" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_103_9)">
              <path d="M89.9318 6.12863C94.1569 -2.04288 105.843 -2.04288 110.068 6.12863L136.973 58.1644C138.051 60.2496 139.75 61.9486 141.836 63.0268L193.871 89.9318C202.043 94.1569 202.043 105.843 193.871 110.068L141.836 136.973C139.75 138.051 138.051 139.75 136.973 141.836L110.068 193.871C105.843 202.043 94.1569 202.043 89.9318 193.871L63.0268 141.836C61.9486 139.75 60.2496 138.051 58.1644 136.973L6.12863 110.068C-2.04288 105.843 -2.04288 94.1569 6.12863 89.9318L58.1644 63.0268C60.2496 61.9486 61.9486 60.2496 63.0268 58.1644L89.9318 6.12863Z" fill="url(#paint0_linear_103_9)" />
            </g>
            <defs>
              <linearGradient id="paint0_linear_103_9" x1="100" y1="0" x2="100" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#DF99F7" />
                <stop offset="1" stopColor="#8A3FFC" />
              </linearGradient>
              <clipPath id="clip0_103_9">
                <rect width="200" height="200" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>

      <div className="flex z-20 flex-col gap-6">
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="animated-paragraph text-white text-[14px] md:text-[35px] font-[500] leading-[50px] lg:leading-[80px]"
          >
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AboutAnimatedContent;
