import React, { Component } from 'react';
import Funcomp from './Funcomp';

class Fun extends Component {
    state = {
        location1: {
            name: "Lagoon",
            city: "Farmington",
            age: "All ages",
            link: "http://www.lagoonpark.com/"

        },
        location2: {
            name: "Boondocks",
            city: "Draper",
            age: "All ages",
            link: "https://www.boondocks.com/"
        },
        location3: {
            name: "Hogle Zoo",
            city: "Salt Lake City",
            age: "All ages",
            link: "https://www.hoglezoo.org/"
        }
    }
    render() {
            return (
                <div> 
                    <header className="App-header">
                        <u>For more information click on the links below</u>
                    </header>
                    <Funcomp name={this.state.location1.name} city={this.state.location1.city} age={this.state.location1.age} link={this.state.location1.link} />
                    <Funcomp name={this.state.location2.name} city={this.state.location2.city} age={this.state.location2.age} link={this.state.location2.link} />
                    <Funcomp name={this.state.location3.name} city={this.state.location3.city} age={this.state.location3.age} link={this.state.location3.link} />
                </div>
            )
        }
    }


export default Fun