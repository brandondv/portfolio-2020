import styled from "styled-components";

export const Button = styled.a`
    position: relative;
    margin: 3rem auto 0;
    display: inline-block;
    padding: 1rem 2.5rem;
    border-radius: 1rem;
    font-size: 2.4rem;
    background-color: #66bb6a;
    color: white;
    appearance: none;
    border: none;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    outline: none;
    transition: background-color 0.2s ease, color 0.2s ease;
    text-decoration: none;

    &:before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: 0.4rem double #66bb6a;
        z-index: -1;
        border-radius: inherit;
        opacity: 0;
        transform: scale3d(0.6, 0.6, 1);
        transition: transform 0.3s, opacity 0.3s;
        transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    }

    &:hover,
    &:focus {
        background-color: transparent;
        color: #66bb6a;

        &:before {
            transform: scale3d(1, 1, 1);
            opacity: 1;
        }
    }
`;
