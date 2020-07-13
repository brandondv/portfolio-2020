import React from "react";
import styled from "styled-components";
import { Column } from "./Column";
import { ColumnSide } from "./ColumnSide";
import { Container } from "./Container";
import { Letter } from "./Letter";
import { colors } from "styles/colors";
import { useViewportScroll, useAnimation, Variants } from "framer-motion";

const Wrapper = styled.div`
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    position: relative;
`;

export const ColorsBackground: React.FC = () => {
    const name = "BRANDON";

    const variants: Variants = {
        shown: (i: number) => ({
            y: 0,
        }),
        hidden: (i: number) => ({
            y: "-99%",
            transition: {
                duration: 1,
                delay: i * 0.03,
            },
        }),
    };

    return (
        <Wrapper>
            <ColumnSide bgColor={colors[0]} />

            <Container>
                {colors.map((color, index) => {
                    return (
                        <Column
                            key={color}
                            bgColor={color}
                            custom={index}
                            variants={variants}
                        >
                            <Letter>{name.charAt(index)}</Letter>
                        </Column>
                    );
                })}
            </Container>

            <ColumnSide bgColor={colors[colors.length - 1]} />
        </Wrapper>
    );
};
