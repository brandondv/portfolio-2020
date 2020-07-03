import Head from "next/head";
import React from "react";
import Particles, {
    OutMode,
    MoveDirection,
    InteractivityDetect,
} from "react-particles-js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTwitch,
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
    return (
        <>
            <Head>
                <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Brandon de Vries. Front-end developer.</title>
                <meta name="description" content="Dutch Front-end developer." />
                <meta name="author" content="Brandon de Vries" />
                <meta
                    property="og:title"
                    content="Brandon de Vries. Front-end developer."
                />
                <meta property="og:site_name" content="Brandon's Portfolio" />
                <link
                    href="https://fonts.googleapis.com/css?family=Lato|Playfair+Display"
                    rel="stylesheet"
                />
            </Head>

            <header className="header">
                <Particles
                    className="header__particles"
                    params={{
                        detectRetina: true,
                        fpsLimit: 60,
                        interactivity: {
                            detectsOn: InteractivityDetect.canvas,
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "push",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 2,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#2e42c5",
                            },
                            links: {
                                blink: true,
                                color: {
                                    value: "#4f5b60",
                                },
                                distance: 200,
                                enable: true,
                                opacity: 0.4,
                                width: 0.5,
                            },
                            move: {
                                direction: MoveDirection.none,
                                enable: true,
                                outMode: OutMode.out,
                                random: true,
                                speed: 2,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                    factor: 1000,
                                },
                                limit: 0,
                                value: 80,
                            },
                            opacity: {
                                random: true,
                                value: 0.5,
                            },
                            size: {
                                random: true,
                            },
                        },
                        pauseOnBlur: true,
                    }}
                />

                <div className="header__container">
                    <h1 className="header__title">Brandon de Vries</h1>
                    <h2 className="header__sub-title">Front-end developer</h2>
                    <ul className="header__links">
                        <li className="header__link">
                            <a href="//twitter.com/bdv95" target="_blank">
                                <FontAwesomeIcon icon={faTwitter} fixedWidth />
                            </a>
                        </li>
                        <li className="header__link">
                            <a
                                href="//linkedin.com/in/brandondv/"
                                target="_blank"
                            >
                                <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                            </a>
                        </li>
                        <li className="header__link">
                            <a href="//github.com/brandondv" target="_blank">
                                <FontAwesomeIcon icon={faGithub} fixedWidth />
                            </a>
                        </li>
                    </ul>
                </div>
            </header>

            {/* <main>
                // Put the portfolio pieces here.
            </main> */}

            <footer className="footer">
                <div className="footer__container">
                    <img src="/ava.jpg" className="footer__image" />
                    <h2 className="footer__title">Who the?</h2>

                    <p className="footer__text">
                        I'm Brandon. Front-end developer, from The Netherlands.
                        I'm ever curious about the world. Driven to explore new
                        techniques and find new things to learn.
                    </p>

                    <a
                        href="https://www.linkedin.com/in/brandondv/"
                        className="footer__button"
                    >
                        Say Hello
                    </a>
                </div>
            </footer>
        </>
    );
};

export default Home;
