"use client";
import { motion } from "framer-motion";
import AboutInfo from "./abf";
import { Clock, LocateFixed, Phone, } from "lucide-react";
import Image from "next/image";
const AfunaContactUs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="xs:container md:flex md:justify-around items-center p-8 text-black">
        
        <div className="p-6">
          
          <h1 className="font-bold text-4xl md:text-6xl mt-10 md:w-[550px] w-[300px]">
            Contactez Nous & Echangeons ensemble
          </h1>
          
          <div className="mt-10 flex-col items-center gap-y-8 ">
            <AboutInfo
              title={"Heures D'ovrable"}
              description={
                "7 Jours / 7 - 24h / 24"    
              }
              icon={Clock}
            />
            <AboutInfo
              title={"Localisation"}
              description={
                "Nkolfoulou - Centre, Cameroun"
              }
              icon={LocateFixed}
            />
            <AboutInfo
              title={"Our Contacts"}
              description={
                "+237 6 55 69 04 48 \n +237 6 76 96 81 93 "
              }
              icon={Phone}
            />
          </div>
        </div>
        <div>
          <Image
            src={"/contact.jpg"}
            width={600}
            height={600}
            alt="Header"
            className="rounded-tr-full rounded-bl-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default AfunaContactUs;
