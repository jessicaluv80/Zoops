import React, { Component } from 'react';


class Home extends Component {
    render () {
        return (
        <div>
            <div className = "flex-container" >
            <img src="ZoopZ-JH_Revised.jpg" alt="ZoopZ-logo" />
    
                <h2> <b> About Zoops:</b> Zoops helps you find fun places and activities for all family fun and events </h2>   
                <h3> <input type="button" alt="On Click" value="Sign in"/></h3>
        </div>
        <div className = "flex-container2" >

<div> Enter information below to let Zoops help you have Family Fun!(Below Top Container in styled container) </div>

        </div>    

        <div> Input Buttons below instructions </div>

        <div> After all search criteria is met a enter a submit button </div>

        <div> Links to websites that meet search criteria results </div>

        <div> Right Aside bars with photos and videos of fun!!! </div>

        <div> Footer has legal jargon and zoops contact info </div>

    

     </div>
        )
    }
}

export default Home;