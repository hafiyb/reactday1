import React from "react";


export default class Works extends React.Component{
    render(){
        return(
            <div className="flex-col">
                <div className="flex-col" style={{textAlign:'center', margin:'70px'}}>
                    <h2>
                        Subscribe Newsletter
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    </p>
                </div>
                <div className="flex-row" style={{justifyContent:'center'}}>
                    <input style={{height:'50px', width:'250px',border:'none', borderBottom:'1px solid grey'}} type="text" placeholder="Enter your email" />
                    <input style={{height:'50px', width:'100px'}} className="button-black" type="button" value="Get Email" />
                </div>
            </div>
        )
    }
}
