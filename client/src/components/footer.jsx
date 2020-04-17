import React from 'react';


export default class Footer extends React.Component {

    render() {
        return (
            <div style={{textAlign:"center", backgroundColor:"#343a40", padding:5}}>
                <code style={{fontSize: 11, color: "white"}}>Made by Daniel || <a style={{color:'rgba(232, 87, 77)'}} href="https://github.com/incrediblejagur/rsa_covid-19/issues">Report Bug</a>
                </code>
                </div>
        )
    }
}