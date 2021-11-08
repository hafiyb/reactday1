import React from "react";

export default class Footer extends React.Component{
    render(){
        return(
        <div className="flex-row bg-offwhite" style={{width:'100%', padding:'50px 20px', margin:'100px 0 0 0'}}>
            <div className="flex-col" style={{width:'40%', padding:'20px 50px'}}>
            <h3>Besnik</h3>
            <p style={{margin:'30px 0', color:'gray'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et leo ut eros luctus porttitor at ut turpis. Vestibulum sodales velit massa, tincidunt rutrum orci posuere lobortis. Quisque leo felis, iaculis nec blandit vitae.</p>
            </div>
            <div className="flex-col" style={styles.card}>
                <h4>Besnik</h4>
                <ul style={styles.list}>
                    <li>About</li>
                    <li>Terms of use</li>
                    <li>Privacy Policy</li>
                    <li>How it Works</li>
                    <li>Contact us</li>
                </ul>
            </div>
            <div className="flex-col" style={styles.card}>
            <h4>Support</h4>
            <ul style={styles.list}>
                <li>Support Carrer</li>
                <li>24h service</li>
                <li>Quick chat</li>
            </ul>
            </div>
            <div className="flex-col" style={styles.card}>
            <h4>Contact</h4>
            <ul style={styles.list}>
                <li>Whatsapp</li>
                <li>Support 24</li>

            </ul>
            </div>
        </div>
        )
    }
}

const styles = {
    card:{
        width:'20%',
        padding:'20px',
    },
    list:{
        listStyleType:'none',
        margin:'20px 0',
        color:'gray'
    }
}