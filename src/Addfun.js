import React, { Component } from 'react';
import ReactPropTypes from 'prop-types'

class Addfun extends Component {
    static propTypes = {
        name: ReactPropTypes.string.isRequired,
        city: ReactPropTypes.string.isRequired,
        link: ReactPropTypes.string.isRequired
    }
    render() {
        console.log(this.state)
        return (
            <p>
                <header><h3>Create Your Own Fun Kids Event or Places Here!</h3></header>
                <form>
                    <label> Name of Place or event:
                                <input type="text" name=' ' onChange={(e)=>{
                                    this.setState({
                                        eventName: e.target.value
                                    })
                                }}/>
                    </label>

                    <label> City:
                                <input type="text" name=' ' onChange={(e)=>{
                                    this.setState({
                                        eventCity: e.target.value
                                    })
                                }}/>
                    </label>

                    <label> Link to Website:
                                <input type="text" name=' ' onChange={(e)=>{
                                    this.setState({
                                        eventLink: e.target.value
                                    })
                                }} />
                    </label>

                    <input type="submit" submit="Submit" />
                </form>
            </p>
        )
    }
}


export default Addfun;