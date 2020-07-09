import styled from "styled-components";
import { mediaQuery } from "styles/mediaQuery";

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${mediaQuery.md} {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }
`;
