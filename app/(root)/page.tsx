import Image from "next/image";
import HeroText from "./_components/hero";
import NavigationBar from "./_components/navbar";
import WelcomePage from "./_components/section-one";
import AfunaStatistics from "./_components/statistics";
import AfunaQuote from "./_components/quote";

const HomePage = () => {
    return (
        <section className="h-screen overflow-x-hidden relative"> {/* Change made here */}
            {/* Move NavigationBar outside of sub_page */}
            <NavigationBar />
            <div className="sub_page">
                <div className="h-[90vh] relative">
                    <Image
                        src="/hero.jpg" // Replace with your image path
                        alt="Hero Image"
                        layout="fill"
                        objectFit="cover"
                        className="hero_image"
                    />
                    <HeroText />
                </div>
                <section className="min-h-[720px] bg-white w-full flex items-center justify-center">
                    <WelcomePage />
                </section>
                <section className="min-h-[500px] bg-[#cbf0ff] w-full">
                    <AfunaStatistics />
                </section>
                <section className="min-h-[720px] bg-white w-full">
                    <AfunaQuote />
                </section>
            </div>
        </section>
    );
}

export default HomePage;