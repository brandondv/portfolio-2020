import React from "react";
import styled from "styled-components";
import { Column } from "./header/Column";
import { ColumnSide } from "./header/ColumnSide";
import { Container } from "./header/Container";
import { colors } from "styles/colors";

const Wrapper = styled.div`
    height: 1rem;
    display: flex;
`;

export const ColorLine = () => {
    return (
        <Wrapper>
            <ColumnSide bgColor={colors[0]} />
            <Container>
                {colors.map((color) => {
                    return <Column key={color} bgColor={color} />;
                })}
            </Container>
            <ColumnSide bgColor={colors[colors.length - 1]} />
        </Wrapper>
    );
};
