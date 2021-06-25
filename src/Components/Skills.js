import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';



const rubberBand = keyframes`
    from {
        transform: scale3d(1, 1, 1);
    }

    30% {
        transform: scale3d(1.25, 0.75, 1);
    }

    40% {
        transform: scale3d(0.75, 1.25, 1);
    }

    50% {
        transform: scale3d(1.15, 0.85, 1);
    }

    65% {
        transform: scale3d(.95, 1.05, 1);
    }

    75% {
        transform: scale3d(1.05, .95, 1);
    }

    to {
        transform: scale3d(1, 1, 1);
    }
`;

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    padding-left: 300px;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const HiddenValue = styled.div`
    display: none;
`;

const Title = styled.div`
    display: flex;
    margin-bottom: 4vh;
`;

const LetterSpan = styled.div`
    cursor: default;
    display: inline-block;
    font-size: 3rem;
    height: 50px;

    &:hover {
        color: ${props => props.color};
        transition: all .3s ease-out;
        animation: ${rubberBand} linear 1s;
    }
`;



const SkillList = styled.div`
    display: flex;
    flex-direction: column;
`;


const ImageContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    margin-top: 0.5vh;
    margin-bottom: 5vw;
`;

const Span = styled.span`
    font-size: 30px;
`;

const Image = styled.div`
    width: 100px;
    height: 70px;
    background: url(${props => props.bgURL}) no-repeat;
    background-position: center center;
    background-size: contain;
    z-index: 20;
    &:first-child {
        width: 170px;
    }
`;



const Skills = () => {
    const value = useRef();
    const [letterUnit, setLetterUnit] = useState();

    useEffect(() => {
        let letter = value.current.innerText.split("");
        setLetterUnit(letter);
    }, [value]);

    const randomColor = `hsla(${Math.floor(Math.random() * 10000)}, 98%, 56%, 0.25)`;

    return (
        <Section className="section">
            <Container>
                <HiddenValue ref={value}>Skills &amp; Experience</HiddenValue>
                <Title> 
                    {letterUnit && letterUnit.map((letter, index) => {
                        return (
                            (index === 6 && `　`) ||
                            (index === 8 && `　`) ||
                            <LetterSpan color={randomColor}>{letter}</LetterSpan>
                        )
                    })}
                </Title>

                <SkillList>
                    <Span>FrontEnd</Span>
                    <ImageContainer>
                        <Image bgURL={require(`assets/html-image.png`).default} />
                        <Image bgURL={require(`assets/sass-logo.png`).default} />
                        <Image bgURL={require(`assets/react-logo.png`).default} />
                    </ImageContainer>

                    <Span>BackEnd</Span>
                    <ImageContainer>
                        <Image bgURL={require(`assets/spring.png`).default} />
                        <Image bgURL={require(`assets/mysql.png`).default} />
                    </ImageContainer>

                    <Span>Version Control &#38; Deployment</Span>
                    <ImageContainer>
                        <Image bgURL={require(`assets/github.png`).default} />
                        <Image bgURL={require(`assets/git-logo.png`).default} />
                        <Image bgURL={require(`assets/netlify.png`).default} />
                    </ImageContainer>
                </SkillList>
            </Container>
        </Section>
    );
}

export default Skills;