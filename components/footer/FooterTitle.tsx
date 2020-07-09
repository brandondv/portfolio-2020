import React from "react";
import { colors } from "styles/colors";
import styled from "styled-components";
import { ColoredLetter } from "./ColoredLetter";

const Title = styled.h2`
    font-size: 6rem;
    margin: 2rem 0 1rem;
    color: $color-green;
    font-family: "Norican", cursive;
`;

export const FooterTitle: React.FC<{ text: string }> = ({ text }) => {
    let letterIndex = -1;

    return (
        <Title>
            {text.split("").map((letter) => {
                if (letter !== " ") {
                    letterIndex++;
                }

                const color = colors[letterIndex];

                return (
                    <ColoredLetter key={`${letter}_${color}`} color={color}>
                        {letter}
                    </ColoredLetter>
                );
            })}
        </Title>
    );
};
