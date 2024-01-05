import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications";
import "../index.css";
import Courses from "./Courses";
import SocialProfiles from "./SocialProfiles";
import Title from "./Title";
// class component
class App extends React.Component{
    render(){
        return (
                <div>
                    <div className="row">
                        <Title />
                        <div className="column">
                            <Profile />
                        </div>
                        <div className="column">
                            <Qualifications />
                        </div>
                    </div>
                    <hr/>
                    <Courses />
                    <hr/>
                    <SocialProfiles />
                </div>
            );
        }
}

export default App;