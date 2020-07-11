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

const StyledHeader = styled.div`
    position: fixed;
    z-index: 1;
    width: 100%;
`;

export const Header: React.FC = () => {
    return (
        <>
            <StyledHeader>
                <ColorsBackground />
                <TextContainer>
                    <SubTitle>Frontend developer</SubTitle>
                    <LinkList>
                        <Link href="//twitter.com/bdv95" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} fixedWidth />
                        </Link>
                        <Link
                            href="//linkedin.com/in/brandondv/"
                            target="_blank"
                        >
                            <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                        </Link>
                        <Link href="//github.com/brandondv" target="_blank">
                            <FontAwesomeIcon icon={faGithub} fixedWidth />
                        </Link>
                    </LinkList>
                </TextContainer>
            </StyledHeader>
            <div style={{ height: "5rem" }}></div>
        </>
    );
};
