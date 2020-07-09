import styled from "styled-components";
import { mediaQuery } from "styles/mediaQuery";

export const SubTitle = styled.h2`
    color: white;
    font-family: "Norican", cursive;
    font-weight: 200;
    font-style: italic;
    letter-spacing: 0.5rem;
    font-size: 3rem;
    margin: 0 auto 4rem;

    @media ${mediaQuery.xs} {
        font-size: 4rem;
    }
    @media ${mediaQuery.sm} {
        font-size: 5rem;
    }
    @media ${mediaQuery.md} {
        font-size: 6rem;
    }
    @media ${mediaQuery.lg} {
        font-size: 7rem;
    }
    @media ${mediaQuery.xl} {
        font-size: 8rem;
    }
    @media ${mediaQuery.xxl} {
        font-size: 9rem;
    }
`;
