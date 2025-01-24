"use client";
import { ArrowBigDown } from "lucide-react";
import { motion } from "framer-motion";
const HeroText = () => {
    return (  
        <>
         {/* Dark overlay */}
         <div className="absolute inset-0 bg-black opacity-40" />
                    <div className="flex flex-col justify-between h-full relative z-10">
                        <motion.div 
                        
                        className="flex flex-col items-center justify-center flex-grow">
                            <motion.h1 initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-6xl font-bold">
                                Bienvenue au <span className="uppercase text-red-500">Centre</span>{" "}
                                <span className="text-green-500 uppercase">Medical</span>{" "}
                                <span className="uppercase text-blue-400">Afuna</span>
                            </motion.h1>
                            <motion.div
                             initial={{ x: 100, opacity: 0 }}
                             whileInView={{ x: 0, opacity: 1 }}
                             transition={{ duration: 1, ease: "easeOut" }}
                            className="mt-8">
                                <span className="text-2xl italic">Votre Santé, Notre Priorité</span>
                            </motion.div>
                        </motion.div>
                        {/* Positioning the Explorer div at the bottom */}
                        <motion.div
                         initial={{ y: -50, opacity: 0 }}
                         whileInView={{ y: 0, opacity: 1 }}
                         transition={{ duration: 1, ease: "easeOut" }}
                        className="flex flex-col items-center pb-20">
                            <span className="text-2xl font-semibold">Explorer Nos Services</span>
                            <ArrowBigDown size={50} className="fill-yellow-500 text-yellow-500 animate-bounce mt-2" />
                        </motion.div>
                    </div>
        </>
    );
}
 
export default HeroText;