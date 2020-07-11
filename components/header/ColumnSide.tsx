import styled from "styled-components";
import { mediaQuery } from "styles/mediaQuery";

export const ColumnSide = styled.div`
    flex: 1 1 0;
    background-color: ${({ bgColor }: { bgColor: string }) => bgColor};

    &:last-of-type {
        margin-left: 5rem;
    }
`;
