import Footer6 from "@/components/footers/Footer6";
import Header6 from "@/components/headers/Header6";
import Home6 from "@/components/homes/home-6";
import Hero1 from "@/components/homes/home-6/heros/Hero1";
import Hero2 from "@/components/homes/home-6/heros/Hero2";
import Image from "next/image";
import dynamic from "next/dynamic";
import { fancyOnepage } from "@/data/menu";
import ParallaxContainer from "@/components/common/ParallaxContainer";
export const metadata = {
  title:
    "ParkSight Waitlist - Find & List Parking Spaces || Join the Future of Parking",
  description:
    "Join ParkSight waitlist - The revolutionary parking marketplace where drivers find parking spaces and hosts list their spots. Be among the first to experience seamless parking.",
};

export default function Home6ImageParallaxOnepage() {
  return (
    <>
      <div className="theme-fancy">
        <div className="page" id="top">
          <div className="dark-mode">
            <nav className="main-nav dark transparent light-after-scroll stick-fixed wow-menubar wch-unset">
              <Header6 links={fancyOnepage} />
            </nav>{" "}
          </div>
          <main id="main">
            <ParallaxContainer
              className="home-section bg-dark-1 bg-dark-alpha-80 light-content parallax-5 scrollSpysection"
              style={{
                backgroundImage:
                  "url(/assets/images/hero_image.png)",
              }}
              id="home"
            >
              <Hero2 />
            </ParallaxContainer>

            <Home6 onePage />
          </main>
          <footer className="page-section footer bg-dark-1 light-content pb-30">
            <Footer6 />
          </footer>
        </div>{" "}
      </div>
    </>
  );
}
