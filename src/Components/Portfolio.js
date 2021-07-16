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

    @media only screen and (max-width: 768px) {
        padding: 10px;
    }
`;


const HiddenValue = styled.div`
    display: none;
`;

const MainTitle = styled.div `
    margin-bottom: 3vh;
    top: 22vh;
    position: absolute;
    display: flex;
    @media only screen and (max-width: 1024px) {
        margin: 3vh auto;
        position: static;
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
    align-items: center;


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
    justify-content: flex-start;
    height: 100%;
    margin-left: 5vw;
    @media only screen and (max-width: 1024px) {
        margin: 0;
    }
`;

const Site = styled.span `
    font-size: 2.5rem;
    margin-bottom: 1vh;
    color: #DFAC37;

    &:hover {
        cursor: pointer;
        color: #C5480A; 
        text-decoration: underline;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2.5rem;
    }

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;



const GitHubLink = styled.span`
    font-size: 2.5rem;
    color: #DFAC37;
    margin-bottom: 1vh;

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }

    &:hover {
        cursor: pointer;
        color: #C5480A; 
        text-decoration: underline;
    }
`;

const Information = styled.div`
    display: ${props => props.isClick ? "none" : "block"};
`;

const Summary = styled.span `
    font-size: 2.5rem;
    margin-bottom: 1vh;

    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Content = styled.p `
    font-size: 2rem;
    margin-bottom: 2vw;

    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Click = styled.span`
    font-size: 2.5rem;
    color: white;
    display: flex;
    @media only screen and (max-width: 768px) {
        font-size: 2rem;
    }
`;

const Acquired = styled.div`
    margin-bottom: 1vh;
    margin-right: 10px;
    color: ${props => props.isClick ? "#C5480A" : "#DFAC37"};

    &:hover {
        cursor: pointer;
        color: #C5480A;
        text-decoration: underline;
    }


`;

const AcquiredContent = styled.div`
    font-size: 2rem;
    max-width: 500px;
    display: ${props => props.isClick ? "block" : "none"};

    @media only screen and (max-width: 768px) {
        font-size: 1.5rem;
        max-width: 350px;
    }
`;

const Item = styled.div`
    margin-bottom: 1rem;
`;


const Portfolio = () => {
    const value = useRef();
    const [letterUnit, setLetterUnit] = useState();
    const [isClick, setIsClick] = useState(false);
    
    useEffect(() => {
        let letter = value.current.innerText.split("");
        setLetterUnit(letter);
    }, [value]);

    const clickAcquired = () => {
        setIsClick(!isClick);
    }


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
                                <Site># 사이트: <a href="https://seecreen.netlify.app" target="_black">https://seecreen.netlify.app</a></Site>
                                <GitHubLink># 깃허브: <a href="https://github.com/christar99/seecreen" target="_black">https://github.com/christar99/seecreen</a></GitHubLink>
                                <Information isClick={isClick}>
                                    <Summary># 개요</Summary>
                                    <Content>영화, TV상영작을 소개하는 웹사이트</Content>
                                    <Summary># 역할 및 기능 </Summary>
                                    <Content>
                                        &#10003;  영화, TV 현재상영작, 인기순위<br />
                                        &#10003;  검색기능 <br />
                                        &#10003;  상세보기, 티저영상
                                    </Content>
                                    <Summary># 사용한 언어 및 API </Summary>
                                    <Content>React, CSS(Styled Component), TMDB API(The Movie DB) </Content>
                                </Information>
                                <Click> <Acquired onClick={clickAcquired} isClick={isClick}> # 프로젝트를 만들면서 습득한지식</Acquired> ☜ 클릭</Click>
                                <AcquiredContent isClick={isClick}>
                                    <Item>&#10003;  React Router에서 Redirect, Switch, BrowserRouter와 HashRouter등을 배움 <br /></Item>
                                    <Item>&#10003;  JSX표현식을 배움 <br /></Item>
                                    <Item>&#10003;  Router에서 Presenter와 Container를 나누어 체계화하는 방법 배움  <br /></Item>
                                    <Item>&#10003;  styled-component 사용방법 습득 및 활용 <br /></Item>
                                    <Item>&#10003;  axios를 사용하여 API호출하는 방법을 배움 <br /></Item>
                                    <Item>&#10003;  PropTypes를 사용함으로써, 변수의 타입을 지정하는법을 배움<br />  </Item>
                                </AcquiredContent>
                            </Description>
                        </Portfolios>
                    </Slide>


                    <Slide className="slide">
                        <Portfolios>
                            <Image bgURL={require(`assets/lolcord.gif`).default}></Image>
                            <Description>
                                <Site># 사이트: <a href="https://lolcord.netlify.app" target="_black">https://lolcord.netlify.app</a></Site>
                                <GitHubLink># 깃허브: <a href="https://github.com/christar99/lolcord" target="_black">https://github.com/christar99/lolcord</a></GitHubLink>
                                <Information isClick={isClick}>
                                    <Summary># 개요</Summary>
                                    <Content>게임 리그오브레전드의 아이템정보를 찾아볼 수 있는 웹사이트</Content>
                                    <Summary># 역할 및 기능 </Summary>
                                    <Content>
                                        &#10003;  아이템 검색 &amp; 필터 기능 <br />
                                        &#10003;  상세보기 <br />
                                        &#10003;  조합식
                                    </Content>
                                    <Summary># 사용한 언어 및 API </Summary>
                                    <Content>React, CSS(Styled Component), Riot API</Content>
                                </Information>
                                <Click> <Acquired onClick={clickAcquired} isClick={isClick}> # 프로젝트를 만들면서 습득한지식 </Acquired> ☜ 클릭</Click>
                                <AcquiredContent isClick={isClick}>
                                    <Item>&#10003;  API정보의 필요없는 문자를 제거하기위해, 문자열변환식(indexOf, split, replace등), 정규표현식의 사용함으로써, 이의 용도를 알게됨.<br /></Item>
                                    <Item>&#10003;  styled-componennt에서 props, keyframe, css의 상속등을 배움<br /></Item>
                                    <Item>&#10003;  미디어쿼리를 처음 배우고, 이를 적용<br /></Item>
                                </AcquiredContent>
                            </Description>
                        </Portfolios>
                    </Slide>
                </SlideContainer>
            </Container>
        </Section>
    );
}

export default Portfolio;