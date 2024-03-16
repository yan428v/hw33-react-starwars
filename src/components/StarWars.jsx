import React, {Component} from 'react';

class StarWars extends Component {

    componentDidMount() {
        console.log("StarWars Mount");
    }

    componentWillUnmount() {
        console.log("StarWars Unmount");
    }

    render() {
        return (
            <div>
              Star Wars
            </div>
        );
    }
}

export default StarWars;