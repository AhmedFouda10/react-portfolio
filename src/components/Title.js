import React , {Component} from "react";


const titles =[
    "I am a Software Developer",
    "I love programming and I love football",
    "My favorite team is Al-Ahly"
]
class Title extends Component{
    constructor(){
        super();
        this.state={index:0 , fadeIn:true};
    }

    componentDidMount(){
        this.animateTitles();
        this.timeout=setTimeout(()=>{
            this.setState({fadeIn: false})
        },2000);
    }

    componentWillUnmount(){
        clearInterval(this.titleInterval);
        clearTimeout(this.timeout);
    }

    animateTitles(){
         this.titleInterval=setInterval(()=>{
            const index = (this.state.index +1) % titles.length;
            this.setState({index , fadeIn : true});
        this.timeout=setTimeout(()=>{
                this.setState({fadeIn: false})
            },2000);
        },4000)
    }

    render(){
        return(
            <p className={this.state.fadeIn ? "title-fade-in" : "title-fade-out"}>
                i am {titles[this.state.index]}
            </p>
        );
    }
}

export default Title;