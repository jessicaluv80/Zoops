import React, { Component } from 'react'

class Funcomp extends Component {
    render() {
        return (
            <article>
                <h2>{this.props.name}</h2>
                <h5>{this.props.city}</h5>
                <h6>{this.props.age}</h6>
                <a target="_blank" href={this.props.link}>{this.props.link}</a>
            </article>        
        )
    }
}
export default Funcomp