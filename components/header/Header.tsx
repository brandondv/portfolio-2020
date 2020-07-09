import React from "react";
import styled from "styled-components";
import { Link } from "./Link";
import { LinkList } from "./LinkList";
import { Letter } from "./Letter";
import { Column } from "./Column";
import { ColorsBackground } from "./ColorsBackground";
import { ColumnSide } from "./ColumnSide";
import { TextContainer } from "./TextContainer";
import { Container } from "./container";
import { SubTitle } from "./SubTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faTwitter,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { colors } from "styles/colors";

const StyledHeader = styled.div`
    position: relative;
    z-index: 1;
`;

const name = "BRANDON";

export const Header: React.FC = () => {
    return (
        <StyledHeader>
            <ColorsBackground>
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
            </ColorsBackground>
            <TextContainer>
                <SubTitle>Frontend developer</SubTitle>
                <LinkList>
                    <Link href="//twitter.com/bdv95" target="_blank">
                        <FontAwesomeIcon icon={faTwitter} fixedWidth />
                    </Link>
                    <Link href="//linkedin.com/in/brandondv/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} fixedWidth />
                    </Link>
                    <Link href="//github.com/brandondv" target="_blank">
                        <FontAwesomeIcon icon={faGithub} fixedWidth />
                    </Link>
                </LinkList>
            </TextContainer>
        </StyledHeader>
    );
};
