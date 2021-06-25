import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

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
    animation: ${fadein} 2s;
    padding-left: 300px;
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;


const Title = styled.div`
    font-size: 3rem;
    user-select: none;
    z-index: 10;

    &:hover {
        cursor: default;
    }
`;

const HiddenValue = styled.div`
    display: none;
`;

const MainTitle = styled.div`
    margin-bottom: 1rem;
`;

const LetterSpan = styled.span`
    display: inline-block;
    margin: 1px;
    font-size: 4rem;
    &:hover {
        color: ${props => props.color};
        transition: all .3s ease-out;
        animation: ${rubberBand} linear 1s;
    }
`;

const Name = styled.span`
    font-size: 3.5rem;
    color: #F0FF33;
    text-shadow: .15rem .15rem #DC8011;
`;

const SubTitle = styled.p`
    font-size: 1.5rem;
    text-decoration: underline;
`;

const Home = () => {
    const value = useRef();
    const [letterUnit, setLetterUnit] = useState();

    useEffect(() => {
        let letter = value.current.innerText.split("");
        letter.splice(6, 0, '1');
        letter.splice(19, 0, '1');
        letter.splice(20, 0, '1');
        setLetterUnit(letter);
    }, [value]);

    const randomColor = `hsla(${Math.floor(Math.random() * 10000)}, 98%, 56%, 0.25)`;

    return (
        <Section className="section">
            <Container>
                <Title>
                    <HiddenValue ref={value}>
                        안녕하세요!신입프론트엔드 개발자 의      포트폴리오     웹사이트입니다.
                    </HiddenValue>

                    <MainTitle>
                        {letterUnit && letterUnit.map((letter, index) => {
                            return (
                                (index === 6 && <br />) ||
                                (index === 19 && <br />) ||
                                (index === 20 && <Name>이동아</Name>) ||
                                <LetterSpan color={randomColor}>{letter}</LetterSpan>
                            )
                        })}
                    </MainTitle>
                    <SubTitle>FRONTEND-DEVELOPER PORTFOLIO</SubTitle>
                </Title>
            </Container>
        </Section>
    );
}

export default Home;