// functional component
// function App(){
//     const myStyle={textAlign:"center", backgroundColor:"yellow"};
//     return (
//         <div style={myStyle}>
//             <p >Hello World</p>
//             <p >Hello World</p>
//         </div>
//     );
// }

import React from "react";


// class component
class App extends React.Component{
    render(){
    const myStyle={textAlign:"center", backgroundColor:"yellow"};
        return (
                <div style={myStyle}>
                    <p >Hello World</p>
                    <p >Hello World</p>
                </div>
            );
        }
}

export default App;