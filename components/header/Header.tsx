import React from "react";
import styled from "styled-components";
import { Link } from "./Link";
import { LinkList } from "./LinkList";
import { ColorsBackground } from "./ColorsBackground";
import { TextContainer } from "./TextContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SubTitle } from "./SubTitle";
import {
    faGithub,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
    motion,
    useAnimation,
    useViewportScroll,
    Variants,
} from "framer-motion";

const StyledHeader = styled(motion.div)`
    position: fixed;
    z-index: 1;
    width: 100%;
`;

export const Header: React.FC = () => {
    const controls = useAnimation();
    const { scrollY } = useViewportScroll();

    React.useEffect(() => {
        scrollY.onChange((yPosition) => {
            controls.start(yPosition ? "hidden" : "shown");
        });
    }, []);

    const textParts: Variants = {
        shown: {
            opacity: 1,
            pointerEvents: "auto",
        },
        hidden: {
            opacity: 0,
            pointerEvents: "none",
        },
    };

    const headerPart: Variants = {
        shown: {
            pointerEvents: "auto",
        },
        hidden: {
            pointerEvents: "none",
        },
    };

    return (
        <StyledHeader
            animate={controls}
            initial={scrollY.get() ? "hidden" : "shown"}
            variants={headerPart}
        >
            <ColorsBackground />
            <TextContainer>
                <SubTitle variants={textParts}>Frontend developer</SubTitle>
                <LinkList variants={textParts}>
                    <Link href="//twitter.com/bdv95" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} fixedWidth />
                    </Link>
                    <Link href="//linkedin.com/in/brandondv/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                    </Link>
                    <Link href="//github.com/brandondv" target="_blank">
                        <FontAwesomeIcon icon={faGithub} fixedWidth />
                    </Link>
                </LinkList>
            </TextContainer>
        </StyledHeader>
    );
};
