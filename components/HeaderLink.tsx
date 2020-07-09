import React from "react";
import styled from "styled-components";
import { mediaQuery } from "styles/mediaQuery";

const StyledListItem = styled.li`
    display: inline-block;

    & + & {
        margin-left: 4rem;
    }
`;

const StyledLink = styled.a`
    color: black;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: block;
    width: 4.5rem;
    height: 4.5rem;
    position: relative;
    transition: background 0.3s ease-in-out;
    font-size: 2.8rem;
    line-height: 4.5rem;
    mix-blend-mode: screen;

    &:hover {
        background: white;
    }

    @media ${mediaQuery.md} {
        width: 7rem;
        height: 7rem;
        font-size: 4rem;
        line-height: 7rem;
    }
`;

export default function HeaderLink(props) {
    return (
        <StyledListItem>
            <StyledLink {...props}></StyledLink>
        </StyledListItem>
    );
}
