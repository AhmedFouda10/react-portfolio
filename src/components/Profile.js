import React from "react";
import profilePicture from "../assets/fouda.png";
// class component
class Profile extends React.Component{
    constructor(){
        super();
         this.myStyle={width:"300px" ,height:"300px" , borderRadius:"100px"};
         this.btnStyle={backgroundColor:"teal" ,color:"white" , fontSize:"18px"};
         this.state={displayBio : false};
         this.toggle=this.toggle.bind(this);
    }
    toggle(){
        // if(this.state.displayBio){
        //     // this.state.displayBio=false
        //     this.setState({displayBio : false});
        // }else{
        //     // this.state.displayBio=true
        //     this.setState({displayBio : true});
        // }
        this.setState({displayBio: !this.state.displayBio})
        console.log(this.state);

    }
    render(){
        return (
                <div>
                    <img src={profilePicture} style={this.myStyle} alt="profile"/>
                    <h1>Hello</h1>
                    <p>Ahmed Fouda : Software Developer</p>
                    {this.state.displayBio ? (
                        <div>
                            <p>I love programming and I love football</p>
                            <p>My favorite team is Al-Ahly</p>
                        <button onClick={this.toggle} style={this.btnStyle}>Hide</button>
                        </div>
                    ) : (
                        <button onClick={this.toggle} style={this.btnStyle}>Show More</button>
                    )}
                </div>
            );
        }
}

export default Profile;