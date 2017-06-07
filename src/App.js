import React, { Component } from 'react';
import UserForm from './UserForm';
import RepoList from './RepoList';
import RepoDetails from './RepoDetails';
import styles from './style.css';
import axios from 'axios';

class App extends Component {
        state = {
          users: [],
          isFormSubmitted: false
    }


    handleSearchFormSubmit = (searchTerm) =>{   //function to handle the search within userform

         return axios.get(`https://api.github.com/search/users?q=${searchTerm}`)  //API call
            .then(({ data }) => {
                const { items: users } = data;
                if (users < 1) {
                    this.setState({
                        users: [],
                        isFormSubmitted: false
                    })
                    throw new Error('No results');
                }
                this.setState({
                    users: users,
                    isFormSubmitted: true
                });
            });
    }
 
    render() {

      const { repos } = this.props;

      // {console.log("submitted? " + this.state.isFormSubmitted)}

      if (!this.state.isFormSubmitted){
         return (
          <div className="AppContainer">
              <h1>Github viewer!</h1>
              <UserForm  onSubmit={this.handleSearchFormSubmit} />  
          </div>
        );

      } else {
         return (
             <div className="AppContainer">
               <h1>Github viewer!</h1>
               <UserForm  onSubmit={this.handleSearchFormSubmit} />
               <RepoList repos={repos}/>         
            </div>
        );
     }
    }
}

export default App;



