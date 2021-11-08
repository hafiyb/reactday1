import React from "react";


export default class Works extends React.Component{
    render(){
        return(
            <div className="flex-row" style={{padding:'0 150px', margin:'50px 0'}}>
                <div style={styles.boxHalf2}>

                </div>
                <div className="flex-col" style={styles.boxHalf1}>
                    <h2>Download</h2>
                    <p> Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum</p>
                    
                    <button className="button-white"style={{width:'100px', height:'50px'}}>App Store</button>
                    <button className="button-white"style={{width:'100px', height:'50px'}}>Play Store</button>
                </div>
            
            </div>
        )
    }
}

const styles = {
    boxHalf1 : {
        height:'500px',
        width:'100%',
        // border: '1px solid black',
        padding:'70px 70px',
        justifyContent:'space-between'
    },
    
    boxHalf2 : {
        height:'500px',
        width:'100%',
        // border: '1px solid black',
        backgroundColor: 'purple'
    }
}