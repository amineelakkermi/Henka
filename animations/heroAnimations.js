// animations/heroAnimations.js
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export const animateHero = (titleRef, textRef, buttonsRef) => {
  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

  tl.fromTo(
    titleRef.current,
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.8 }
  )
    .fromTo(
      textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.7 },
      '-=0.4'
    )
    .fromTo(
      buttonsRef.current,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.15,
        ease: 'back.out(1.7)',
      },
      '-=0.3'
    );

  // Hover effect
  buttonsRef.current.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      gsap.to(button, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      });
    });

    button.addEventListener('mouseleave', () => {
      gsap.to(button, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      });
    });
  });

  // Cleanup
  return () => {
    gsap.killTweensOf([titleRef.current, textRef.current, ...buttonsRef.current]);
    buttonsRef.current.forEach((button) => {
      button.removeEventListener('mouseenter', () => {});
      button.removeEventListener('mouseleave', () => {});
    });
  };
};
