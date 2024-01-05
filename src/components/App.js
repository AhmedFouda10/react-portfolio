import React from "react";
import Profile from "./Profile";
import Qualifications from "./Qualifications";
import "../index.css";
import Courses from "./Courses";
// class component
class App extends React.Component{
    render(){
        return (
                <div>
                    <div className="row">
                        <div className="column">
                            <Profile />
                        </div>
                        <div className="column">
                            <Qualifications />
                        </div>
                    </div>
                    <hr/>
                    <Courses />
                </div>
            );
        }
}

export default App;