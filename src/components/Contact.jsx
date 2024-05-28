import React, {Component} from 'react';
import Form from "./Form.jsx";

class Contact extends Component {

    componentDidMount() {
        console.log("Contact Mount");
    }

    componentWillUnmount() {
        console.log("Contact Unmount");
    }

    render() {
        return (
            <Form/>
        );
    }
}

export default Contact;