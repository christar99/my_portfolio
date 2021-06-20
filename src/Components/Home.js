import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadein = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const Section = styled.div`
    animation: ${fadein} 2s;
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
`;

const Subtitle = styled.div`
    font-size: 1.5rem;
    text-decoration: underline;
`;

const Home = () => {
    return (
        <Section className="section">
            <Container>
                <Title>
                    FRONTEND-DEVELOPER PORTFOLIO
                    <Subtitle>안녕하세요! 신입프론트엔드 개발자 이동아의 포트폴리오 웹사이트입니다.</Subtitle>
                </Title>
            </Container>
        </Section>
    );
}

export default Home;