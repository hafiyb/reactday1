import React from "react";

export default class Header extends React.Component{
    render(){
        return(
            <div className="flex-row just-space-around" style={{padding:'20px', alignItems:'center'}}>
                <h3>Besnik</h3>
                <ul className="flex-row just-space-around" style={{width:'300px', listStyleType:'none'}}>
                    <li>Business</li>
                    <li>Pricing</li>
                    <li>Features</li>
                    <li>About</li>
                </ul>
                <div>
                    <a>Log In</a>
                    <button className="button-black" style={{width:'100px', height:'40px', margin:'0 10px'}}>Sing Up</button>
                </div>
            </div>
        )
    }
}

// const styles = {

// }

