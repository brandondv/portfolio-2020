// import Head from "next/head";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitch,
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { Header } from "components/Header";
import { Head } from "next/document";

const Home = () => {
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
