import styled from "styled-components";
import { mediaQuery } from "styles/mediaQuery";

export const Letter = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    font-size: 5rem;
    line-height: 0.8;
    position: absolute;
    top: calc(50% - 0.5em);
    right: 9.5rem;
    mix-blend-mode: soft-light;

    background-color: black;
    color: rgba(0, 0, 0, 0.3);
    text-shadow: 0.2rem 0.2rem 0.3rem rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;

    @media ${mediaQuery.xs} {
        font-size: 9rem;
        right: 8.5rem;
    }
    @media ${mediaQuery.sm} {
        font-size: 11rem;
    }
    @media ${mediaQuery.md} {
        font-size: 20rem;
        right: 7.5rem;
    }
    @media ${mediaQuery.lg} {
        font-size: 25rem;
    }
    @media ${mediaQuery.xl} {
        font-size: 30rem;
    }
    @media ${mediaQuery.xxl} {
        font-size: 40rem;
    }
`;
