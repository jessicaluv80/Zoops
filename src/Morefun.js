import React, { Component } from 'react';
import Addfun from './Addfun'

class Morefun extends Component {
    state = {
        events: []
    }


    createEvents = (event) => {
        console.log (event)
        // this.setState((prev) => {
        //     const existingEvent = prev.events
        //     existingEvent.push(event)

        //     return {
        //         events: existingEvent
        //     }
        // })
    }

    render() {
        return (
            <div><Addfun submitEvent={this.createEvents} /></div>
        )
    }
}

export default Morefun;