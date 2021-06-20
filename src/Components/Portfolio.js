import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    padding-left: 350px;
`;

const Title = styled.div`
    font-size: 3rem;
`;


const Portfolio = () => {
    return (
        <Section className="section">
            <Title>Portfolio</Title>
        </Section>
    );
}

export default Portfolio;