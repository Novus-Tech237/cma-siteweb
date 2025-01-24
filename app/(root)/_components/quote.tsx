"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const AfunaQuote = () => {
    const pathname = usePathname();
    const isAboutPage = pathname?.startsWith("/about")
    const router = useRouter()
    const onClick = () => {
        router.push("/about")
    }
    return ( 
        <div className="h-full md:px-2  overflow-hidden text-black">
        <div className="md:px-32 md:py-10 px-10 py-5">
                <span className="subheading">Citation</span>
            
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-10"
            >
                <div className="container flex md:flex-row flex-col md:justify-between items-center p-8">
                <div className="relative mb-4"> {/* Added relative positioning */}
                        <Image
                            src={"/pdg.jpg"}
                            width={400}
                            height={800}
                            alt="Header"
                            className="rounded-full"
                        />
                    </div>
                    <div className="md:p-6 md:ml-[4rem]">
                        <motion.h1 initial={{ x: 100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="font-bold text-4xl mt-10 md:w-[550px] w-[350px]">
                            Un Mot de notre PDG
                        </motion.h1>
                        <motion.p initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }} className="mt-10 text-xl font-normal text-muted-foreground md:w-[600px]">
                            <q className="italic"> À la Clinique CMA, nous croyons que chaque patient mérite des soins exceptionnels. Notre mission est de vous accompagner avec compassion et professionnalisme. </q>
                        </motion.p>
                        <p className="mt-10 text-xl font-bold md:w-[600px] text-green-700">Mme. Mvom Awawou Njoya epse ACHIDI - PDG de CMA</p>
                    </div>
                    
                </div>
            </motion.div>
        </div>

    </div>
     );
}
 
export default AfunaQuote;