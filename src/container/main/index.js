import React from "react";

export default class Main extends React.Component{
    render(){
        return(
            <div className="flex-row" style={{padding:'0 100px'}}>
                <div className="flex-col bg-offwhite" style={styles.boxHalf1}>
                    <p>30 Days Free Trial</p>
                    <h1>Life Should Be Easy</h1>
                    <p> Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum</p>
                    <button className="button-black"style={{width:'100px', height:'40px'}}>Get started</button>
                </div>
                <div style={styles.boxHalf2}>

                </div>
            </div>
        )
    }
}

const styles = {
    boxHalf1 : {
        height:'400px',
        width:'100%',
        // border: '1px solid black',
        padding:'70px 20px',
        justifyContent:'space-between'
    },

    boxHalf2 : {
        height:'400px',
        width:'100%',
        // border: '1px solid black',
        backgroundColor: 'purple'
    }
}
