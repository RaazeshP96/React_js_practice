import React, { Component } from "react";
import Add from "./components/Add";
import Edit from "./components/Edit";
import View from "./components/View";
import { Container, Input } from "semantic-ui-react";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            users: [
                { id: 1, name: "ram", username: "ram" },
                { id: 3, name: "shyam", username: "shyam" },
                { id: 2, name: "hari", username: "hari" },
            ],
            query: "",
            result: [],
        };
    }

    searchOnChange = (event) => {
        const value = event.target.value;
        const { users } = this.state;
        this.setState({ query: value });
        const results = users.filter((user) => {
            const regex = new RegExp(value, "gi");
            return user.name.match(regex);
        });
        this.setState({ results });
    };
    handleChild = (fromChild) => {
        const { users } = this.state;
        this.setState({
            users: [...users, fromChild],
        });
    };
    render() {
        const { users, query, results } = this.state;
        const data = results.length === 0 && !query ? users : results;
        return (
            <Container>
                <Add action={this.handleChild} />
                <div class="ui icon input">
                    <Input
                        type="text"
                        placeholder="Search..."
                        onChange={this.searchOnChange}
                    />
                    <i aria-hidden="true" class="search icon"></i>
                </div>
                <View data={data} my="sujit"></View>
                <Edit></Edit>
            </Container>
        );
    }
}
