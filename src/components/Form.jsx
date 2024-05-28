import React, {Component} from 'react';
import {base_url} from "../utils/constants.jsx";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        console.log("Contact Mount");
        fetch(`${base_url}/v1/planets/`)
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
        console.log("Contact Unmount");
    }

    render() {
        return (
            <form>
                <div className="mb-3 mt-3">
                    <label htmlFor="email" className="form-label">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="pwd" className="form-label">Password:</label>
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd"/>
                </div>
                <div className="form-check mb-3">
                    <label className="form-check-label">
                        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                    </label>
                </div>
                <select className="form-select">
                    {this.state.data.map((obj) => {
                        return (
                            <option>{obj.name}</option>
                        )
                    })}
                </select>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
}

export default Form;