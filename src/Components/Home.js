import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';


const randomColor = `hsla(${Math.floor(Math.random() * 10000)}, 98%, 56%, 0.25)`;

const fadein = keyframes`
    from {
        opacity: 0.3;
        color: ${randomColor};
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
    padding-left: 300px;
    width: 100vw;

    @media only screen and (max-width: 1024px){
        padding: 0;
    }
`;

const Container = styled.div`
    width: 55vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 768px){
        width: 75vw;
    }
`;


const Title = styled.div`
    width: 768px;
    display: inline-block;
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
    width: 100%;
    margin-bottom: 1vh;
    display: inline-block;
    
    @media only screen and (max-width: 768px){
        min-width: 260px;
        width: 75vw;
    }
`;

const LetterSpan = styled.span`
    display: inline-block;
    margin: 1px;
    font-size: 5.5rem;
    animation: ${fadein} ${props => props.index * 0.3}s;
    position: relative;
    
    &:hover {
        color: ${randomColor};
        transition: all .3s ease-out;
        animation: ${rubberBand} linear 1s;
    }

    @media only screen and (max-width: 1024px){
        font-size: 3.5rem;
    }

    @media only screen and (max-width: 768px){
        font-size: 3rem;
    }
`;

const Name = styled.span`
    font-size: 6.5rem;
    color: #F0FF33;
    text-shadow: .3rem .3rem #DC8011;

    @media only screen and (max-width: 1024px){
        font-size: 3.7rem;
    }

    @media only screen and (max-width: 768px){
        font-size: 3.2rem;
    }
`;

const SubTitle = styled.p`
    width: 55vw;
    font-size: 3.5rem;
    text-decoration: underline;

    @media only screen and (max-width: 768px){
        font-size: 1.5rem;
        min-width: 300px;
    }
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
                                <LetterSpan index={index}>{letter}</LetterSpan>
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