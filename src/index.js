import React from "react";
import ReactDOM from "react-dom";
import ReactFullpage from "@fullpage/react-fullpage";
import GlobalStyle from "Components/GlobalStyle";
import Home from "Components/Home";
import ContactMe from "Components/ContactMe";
import Skills from "Components/Skills";
import Portfolio from "Components/Portfolio";
import "Components/ForNavigation.css";




class FullpageWrapper extends React.Component {
    render() {
        return (
            <>
                <GlobalStyle /> 
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
                                <Home/>
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

ReactDOM.render(<FullpageWrapper/>, document.getElementById("root"));

export default FullpageWrapper;
