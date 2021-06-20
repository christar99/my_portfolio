import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    padding-left: 350px;
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
    margin-bottom: 40px;
`;



const ImageContainer = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    margin-bottom: 80px;
    margin-top: 30px;
`;

const Span = styled.span`
    font-size: 30px;
`;

const Image = styled.div`
    width: 125px;
    background: url(${props => props.bgURL}) no-repeat;
    z-index: 20;
    &:first-child {
        width: 220px;
    }
`;



const Skills = () => {
    return (
        <Section className="section">
            <Container>
                <Title>Skills</Title>

                <Span>FrontEnd</Span>
                <ImageContainer>
                    <Image bgURL={require(`assets/html-image.png`).default} />
                    <Image bgURL={require(`assets/ts-logo.png`).default} />
                    <Image bgURL={require(`assets/sass-logo.png`).default} />
                    <Image bgURL={require(`assets/react-logo.png`).default} />
                </ImageContainer>

                <Span>Version Control &#38; Deployment</Span>
                <ImageContainer>
                    <Image bgURL={require(`assets/github.png`).default} />
                    <Image bgURL={require(`assets/git-logo.png`).default} />
                    <Image bgURL={require(`assets/netlify.png`).default} />
                </ImageContainer>

            </Container>
        </Section>
    );
}

export default Skills;