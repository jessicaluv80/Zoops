import React, { Component } from 'react';
import ReactPropTypes from 'prop-types'

    class Addfun extends Component {
        static propTypes = {
            name: ReactPropTypes.string.isRequired,
            city: ReactPropTypes.string.isRequired,
            age: ReactPropTypes.number.isRequired,
            link: ReactPropTypes.string.isRequired
        }
        render () {
            return (
                <p> 
                    <header><h3>Create Your Own Fun Kids Event or Places Here!</h3></header>
                        <form>
                            <label> Name of Place or event:
                                <input type="text" name=' ' />
                            </label>

                            <label> City:
                                <input type="text" name=' ' />
                            </label>

                            <label> Ages:
                                <input type="text" number=' ' />
                            </label>

                            <label> Link:
                                <input type="text" name=' ' />
                            </label>

                                <input type="submit" submit="Submit" /> 
                        </form>
                </p>
            )
        }
    }    


export default Addfun;