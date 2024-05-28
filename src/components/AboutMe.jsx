import React, {Component} from 'react';
import {base_url} from "../utils/constants.jsx";

class AboutMe extends Component {
    //TODO create (min 7 fields)
    // https://sw-info-api.herokuapp.com/v1/peoples/3

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }


    componentDidMount() {
        console.log("About Me Mount");
        fetch(`${base_url}/v1/peoples/3`)
            .then(response => response.json())
            .then(data => {
                this.setState(
                    {
                        data: data
                    }
                )
            })
    }

    componentWillUnmount() {
        console.log("About Me Unmount");
    }

    
    render() {
        return (
            <div>
                About Me:
                <h2>Name: {this.state.data.name}</h2>
                <h2>Created: {this.state.data.created}</h2>
                <h2>Gender: {this.state.data.gender}</h2>
                <h2>Skin color: {this.state.data.skin_color}</h2>
                <h2>Height: {this.state.data.height}</h2>
                <h2>Birth day: {this.state.data.birth_year}</h2>
                <img src="https://sw-info-api.herokuapp.com/r2-d2.jpg" alt="r2-d2"/>
            </div>
        );
    }


}

export default AboutMe;