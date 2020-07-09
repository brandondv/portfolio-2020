import styled from "styled-components";

export const ColoredLetter = styled.span`
    color: ${({ color }: { color: string }) => color};
    font: inherit;
`;
