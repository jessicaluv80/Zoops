import React, { Component } from 'react';



class Home extends Component {
        render() {
                return (
                        <div>
                                <div className="flex-container1" >
                                        <img src="ZoopZ-JH_Revised.jpg" alt="ZoopZ-logo" />

                                        <header classname="App-header">
                                        <b> ZoopZ</b> helps you find fun places and activities for all family fun and events </header>
                                        <h3> <input type="button" alt="On Click" value="Sign in" /></h3>
                                </div>
                                <div className="flex-container2" >

                                        <p> Enter information below to let Zoops help you have Family Fun!</p>

                                </div>
                                <div>
                                        <div className="flex-container3" >
                                                
                                                        <form>
                                                                <label>
                                                                        How Many Kids:
                                                                           <input type="text" qty="kids" />
                                                                </label>
                                                                <label>
                                                                        Ages:
                                                                                <input type="text" age="age" />
                                                                </label>    
                                                                <label>
                                                                        Zip Code:
                                                                                <input type="text" zip="zip"/>
                                                                </label>
                                                                        
                                                                        <input type="submit" submit="Submit" />                                                              
                                                        </form>
                                                
                                        </div>
                                </div>
                                                        <div>

                                                                

                                                                <div> Photos and videos of fun!!! </div>

                                                                <div> Footer has legal jargon and zoops contact info </div>

                                                        </div>
                        </div>

                                                )
                                        }
                                }
                                
export default Home;