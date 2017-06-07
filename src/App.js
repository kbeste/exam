import React, { Component } from 'react';
import UserForm from './UserForm';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import styles from './style.css';


class App extends Component {
  render() {
    return (
        <div className="App Container">
          <h1>Github viewer!</h1>

          <UserForm />
          <RepoList />
          <RepoDetails />
          
        </div>



    );
  }
}

export default App;



