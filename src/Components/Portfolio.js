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

const Section = styled.div `
    width: 100vw;
    height: 100vh;
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
    margin-bottom: 3vh;
    @media only screen and (max-width: 1024px) {
        margin: 3vh auto;
    }
`;

const LetterSpan = styled.span`
    display: inline-block;
    margin: 1px;
    font-size: 5rem;
    &:hover {
        color: ${randomColor};
        transition: all .3s ease-out;
        animation: ${rubberBand} linear 1s;
        cursor: default;
    }
`;

const SlideContainer = styled.div `
    width: 100vw;
`;

const Slide = styled.div ``;

const Portfolios = styled.div`
    display: flex;

    @media only screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const Image = styled.div `
    width: 600px;
    height: 400px;
    background: url(${props => props.bgURL}) no-repeat;
    background-size: cover;
    background-position: center center;

    @media only screen and (max-width: 1024px) {
        width: 540px;
        height: 360px;
        margin-bottom: 2vh;
    }

    @media only screen and (max-width: 768px) {
        width: 330px;
        height: 220px;
        margin-bottom: 2vh;
    }
`;

const Description = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 5vw;
`;

const Site = styled.span `
    font-size: 3.5rem;
    margin-bottom: 2vh;
    color: #DFAC37;

    &:hover {
        cursor: pointer;
        color: #C5480A; 
        text-decoration: underline;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Summary = styled.span `
    font-size: 3.5rem;
    margin-bottom: 0.5vw;

    @media only screen and (max-width: 1024px) {
        font-size: 3rem;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Content = styled.p `
    font-size: 2.5rem;
    margin-bottom: 2vw;

    @media only screen and (max-width: 1024px) {
        font-size: 2rem;
    }
    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Portfolio = () => {
    const value = useRef();
    const [letterUnit, setLetterUnit] = useState();
    
    useEffect(() => {
        let letter = value.current.innerText.split("");
        setLetterUnit(letter);
    }, [value]);


    return (
        <Section className="section">
            <Container>
                <HiddenValue HiddenValue ref={value}>Portfolio</HiddenValue>

                <MainTitle>
                    {letterUnit && letterUnit.map((letter, index) => {
                        return (
                            <LetterSpan>{letter}</LetterSpan>
                            )
                        })}
                </MainTitle>

                <SlideContainer>
                    <Slide className="slide">
                        <Portfolios>
                            <Image bgURL={require(`assets/seecreen.gif`).default}></Image>
                            <Description>
                                <Site>#<a href="https://seecreen.netlify.app" target="_black">https://seecreen.netlify.app</a></Site>
                                <Summary># Overview</Summary>
                                <Content>영화, TV상영작을 소개하는 웹사이트</Content>
                                <Summary># Role </Summary>
                                <Content>
                                    &#10003;  영화, TV 현재상영작, 인기순위<br />
                                    &#10003;  검색기능 <br />
                                    &#10003;  상세보기
                                </Content>
                                <Summary># Stack </Summary>
                                <Content>React, CSS(Styled Component), TMDB API(The Movie DB) </Content>
                            </Description>
                        </Portfolios>
                    </Slide>
                    <Slide className="slide">
                        <Portfolios>
                            <Image bgURL={require(`assets/lolcord.gif`).default}></Image>
                            <Description>
                                <Site>#<a href="https://lolcord.netlify.app" target="_black">https://lolcord.netlify.app</a></Site>
                                <Summary># Overview</Summary>
                                <Content>게임 리그오브레전드의 아이템정보를 찾아볼 수 있는 웹사이트</Content>
                                <Summary># Role </Summary>
                                <Content>
                                    &#10003;  아이템 검색 &amp; 필터 기능 <br />
                                    &#10003;  상세보기 <br />
                                    &#10003;  조합식
                                </Content>
                                <Summary># Stack </Summary>
                                <Content>React, CSS(Styled Component), Riot API</Content>
                            </Description>
                        </Portfolios>
                    </Slide>
                </SlideContainer>
            </Container>
        </Section>
    );
}

export default Portfolio;