import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const randomColor = `hsla(${Math.floor(Math.random() * 10000)}, 98%, 56%, 0.25)`;

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

    @media only screen and (max-width:1024px) {
        padding: 0;
    }
`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media only screen and (max-width: 1024px) {
        align-items: center;
    }
`;

const HiddenValue = styled.div`
    display: none;
`;

const Title = styled.div`
    display: flex;
    margin-bottom: 4.5vh;
    @media only screen and (max-width: 768px) {
        margin-bottom: 2vh;
    }
`;

const LetterSpan = styled.div`
    cursor: default;
    display: inline-block;
    font-size: 6rem;

    &:hover {
        color: ${randomColor};
        transition: all .3s ease-out;
        animation: ${rubberBand} linear 1s;
    }

    @media only screen and (max-width: 768px) {
        font-size: 3.3rem;
    }
`;

const Button = styled.div`
    width: 50px;
    height: 50px;
    background: url(${props => props.bgURL});
    background-size: cover;
    margin-left: 20px;
    margin-top: 10px;

    &:hover {
        cursor: pointer;
    }

    @media only screen and (max-width:768px) {
        width: 30px;
        height: 30px;
        margin: 0 10px;
    }
`;

const ExplainArea = styled.div`
    width: 250px;
    height: 90px;
    background-color: #D1D1D1;
    display: ${props => props.isButtonClicked ? "block" : "none"};
    position: absolute;
    margin-left: 210px;
    margin-top: 10px;
    border-radius: 10px;

    &::after {
        border-top: 10px solid transparent; 
        border-left: 0px solid transparent; 
        border-right: 15px solid #D1D1D1;
        border-bottom: 10px solid transparent; 
        content: "";
        position: absolute;
        left: -15px;
        top: 10px;

        @media only screen and (max-width:768px) {
            border-top: 0px solid transparent; 
            border-left: 10px solid transparent; 
            border-right: 10px solid transparent;
            border-bottom: 5px solid #D1D1D1; 
            left: 90px;
            top: -5px;
        }
    }

    @media only screen and (max-width:768px) {
        margin: 0;
        margin-top: 35px;
        width: 200px;
        height: 70px;
    }
`;

const Proficiency = styled.div `
    height: 30px;
    line-height: 30px;
    font-size: 2rem;
    color: #181818;

    @media only screen and (max-width:768px) {
        font-size: 1.5rem;
        height: 20px;
        padding: 2px;
    }
`;

const SkillContainer = styled.div`
    display: flex;
    margin-bottom: 50px;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        margin-left: 20vw;
    }
`;

const SkillTitle = styled.span`
    width: 160px;
    font-size: 4rem;
    margin-right: 50px;

    @media only screen and (max-width: 1024px) {
        margin-bottom: 2vh;
    }
    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 1vh;
    }
`;

const SkillList = styled.ul`
    width: 750px;
    display: flex;
    flex-wrap: wrap;

    @media only screen and (max-width: 768px) {
        width: 400px;
    }
`;

const Skill = styled.li`
    width: 300px;
    list-style: disc;
    font-size: 2.3rem;
    margin-right: 50px;
    margin-bottom: 10px;

    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
        width: 150px;
        margin-bottom: 1vh;
        margin-right: 20px;
        margin-left: 10px;
    }
`;


const Skills = () => {
    const value = useRef();
    const [letterUnit, setLetterUnit] = useState();
    const [isButtonClicked, setIsButtonClicked] = useState(false);

    useEffect(() => {
        let letter = value.current.innerText.split("");
        setLetterUnit(letter);
    }, [value]);

    const buttonClick = () => {
        setIsButtonClicked(!isButtonClicked);
    }

    return (
        <Section className="section">
            <Container>
                <HiddenValue ref={value}>Skills</HiddenValue>
                <Title> 
                    {letterUnit && letterUnit.map((letter, index) => {
                        return (
                            (index === 6 && `　`) ||
                            (index === 8 && `　`) ||
                            <LetterSpan>{letter}</LetterSpan>
                        )
                    })}
                    <Button 
                        onClick={buttonClick}
                        bgURL={require(`assets/explainButton-1.png`).default} 
                    />
                    <ExplainArea isButtonClicked={isButtonClicked}>
                        <Proficiency>🌞 개발가능수준</Proficiency>
                        <Proficiency>🌘 취미로개발</Proficiency>
                        <Proficiency>🌚 기초수준 or 배운적이 있음</Proficiency>
                    </ExplainArea>
                </Title>

                <SkillContainer>
                    <SkillTitle>FrontEnd</SkillTitle>
                    <SkillList>
                        <Skill>🌞 HTML5</Skill>
                        <Skill>🌞 CSS3</Skill>
                        <Skill>🌞 JavaScript(ES5, ES6, ES7) </Skill>
                        <Skill>🌞 React(React-hook)</Skill>
                        <Skill>🌞 Styled-Component</Skill>
                        <Skill>🌘 Sass</Skill>
                    </SkillList>
                </SkillContainer>
                <SkillContainer>
                    <SkillTitle>BackEnd</SkillTitle>
                    <SkillList>
                        <Skill>🌚 Java</Skill>
                        <Skill>🌚 Apache</Skill>
                        <Skill>🌚 Spring</Skill>
                        <Skill>🌚 MySQL</Skill>
                        <Skill>🌚 Oracle</Skill>
                    </SkillList>
                </SkillContainer>
                <SkillContainer>
                    <SkillTitle>ETC</SkillTitle>
                    <SkillList>
                        <Skill>Git / GitHub (형상관리, Version Control)</Skill>
                        <Skill>VSCode(Tool)</Skill>
                        <Skill>netlify </Skill>
                    </SkillList>
                </SkillContainer>

            </Container>
        </Section>
    );
}

export default Skills;