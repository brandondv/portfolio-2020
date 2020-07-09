import React from "react";
import styled from "styled-components";
import { mediaQuery, size } from "styles/mediaQuery";

const StyledHeader = styled.div`
    min-height: 100vh;
    display: flex;
    position: relative;

    &::after {
        content: "Frontend developer";
        position: absolute;
        display: block;
        top: calc(50% + 8rem);
        width: 100%;
        text-align: center;
        color: white;
        font-family: "Raleway", sans-serif;
        font-weight: 200;
        font-style: italic;
        letter-spacing: 0.5rem;
        font-size: 1.6rem;

        @media ${mediaQuery.xs} {
            font-size: 2rem;
        }
        @media ${mediaQuery.sm} {
            font-size: 3rem;
        }
        @media ${mediaQuery.md} {
            font-size: 4rem;
        }
        @media ${mediaQuery.lg} {
            font-size: 5rem;
        }
        @media ${mediaQuery.xl} {
            font-size: 6rem;
        }
        @media ${mediaQuery.xxl} {
            font-size: 8rem;
        }
    }
`;

const Container = styled.div`
    display: flex;
    width: 95vw;
    max-width: 200rem;
    min-height: 100%;
    margin: 0 auto;
`;

const Side = styled.div`
    flex: 1 1 0;
    background-color: ${({ bgColor }) => bgColor};

    &:last-of-type {
        flex-grow: 4;
        @media ${mediaQuery.xxl} {
            flex-grow: 1;
        }
    }
`;

const StyledHeaderColumn = styled.div`
    flex: 1 1 0;
    background-color: ${({ bgColor }) => bgColor};
    position: relative;
    overflow: hidden;
    box-shadow: -1rem 0 1rem 0 rgba(0, 0, 0, 0.1);
    transition: flex-grow 0.2s ease-in-out;

    &:hover {
        flex-grow: 1.4;
    }

    &:first-child {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }

    &:last-child {
        @media ${mediaQuery.xs} {
            overflow: visible;
        }
    }
`;

const StyledHeaderLetter = styled.div`
    font-family: "Raleway", sans-serif;
    font-weight: 800;
    font-size: 5rem;
    line-height: 0.8;
    position: absolute;
    top: calc(50% - 0.5em);
    right: -0.5rem;
    mix-blend-mode: soft-light;

    background-color: black;
    color: rgba(0, 0, 0, 0.3);
    text-shadow: 0.2rem 0.2rem 0.3rem rgba(255, 255, 255, 0.5);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;

    @media ${mediaQuery.xs} {
        font-size: 9rem;
        right: -1.5rem;
    }
    @media ${mediaQuery.sm} {
        font-size: 11rem;
    }
    @media ${mediaQuery.md} {
        font-size: 20rem;
        right: -3.5rem;
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

const colors = [
    "#66BB6A",
    "#26A69A",
    "#26C6DA",
    "#29B6F6",
    "#42A5F5",
    "#5C6BC0",
    "#7E57C2",
];

const name = "BRANDON";

export const Header = () => {
    return (
        <StyledHeader>
            <Side bgColor={colors[0]} />
            <Container>
                {colors.map((color, index) => {
                    return (
                        <StyledHeaderColumn key={color} bgColor={color}>
                            <StyledHeaderLetter>
                                {name.charAt(index)}
                            </StyledHeaderLetter>
                        </StyledHeaderColumn>
                    );
                })}
            </Container>
            <Side bgColor={colors[colors.length - 1]} />
        </StyledHeader>
    );
};
