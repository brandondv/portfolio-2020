import styled from "styled-components";
import { ColumnSide } from "./ColumnSide";
import { Container } from "./Container";
import { Column } from "./Column";
import { Letter } from "./Letter";
import { useViewportScroll, useTransform, useSpring } from "framer-motion";
import { colors } from "styles/colors";
import React from "react";

const Wrapper = styled.div`
    min-height: 100vh;
    min-height: calc(var(--vh, 1vh) * 100);
    display: flex;
    position: relative;
`;

export const ColorsBackground: React.FC = () => {
    const name = "BRANDON";

    const { scrollYProgress } = useViewportScroll();
    const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
    const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

    React.useEffect(() => {
        return yRange.onChange((v) => {
            return console.log(v);
        });
    }, [yRange]);

    return (
        <Wrapper>
            <ColumnSide bgColor={colors[0]} />
            <Container>
                {colors.map((color, index) => {
                    return (
                        <Column key={color} bgColor={color}>
                            <Letter>{name.charAt(index)}</Letter>
                        </Column>
                    );
                })}
            </Container>
            <ColumnSide bgColor={colors[colors.length - 1]} />
        </Wrapper>
    );
};
