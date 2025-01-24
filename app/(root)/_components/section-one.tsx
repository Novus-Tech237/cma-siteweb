"use client"
import Image from "next/image";
import { motion } from "framer-motion";
import AboutInfo from "./about-info";
import { Ambulance, Baby, Brain, FlaskConical, Heart, PillBottle, Smartphone, Stethoscope, Users2 } from "lucide-react";
const WelcomePage = () => {
    return ( 
        <div className="flex items-center justify-center h-full md:px-2 overflow-hidden text-black">
            <div className="md:px-32 md:py-10 px-10 py-5">
                <div className="mb-[60px]">
                    <span className="subheading">Starter </span>
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-10"
                >
                    <div className="xs:container flex md:flex-row flex-col md:justify-between items-center p-8">
                    <div className="relative"> {/* Added relative positioning */}
                            <Image
                                src={"/waiting-1.jpg"}
                                width={500}
                                height={800}
                                alt="Header"
                                className="rounded-lg"
                            />
                            
                        </div>
                        <div className="md:p-6 md:ml-[4rem]">
                            <motion.h1 initial={{ x: 100, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="font-bold text-4xl mt-10 md:w-[550px] w-[300px]">
                               Un Espace de Détente pour Vous
                            </motion.h1>
                            <motion.p initial={{ y: 20, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: "easeOut" }} className="mt-10 text-xl font-normal text-muted-foreground md:w-[600px]">
                                À la Clinique CMA, chaque moment compte. Notre salle d&apos;attente confortable permet aux patients de se détendre avant leur consultation, tandis que notre équipe d&apos;experts est prête à offrir des soins de qualité dans un environnement chaleureux.
                            </motion.p>
                            

                        </div>
                        
                    </div>
                </motion.div>


                {/* Content Page */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mt-10"
                >
                    <div className="relative mb-[2rem] md:hidden block"> {/* Added relative positioning */}
                        <Image
                            src={"/consultation.jpg"}
                            width={500}
                            height={800}
                            alt="Header"
                            className="rounded-lg transform scale-x-[-1]"
                        />
                        {/* New Image at the bottom corner */}
                        <div className="absolute -bottom-12 -right-10  p-2 rounded-lg  flex items-center justify-center"> {/* Card style */}
                            <Image
                                src={"/images/imago-2.jpg"} // Replace with the new image path
                                width={170} // Adjust width as necessary
                                height={150} // Adjust height as necessary
                                alt="Corner Image"
                                className="rounded-lg xl:w-[17rem]" // Rounded corners for the image
                            />
                        </div>
                    </div>
                    <div className="xs:container md:flex md:flex-row flex-col md:justify-around items-center p-8 mt-[8rem]">
                    
                        <div className="md:p-6">
                            <span className="text-2sm font-semibold text-muted-foreground text-yellow-900">
                                Avantage clés de nos services
                            </span>
                            <h1 className="font-bold text-4xl mt-10 md:w-[550px] w-[300px]">
                            Améliorez Votre Santé avec la Clinique CMA
                            </h1>
                            <p className="mt-10 text-xl font-normal text-muted-foreground md:w-[600px]">
                            À la Clinique CMA, nous vous offrons des soins de qualité et une expérience de santé exceptionnelle grâce à notre équipe de professionnels qualifiés et à notre technologie innovante.
                            </p>
                            <div className="mt-10 flex-col items-center md:gap-y-8">
                                <AboutInfo
                                    title={"Stratégie de Soins Innovante"}
                                    description={
                                        "CMA utilise des outils modernes pour assurer un suivi médical efficace et des consultations adaptées à vos besoins. Nos services incluent des diagnostics précis et des traitements personnalisés, le tout soutenu par des ressources informatives accessibles."
                                    }
                                    icon={Stethoscope}
                                />
                                <AboutInfo
                                    title={"Design Accueillant"}
                                    description={
                                        "Notre clinique est conçue pour votre confort, avec une ambiance moderne et apaisante qui facilite votre expérience. Chaque détail est pensé pour vous permettre de vous concentrer sur ce qui est vraiment important : votre santé."
                                    }
                                    icon={Heart}
                                />
                                <AboutInfo
                                    title={"Support et Communauté"}
                                    description={
                                        "Vous avez des questions ? Notre équipe est à votre disposition pour vous aider. N'hésitez pas à nous contacter ou à rejoindre notre communauté de patients pour partager vos expériences et obtenir des conseils."
                                    }
                                    icon={Users2}
                                />
                            </div>
                        </div>
                        <div className="relative hidden md:block"> {/* Added relative positioning */}
                            <Image
                                src={"/consultation.jpg"}
                                width={500}
                                height={800}
                                alt="Header"
                                className="rounded-lg transform scale-x-[-1]"
                            />
                            {/* New Image at the bottom corner */}
                            <div className="absolute -bottom-12 -right-10  p-2 rounded-lg bg-white flex items-center justify-center"> {/* Card style */}
                                <Image
                                    src={"/consultation.jpg"} // Replace with the new image path
                                    width={170} // Adjust width as necessary
                                    height={150} // Adjust height as necessary
                                    alt="Corner Image"
                                    className="rounded-lg xl:w-[17rem]" // Rounded corners for the image
                                />
                            </div>
                        </div>
                    </div>
                    <div className="xs:container md:flex md:flex-row flex-col md:justify-around items-center p-8 ">
                    
                    <div className="flex flex-col gap-[6rem]">
                    <div className="relative hidden md:block mr-12"> {/* Added relative positioning */}
                        <Image
                            src={"/new-born.jpg"}
                            width={500}
                            height={800}
                            alt="Header"
                            className="rounded-lg transform scale-x-[-1]"
                        />
                        {/* New Image at the bottom corner */}
                        <div className="absolute -bottom-12 -right-10 bg-white p-2 rounded-lg  flex items-center justify-center"> {/* Card style */}
                            <Image
                                src={"/salle.jpg"} // Replace with the new image path
                                width={170} // Adjust width as necessary
                                height={150} // Adjust height as necessary
                                alt="Corner Image"
                                className="rounded-lg xl:w-[17rem]" // Rounded corners for the image
                            />
                        </div>
                    </div>
                    <div className="relative hidden md:block mr-12"> {/* Added relative positioning */}
                        <Image
                            src={"/pharmacy.jpg"}
                            width={500}
                            height={800}
                            alt="Header"
                            className="rounded-lg"
                        />
                        {/* New Image at the bottom corner */}
                        <div className="absolute -bottom-12 -left-10 bg-white p-2 rounded-lg  flex items-center justify-center"> {/* Card style */}
                            <Image
                                src={"/lab.jpg"} // Replace with the new image path
                                width={170} // Adjust width as necessary
                                height={150} // Adjust height as necessary
                                alt="Corner Image"
                                className="rounded-lg xl:w-[17rem]" // Rounded corners for the image
                            />
                        </div>
                    </div>
                    </div>
                    
                    <div className="md:p-6">
                        <h1 className="font-bold text-4xl mt-10 md:w-[550px] w-[300px]">
                        Nos Départements de Soins
                        </h1>
                        <p className="mt-10 text-xl font-normal text-muted-foreground md:w-[600px]">
                        À la Clinique CMA, nous offrons une gamme complète de services médicaux pour répondre à tous vos besoins de santé. Chaque département est composé de professionnels expérimentés et dévoués, prêts à vous fournir des soins de la plus haute qualité dans un environnement accueillant et sécurisé. 
                        </p>
                        <div className="mt-10 flex-col items-center md:gap-y-8">
                            <AboutInfo
                                title={"Médecine Général et Chirugie"}
                                description={
                                    "Des soins complets pour toute la famille, incluant bilans de santé et vaccinations."
                                }
                                icon={Stethoscope}
                            />
                            <AboutInfo
                                title={"Pharmacie"}
                                description={
                                    "Une pharmacie sur place pour un accès facile à vos médicaments prescrits."
                                }
                                icon={PillBottle}
                            />
                            <AboutInfo
                                title={"Urgences"}
                                description={
                                    "Un service disponible 24h/24 pour répondre à toutes vos situations critiques."
                                }
                                icon={Ambulance}
                            />
                            <AboutInfo
                                title={"Pédiatrie et Maternité"}
                                description={
                                    "Des soins spécialisés pour les enfants, garantissant leur santé et leur bien-être. Un  accompagnement complet pour les futures mamans, de la grossesse à l'accouchement."
                                }
                                icon={Baby}
                            />
                            <AboutInfo
                                title={"Laboratoire"}
                                description={
                                    "Des analyses et tests diagnostiques réalisés sur place pour des résultats rapides et fiables"
                                }
                                icon={FlaskConical}
                            />
                        </div>
                    </div>
                </div>
                </motion.div>
            </div>
        </div>
    );
}
 
export default WelcomePage;