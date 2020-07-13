import React from "react";
import { Header } from "components/header/Header";
import { Footer } from "components/footer/Footer";
import { ColorLine } from "components/ColorLine";

const Home = () => {
    React.useEffect(() => {
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
