import React from "react";
import { Header } from "components/Header";

const Home = () => {
    React.useEffect(() => {
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

            <div className="footer__wrapper">
                <footer className="footer">
                    <div className="footer__container">
                        <img src="/ava.jpg" className="footer__image" />
                        <h2 className="footer__title">Who the?</h2>

                        <p className="footer__text">
                            I'm Brandon. Front-end developer, from The
                            Netherlands. I'm ever curious about the world.
                            Driven to explore new techniques and find new things
                            to learn.
                        </p>

                        <a
                            href="https://www.linkedin.com/in/brandondv/"
                            className="footer__button"
                        >
                            Say Hello
                        </a>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;
