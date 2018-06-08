import React, { Component } from 'react';
import ReactPropTypes from 'prop-types'

class Addfun extends Component {
    static propTypes = {
        submitEvent: ReactPropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                <header><h3>Create Your Own Fun Kids Event or Places Here!</h3></header>
                
                    <label> Name of Place or event:
                                <input type="text" name=' ' onChange={(e) => {
                            this.setState({
                                eventName: e.target.value
                            })
                        }} />
                    </label>

                    <label> City:
                                <input type="text" name=' ' onChange={(e) => {
                            this.setState({
                                eventCity: e.target.value
                            })
                        }} />
                    </label>

                    <label> Link to Website:
                                <input type="text" name=' ' onChange={(e) => {
                            this.setState({
                                eventLink: e.target.value
                            })
                        }} />
                    </label>

                    <button  onClick={() => {
                        
                        this.props.submitEvent({
                            name: this.state.eventName,
                            city: this.state.eventCity,
                            link: this.state.eventLink
                        })
                        
                    }} >submit</button>

            </div>
        )
    }
}


export default Addfun;