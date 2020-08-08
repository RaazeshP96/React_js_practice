import React from "react";
import { Button, Modal, Form } from "semantic-ui-react";
import { v4 as uuidv4 } from "uuid";

class Add extends React.Component {
    constructor() {
        super();
        this.state = {
            id: uuidv4(),
            name: "",
            username: "",
        };
    }
    onInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.action(this.state);
        this.setState({
            name: "",
            username: "",
        });
    };
    render() {
        const { name, username } = this.state;
        return (
            <Modal trigger={<Button>Add New Users</Button>}>
                <Modal.Header>Add New User</Modal.Header>
                <Modal.Content>
                    <Form onSubmit={this.onFormSubmit}>
                        <Form.Field>
                            <label for="name">Full Name</label>
                            <input
                                placeholder="Full Name"
                                name="name"
                                onChange={this.onInputChange}
                                value={name}
                            />
                        </Form.Field>
                        <Form.Field>
                            <label for="username">Username</label>
                            <input
                                placeholder="Username"
                                name="username"
                                onChange={this.onInputChange}
                                value={username}
                            />
                        </Form.Field>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Modal.Content>
            </Modal>
        );
    }
}
export default Add;
