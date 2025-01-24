
import Image from "next/image";
import HeroText from "./_components/hero";
import NavigationBar from "./_components/navbar";
import WelcomePage from "./_components/section-one";
import AfunaStatistics from "./_components/statistics";
import AfunaQuote from "./_components/quote";
import AfunaContactUs from "./_components/contact";
import AfunaFooter from "./_components/footer";

const HomePage = () => {
    return (
        <section className="h-screen overflow-x-hidden">
            <div className="sub_page">
            <NavigationBar/>

                <div className="h-[90vh] relative">
                    <Image
                        src="/hero.jpg" // Replace with your image path
                        alt="Hero Image"
                        layout="fill"
                        objectFit="cover"
                        className="hero_image"
                    />
                   <HeroText/>
                </div>
                <section className="min-h-[720px] bg-white w-full flex items-center justify-center">
                    <WelcomePage/>
                </section>
                <section className="min-h-[500px] bg-[#cbf0ff] w-full">
                    <AfunaStatistics/>
                </section>
                <section className="min-h-[720px] bg-white w-full">
                    <AfunaQuote/>
                </section>
                <section className="min-h-[720px] bg-gradient-to-b from-[#cbf0ff] to-[#080728] w-full">
                    <AfunaContactUs/>
                </section>
                <section className="min-h-[400px] bg-[#080729] w-full">
                    <AfunaFooter/>
                </section>
            </div>
        </section>
    );
}

export default HomePage;