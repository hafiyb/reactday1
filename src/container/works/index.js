import React from "react";


export default class Works extends React.Component{
    render(){
        return(
            <div className="flex-col" style={{justifyContent:'space-between', alignItems:'center'}}>
                <div className="flex-col" style={{textAlign:'center', margin:'70px'}}>
                    <h2>
                        How it works
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum
                    </p>
                </div>
                <div className="flex-row" style={{justifyContent:'space-between', width:'50vw'}}>
                    <div className="flex-col" style={styles.card}>
                        <div style={styles.cardImg}>

                        </div>
                        <h3>
                            Information
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                        </p>
                    </div>
                    <div className="flex-col" style={styles.card}>
                        <div style={styles.cardImg}>

                        </div>
                        <h3>
                            Data Secure
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                        </p>
                    </div>
                    <div className="flex-col" style={styles.card}>
                        <div style={styles.cardImg}>

                        </div>
                        <h3>
                            Add Cards
                        </h3>
                        <p>
                        Lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem
                        </p>
                    </div>
                </div>
            </div>
        )

    
    }
}

const styles = {
    card:{
        width: '30%',
        height: '250px',
        // border: '1px solid black',
        textAlign: 'center'
    },
    cardImg:{
        height:'50%',
        backgroundColor:'purple'
    }
}