import React, { Component } from 'react';
import Addfun from './Addfun'

class Morefun extends Component {
    state = {
        events: []
    }


    createEvents = (event) => {
        console.log (event)
        this.setState((prev) => {
            const existingEvent = prev.events
            existingEvent.push(event)

            return {
                events: existingEvent
            }
        })
    }

    render() {
        return (
            <div><Addfun submitEvent={this.createEvents} /></div>
        )
    }
}

startPromise = (success) => {
}

getEvents = async () => {
    try {
        const eventsResponse = await fetch('  ')
        const events = await eventsResponse.json()
        this.setState({ events })
}       catch (error) {
            this.setState({  errorMessage: error })
        }
    }

    postEvent = async (eventToSave) => {
        const postInit = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventToSave)
            }
        }
    }

export default Morefun;