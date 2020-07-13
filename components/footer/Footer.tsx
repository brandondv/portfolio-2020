import React from "react";
import styled from "styled-components";
import { Ava } from "./Ava";
import { Button } from "./Button";
import { Container } from "./Container";
import { FooterText } from "./FooterText";
import { FooterTitle } from "./FooterTitle";

const StyledFooter = styled.footer`
    width: 100%;
    min-height: 100vh;
    padding: 6rem 0 4rem;
    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <Ava src="/ava.jpg" />

                <FooterTitle text="Who the?" />

                <FooterText>
                    I'm Brandon. Front-end developer, from The Netherlands. I'm
                    ever curious about the world. Driven to explore new
                    techniques and find new things to learn.
                </FooterText>

                <Button href="https://www.linkedin.com/in/brandondv/">
                    Say Hello
                </Button>
            </Container>
        </StyledFooter>
    );
};
