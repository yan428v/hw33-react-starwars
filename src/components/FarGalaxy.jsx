import React, {Component} from 'react';
import {base_url} from "../utils/constants.jsx";

class FarGalaxy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'Loading...'
        }
    }

    componentDidMount() {
        const episode = Math.floor(1 + Math.random() * 6);
        fetch(`${base_url}/v1/films/${episode}`)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        text: data.opening_crawl
                    }
                )
            })
    }

    render() {
        return (
            <p className={"farGalaxy"}>{this.state.text}</p>
        );
    }
}

export default FarGalaxy;