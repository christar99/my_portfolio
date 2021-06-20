import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    padding-left: 350px;
`;

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 40vh;
`;


const ContactMe = () => {
    return (
        <Section className="section">
            <Title>ContactMe</Title>
        </Section>
    );
}

export default ContactMe;