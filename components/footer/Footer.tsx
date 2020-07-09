import React from "react";
import styled from "styled-components";
import { Ava } from "./Ava";
import { Button } from "./Button";
import { Container } from "./Container";
import { FooterText } from "./FooterText";
import { Wrapper } from "./Wrapper";
import { FooterTitle } from "./FooterTitle";

const StyledFooter = styled.footer`
    width: 100%;
    height: 100vh;
    text-align: center;
`;

export const Footer = () => {
    return (
        <StyledFooter>
            <Wrapper>
                <Container>
                    <Ava src="/ava.jpg" />

                    <FooterTitle text="Who the?" />

                    <FooterText>
                        I'm Brandon. Front-end developer, from The Netherlands.
                        I'm ever curious about the world. Driven to explore new
                        techniques and find new things to learn.
                    </FooterText>

                    <Button href="https://www.linkedin.com/in/brandondv/">
                        Say Hello
                    </Button>
                </Container>
            </Wrapper>
        </StyledFooter>
    );
};
