import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import { Facebook, FacebookIcon, InstagramIcon, Menu, X } from "lucide-react"; // Import icons from lucide-react
import Link from "next/link";

const AfunaFooter = () => {
    return ( 
        <>
         <footer className="flex md:flex-row flex-col justify-around h-full gap-8 text-white pt-8 md:p-10 p-6">
            <div className="flex flex-col items-center gap-y-8 md:w-[500px]">
                <h1 className="font-bold text-3xl">A Propos de Nous</h1>
                <p>
                LE CMA est un Centre Médical qui offre des soins de santé de haute qualité avec 
                 compassion et expertise. Notre mission 
                 est d&apos;améliorer le bien-être de chaque patient grâce à une approche personnalisée. Merci de nous choisir !
                </p>
                <p>
                    Suivez CMA sous les différentes plateformes pour être informé des dernières actualités.
                </p>
                <div className="flex gap-4">
                    <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-100">
                    <Link href={"https://www.facebook.com/share/15sqW3dqMj/"}>
                                <FacebookIcon className="fill-white text-black"/>
                            </Link>
                    </div>
                    <div className="p-2 rounded-full bg-gray-100 hover:bg-gray-100">
                    <Link href={"https://www.facebook.com/share/15sqW3dqMj/"}>
                                <InstagramIcon className="text-black"/>
                            </Link>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center gap-y-8 md:w-[500px]">
            <h1 className="font-bold text-3xl">Entreprise</h1>
            <ul className="gap-4 flex flex-col text-center">
                <li>À Propos</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
            </div>
            <div className="flex flex-col items-center gap-y-8 md:w-[500px]">
            <h1 className="font-bold text-3xl">Contactez Nous</h1>
                <ul className="gap-4 flex flex-col text-center">
                    <li className="flex items-center gap-2">
                        <Mail size={20} className="mr-2" />
                        <a href={"mailto:afunaclinic@gmail.com"}>afunaclinic@gmail.com</a>
                    </li>
                    <li className="flex items-center gap-2">
                        <Phone size={20} className="mr-2" />
                        <a href={"mailto:afunaclinic@gmail.com"}>+237 6 55 69 04 48</a>
                    </li>
                </ul>
            </div>
        </footer>
        <div className="flex justify-around md:flex-row flex-col items-center gap-4 text-black p-4 border-t-2">
            <Image
                src={"/logo.png"}
                alt="solux-logo"
                height={120}
                width={120}
            />
            <span className="text-white flex xs:text-center">&copy; {new Date().getFullYear()} All rights reserved. 
          
        </span>
        <span className="text-white flex xs:text-center">Built by <a className="ml-2 text-blue-400">Novus Technlogies</a></span>
        </div>
        </>
       
     );
}
 
export default AfunaFooter;