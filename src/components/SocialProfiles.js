import React from "react";
import socialProfiles from "../data/socialprofiles";

class SocialProfiles extends React.Component{
    render(){
        return (
            <div style={{textAlign:"center"}}>
                <h3>Connect With Me</h3>
                {
                    socialProfiles.map(profile=>{
                        return <SocialProfile key={profile.id}  socialprofileParam={profile} />
                    })
                }
            </div>
        )
    }
} 

class SocialProfile extends React.Component{
    render(){
        const {link , image} =this.props.socialprofileParam;
        return(
            <a href={link} target="_blank" rel="noreferrer">
                <img src={image} alt="Social" style={{width:20 , margin:5 }}/>
            </a>
        );
    }
}


export default SocialProfiles;