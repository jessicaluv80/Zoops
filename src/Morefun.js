import React, { Component } from 'react';
import Addfun from './Addfun'
import { Redirect } from 'react-router-dom'

class Morefun extends Component {
    state = {
        events: [],
        redirect: false

    }

    getEvents = async () => {
        try {
            const eventsResponse = await fetch('http://localhost:3001/fun')
            const events = await eventsResponse.json()
            this.setState({ events })
        } catch (error) {
            this.setState({ errorMessage: error })
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

        try {
            const postEventResponse = await fetch('http://localhost:3001/fun', postInit)
            await postEventResponse.json()
            this.setState({
                redirect: true
            })

        } catch (error) {
            console.log(error)
            this.setState({ errorMessage: error })
        }
    }

    putEvent = async (eventToUpdate) => {
        const postInit = {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'apllication/json'
            },
            body: JSON.stringify(eventToUpdate)

        }

        try {
            const updatedEventResponse = await fetch('http://localhost:3001/fun', postInit)
            const event = await updatedEventResponse.json()
            this.updateEvent(event)
        } catch (error) {
            console.log(error)
            this.setState({ errorMessage: error })
        }

    }


    render() {
        if (this.state.redirect === true) {
            return (<Redirect to="/fun" />)
        }
        return (
            <div><Addfun submitEvent={this.postEvent} /></div>
        )
    }
}




export default Morefun;