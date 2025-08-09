'use client';

import Image from 'next/image';
import styles from './Partners.module.css';
import { useTheme } from '@/context/ThemeContext';
export default function Partners() {
  const { theme } = useTheme();
  const partners = Array.from({ length: 8 }, (_, i) => ({
    src: `/images/partner${i + 1}.png`,
    alt: `Partner ${i + 1}`,
  }));

  // Dupliquez les partenaires pour créer un effet de boucle continu
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className={`w-full flex justify-center py-10 px-4 ${theme === "dark" ? 'bg-black' : 'bg-purple-900'} text-center relative`}>
      <div className="w-full max-w-5xl mx-auto">
        <h2 className="font-ghaith text-2xl md:text-3xl font-bold mb-6 text-right">استثـمــاراتـنا</h2>
        <div className="border-t border-gray-400 mb-8"></div>
        
        <div className={styles.wrapper}>
          {Array.from({ length: 8 }, (_, index) => (
            <div 
              key={index + 1}
              className={`${styles.item} ${styles['item' + (index + 1)]}`}
            >
              <Image 
                src={`/images/partner${index + 1}.png`} 
                alt={`Partner ${index + 1}`} 
                width={200} 
                height={200} 
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>

     


    </section>
  );
}