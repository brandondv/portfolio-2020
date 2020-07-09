import styled from "styled-components";
import { mediaQuery } from "styles/mediaQuery";

export const Column = styled.div`
    flex: 1 1 0;
    background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
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
