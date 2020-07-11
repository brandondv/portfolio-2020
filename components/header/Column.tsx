import styled from "styled-components";
import { mediaQuery } from "styles/mediaQuery";
import { motion } from "framer-motion";

export const Column = styled(motion.div)`
    flex: 1 1 0;
    background-color: ${({ bgColor }: { bgColor: string }) => bgColor};
    position: relative;
    overflow: hidden;
    box-shadow: -1rem 0 1rem 0 rgba(0, 0, 0, 0.1);
    margin-right: -10rem;
    padding-right: 10rem;

    &:first-child {
        box-shadow: 0 0 0 rgba(0, 0, 0, 0);
    }

    &:last-child {
        @media ${mediaQuery.xs} {
            overflow: visible;
        }
    }
`;
