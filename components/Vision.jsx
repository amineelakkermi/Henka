import Image from "next/image";
import H from "../public/images/H.png"

const Vision = () => {
  
  return (
    <section id="vision" className={`w-full snap-start relative  bg-purple-900 min-h-[90vh] text-white flex flex-col justify-center py-8 lg:py-12 overflow-hidden`}>
      <div className="max-w-5xl mx-auto px-6 lg:px-16 flex flex-col md:flex-row justify-center gap-0">
          {/* رسالتنا */}
      <div
        className={`md:border-t border-b md:border-l border-[#555] hover:bg-purple-800  duration-300  flex flex-col gap-5 py-24 px-10`}
      >
       <div className='flex items-center gap-5'>
       <h3 className="text-[28px] lg:text-[45px] font-bold">رسالتنــا</h3>
       <Image src={H} alt="logo" width={30} height={30} />

       <div>
     
        </div>

       </div>
        <p className="text-[14px] lg:text-[20px] text-textColor leading-relaxed font-medium">
          أن نحافظ على ثروة العائلة وننميها من خلال استثمارات مدروسة، تحترم القيم وتتبنّى الابتكار، مع التخطيط المستدام للأجيال القادمة.
        </p>
      </div>

      {/* رؤيتنا */}
      <div
        className={`md:border-t md:border-b border-[#555] hover:bg-purple-800 border-[#222] duration-300  flex flex-col gap-5 py-24 px-10`}
        >
       <div className='flex items-center gap-5'>
       <h3 className="text-[28px] lg:text-[45px] font-bold">رؤيتنــا</h3>
       <Image src={H} alt="logo" width={30} height={30} />
       <div>
       </div>

       </div>
        <p className="text-[14px] lg:text-[20px] text-textColor leading-relaxed font-medium">
          أن نكون نموذجًا سعوديًا رائدًا في إدارة الاستثمارات العائلية بحكمة مؤسسية، وشراكات استراتيجية، ونمو متزن.
        </p>
      </div>

      
      </div>

    </section>
  );
};

export default Vision;
