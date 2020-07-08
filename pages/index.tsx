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

const Home = () => {
    return (
        <>
            {/* <Head>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
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
            </Head> */}

            <Header></Header>

            <header className="header">
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
