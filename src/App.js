//file name: ../src/App.js
import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/searchbox.component';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            users: [],
            searchField: ''
         }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({users: users}))
    }

    handleChange = (e) => {
        this.setState({searchField: e.target.value});
    }
    
    render() { 
        //deconstruct this.state.users and this.state.searchField from this.state
        const { users, searchField } = this.state;
        //filtering out user.name from {users} array
        const filterUsers = users.filter(user => user.name.toLowerCase().includes(searchField.toLowerCase()));
        
        return ( 
            <div className="App">
                <h1>Users Rodolex</h1>
                <SearchBox placeholder="search user...." handleChange={this.handleChange} />
                <CardList users={filterUsers} />
            </div>
         );
    }
}
 
export default App;