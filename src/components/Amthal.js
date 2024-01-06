import React , {Component} from "react";

class Amthal extends Component{
    constructor(){
        super();
        this.state={mathal : {} ,amthal : []};
        this.fetchAmthal =this.fetchAmthal.bind(this);
    }
    componentDidMount(){
        fetch("http://localhost:3005/amthal/random")
            .then((response) => response.json())
            .then((json) => this.setState({mathal : json}));
    }
    async fetchAmthal(){
        try {
            const response = await fetch("http://localhost:3005/amthal/ten")
            .then((response) => response.json())
            .then((json) => this.setState({amthal : json}));
            
            console.log(response)           
            
        } catch (error) {
            console.log(error)           
        }
    }
    render(){
        return(
            <div>
                <h2>Amthal</h2>
                <p>{this.state.mathal.title}</p>
                <hr/>
                <h3>you need more from amthals?</h3>
                <button className="btn" onClick={this.fetchAmthal}>Amthal</button>
                {
                    this.state.amthal.map(mathal =>{
                        return <p key={mathal.id}>{mathal.title}</p>
                    })
                }
            </div>
        );
    }
}

export default Amthal;