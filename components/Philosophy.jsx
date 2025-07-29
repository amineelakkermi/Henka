// components/Philosophy.jsx
import { philosophy } from "@/constants/data"
import styles from "@/styles/style"
import PhilosophyContent from "./PhilosophyContent"
import Image from "next/image"
import H from "../public/images/H.png"

const Philosophy = () => {
  const count = 15; // عدد أقل
  const positions = Array.from({ length: count }, () => ({
  top: `${Math.random() * 90 + 5}%`,  // ترك هامش أعلى وأسفل
  left: `${Math.random() * 90 + 5}%`, // ترك هامش يمين ويسار
  size: 15 + Math.random() * 15       // حجم أخف (20–40px)
}))
  return (
    <section
      id="phl"
      className="w-full relative snap-start bg-black1 text-white py-12 lg:py-20 px-6 lg:px-20 overflow-hidden"
    >
      {/* صور موزعة بمواقع مختلفة */}
      <div className="absolute inset-0 w-full h-full z-20 pointer-events-none opacity-10">
        <div className="relative w-full h-full">
          {positions.map((pos, i) => (
            <Image
              key={i}
              src={H}
              alt="H"
              width={pos.size}
              height={pos.size}
              style={{
                position: "absolute",
                top: pos.top,
                left: pos.left,
                transform: "translate(-50%, -50%)",
                opacity: 0.7,
              }}
              className="object-contain"
            />
          ))}
        </div>
      </div>

      {/* المحتوى الرئيسي */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col gap-10">
        <PhilosophyContent philosophy={philosophy} styles={styles} />
      </div>
    </section>
  )
}

export default Philosophy
