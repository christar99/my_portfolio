import React from 'react';
import styled from 'styled-components';

const Section = styled.div `
    width: 100vw;
    height: 100vh;
    padding-left: 300px;
`;

const Container = styled.div `
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Title = styled.div `
    font-size: 3rem;
    margin-bottom: 2rem;
`;

const Slide = styled.div `
    width: 100%;
`;

const Image = styled.div `
    width: 600px;
    height: 400px;
    background: url(${props => props.bgURL}) no-repeat;
`;

const Description = styled.div `
    width: 30vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    margin-left: 20px;
`;

const Site = styled.span `
    width: 24.5vw;
    font-size: 2vw;
    margin-bottom: 2vw;

    &:hover {
        cursor: pointer;
        color: #838383;
    }
`;

const Summary = styled.span `
    font-size: 2vw;
    margin-bottom: 0.5vw;
`;

const Content = styled.p `
    font-size: 1.5vw;
    margin-bottom: 2vw;
`;

const Portfolio = () => {
    return (
        <Section className="section">
            <Container>
                <Title>Portfolio</Title>
                <Slide className="slide">
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
                </Slide>
                <Slide className="slide">
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
                </Slide>
            </Container>
        </Section>
    );
}

export default Portfolio;