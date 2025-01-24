"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AfunaStatistics: React.FC = () => {
  const [articleCount, setArticleCount] = useState<number>(0);
  const [achievementCount, setAchievementCount] = useState<number>(0);
  const [growthRate, setGrowthRate] = useState<number>(0);
  const [creativeEvent, setCreativeEvent] = useState<number>(0);

  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) { // Check if the component is in view
      const animateValue = (start: number, end: number, duration: number, setValue: React.Dispatch<React.SetStateAction<number>>) => {
        const increment = end / (duration / 5);
        let current = start;

        const updateCount = () => {
          current += increment;
          if (current < end) {
            setValue(Math.floor(current));
            requestAnimationFrame(updateCount);
          } else {
            setValue(end); // Ensure it ends exactly at the final value
          }
        };

        updateCount();
      };

      // Animate each value
      animateValue(0, 4, 2000, setArticleCount);
      animateValue(0, 5, 1500, setAchievementCount);
      animateValue(0, 328, 1500, setGrowthRate);
      animateValue(0, 5, 1500, setCreativeEvent);
    }
  }, [inView]); // Dependency array includes inView

  return (
    <motion.div
      ref={ref} // Attach the ref to the motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="xs:container"
    >

      <div className="text-center text-black pt-8">
        <span className="text-center text-2xl font-bold text-green-900 ">Le CMA accumule en tout,</span>
        <div className="xs:container pt-[4rem] md:pt-[10rem] md:flex items-center md:justify-around">
          <div>
            <span className="font-bold text-6xl text-green-600">{articleCount.toLocaleString()}+</span>
            <p className="mt-4 mb-[4rem] text-slate-600">Médecins Professionelles</p>
          </div>
          <div>
            <span className="font-bold text-6xl text-green-600">{achievementCount}+</span>
            <p className="mt-4 mb-[4rem] text-slate-600">Accouchements</p>
          </div>
          <div>
            <span className="font-bold text-6xl text-green-600">{growthRate}</span>
            <p className="mt-4 mb-[4rem] text-slate-600">Visites Médicales</p>
          </div>
          <div>
            <span className="font-bold text-6xl text-green-600">{creativeEvent}</span>
            <p className="mt-4 pb-[4rem] text-slate-600">Campagnes Médicales</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AfunaStatistics;