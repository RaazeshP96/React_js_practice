import React, { Component } from "react";
import { Table, Button } from "semantic-ui-react";

export default class View extends Component {
    render() {
        let { data } = this.props;
        return (
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Usename</Table.HeaderCell>
                        <Table.HeaderCell>Action</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map((user) => (
                        <Table.Row>
                            <Table.Cell>{user.name}</Table.Cell>
                            <Table.Cell>{user.username}</Table.Cell>
                            <Table.Cell>
                                <Button color="teal">Edit</Button>
                                <Button color="red">Delete</Button>
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        );
    }
}
