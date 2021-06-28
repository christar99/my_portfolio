import React from 'react';
import ReactFullpage from "@fullpage/react-fullpage";
import GlobalStyle from "Components/GlobalStyle";
import Home from "Components/Home";
import ContactMe from "Components/ContactMe";
import Skills from "Components/Skills";
import Portfolio from "Components/Portfolio";
import Canvas from "Components/Canvas";
import "../src/Components/css/ForNavigation.css";

class App extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle /> 
                <Canvas />
                <ReactFullpage
                    menu={true}
                    navigation={true}
                    navigationPosition="left"
                    showActiveTooltip={true}
                    navigationTooltips={['Home','Skills','Portfolio', 'ContactMe']}
                    loopBottom={true}
                    scrollingSpeed={1500}
                    render={({state, fullpageApi}) => {
                        return (
                            <div id="fullpage-wrapper">
                                <Home />
                                <Skills />
                                <Portfolio />
                                <ContactMe />
                            </div>
                        );
                    }}
                />
            </>
        );
    }
}

export default App;