import React from "react";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import { ColorLine } from "components/ColorLine";
import ReactGA from "react-ga";

const Home = () => {
    React.useEffect(() => {
        if (process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID) {
            ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
            ReactGA.pageview(window.location.pathname);
        }

        window.scrollTo(0, 0);

        // Fixing the view height for mobile
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    }, []);

    return (
        <>
            <Header />

            {/* <main>
                // Put the portfolio pieces here.
            </main> */}

            <Footer />

            <ColorLine />
        </>
    );
};

export default Home;
