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
    padding-left: 300px;

    @media only screen and (max-width: 1024px) {
        padding: 0;
    }
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

const MainTitle = styled.div `
    margin-bottom: 2rem;
    @media only screen and (max-width: 1024px) {
        margin: 0 auto;
        margin-bottom: 5vh;
    }
`;

const LetterSpan = styled.span`
    display: inline-block;
    margin: 1px;
    font-size: 6rem;
    &:hover {
        color: ${randomColor};
        transition: all .3s ease-out;
        animation: ${rubberBand} linear 1s;
        cursor: default;
    }
    @media only screen and (max-width: 768px) {
        font-size: 4rem;
    }
`;

const Content = styled.div`
    display: flex;
    width: 100vw;
    height: 25vh;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`;

const Preformatted = styled.pre` 
    font-size: 2.5rem;
    margin-right: 5vw;
    @media only screen and (max-width: 1024px) {
        margin-bottom: 5vh;
        margin-right: 0;
        text-align: center;
    }
    @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
    }
`;

const Contact = styled.div`
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const ContactItems = styled.div`
    font-size: 2.5rem;
    display: flex;
    align-items: center;
    
    &:hover {
        :not(:nth-child(1)) {
            color: #8E8E8E;
        }
    }

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 3vh;
    }
`;

const Image = styled.div`
    width: 35px;
    height: 35px;
    margin-right: 10px;
    display: inline-block;
    background: url(${props => props.bgURL});
    background-size: cover;
    background-position: center center;

    @media only screen and (max-width: 768px) {
        width: 20px;
        height: 20px;
    }
`;


const ContactMe = () => {
    const value = useRef();
    const [letterUnit, setLetterUnit] = useState();
    
    useEffect(() => {
        let letter = value.current.innerText.split("");
        setLetterUnit(letter);
    }, [value]);


    return (
        <Section className="section">
            <Container>
                <HiddenValue HiddenValue ref={value}>ContactMe</HiddenValue>

                <MainTitle>
                    {letterUnit && letterUnit.map((letter, index) => {
                        return (
                            <LetterSpan>{letter}</LetterSpan>
                        )
                    })}
                </MainTitle>

                <Content>
                    <Preformatted>
                        저는 HTML5, CSS3, Javascript(ES5~ES8)를 <br />
                        기반으로 웹의 전반적인 지식을 가지고 있으며, <br />
                        React를 사용한 Single Page Application 개발에 자신있습니다. <br /><br />

                        특히, Javascript를 통해 사용자의 움직임에 따라 반응할수 있게 하는,  <br />
                        동적인 웹페이지 제작에 흥미를 가지며, 매일 공부하고 있습니다. <br /><br />

                        여러분들과 함께 성장하고 싶습니다. 감사합니다! 
                    </Preformatted>

                    <Contact>
                        <ContactItems><Image bgURL={require(`assets/call.png`).default}/> 010-2509-8547</ContactItems>
                        <ContactItems><Image bgURL={require(`assets/mail.png`).default}/> <a href="mailto:christar99@naver.com">christar99@naver.com</a></ContactItems>
                        <ContactItems><Image className="3rd-img" bgURL={require(`assets/github2.png`).default}/><a href="https://github.com/christar99">Github Account</a></ContactItems>
                    </Contact>
                </Content>
            </Container>
        </Section>
    );
}

export default ContactMe;