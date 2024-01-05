import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Header extends Component {
    constructor(){
        super();
         this.myStyle={display :"inline-block" , margin:10 ,marginButton :30};
    }
    render() {
        return (
            <div>
                <div>
                    <h3 style={this.myStyle}><Link to="/">Home</Link></h3>
                    <h3 style={this.myStyle}><Link to="/amthal">Amthal</Link></h3>
                </div>
            </div>
        );
    }
}

export default Header;