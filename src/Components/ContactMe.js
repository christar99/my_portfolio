import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
    width: 100vw;
    height: 100vh;
    padding-left: 300px;
`;

const Title = styled.div`
    font-size: 3rem;
    margin-bottom: 40vh;
`;

const Content = styled.pre`

`;


const ContactMe = () => {
    return (
        <Section className="section">
            <Title>ContactMe</Title>
            <Content>
                저는 HTML5, CSS3, Javascript(ES5~ES8)를 기반으로 한 웹의 전반적인 지식을 가지고 있으며, <br />
                React를 사용한 Single Page Application 개발에 자신있습니다. <br /><br />

                특히, Javascript를 통해 사용자의 움직임에 따라 반응할수 있게 하는,  <br />
                동적인 웹페이지 제작에 흥미를 가지며, 매일 공부하고 있습니다. <br /><br />

                여러분들과 함께 성장하고 싶습니다. 감사합니다! 
             </Content>
        </Section>
    );
}

export default ContactMe;