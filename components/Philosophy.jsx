// components/Philosophy.jsx (Server Component)
import { philosophy } from "@/constants/data";
import styles from "@/styles/style";
import PhilosophyContent from "./PhilosophyContent"; // Client Component

const Philosophy = () => {
  return (
    <section id="phl" className="w-full svg2 snap-start bg-black1 text-white py-12 lg:py-20 px-6 lg:px-20">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        <PhilosophyContent philosophy={philosophy} styles={styles} />
      </div>
    </section>
  );
};

export default Philosophy;
