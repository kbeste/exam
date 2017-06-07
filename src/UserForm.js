import React, { Component } from 'react';
import styles from './style.css';
import { func } from 'prop-types';

class UserForm extends Component {
    state = {
        searchTerm: '',
        error: null
    }
    handleChange = (event) => {
        this.setState({
            searchTerm: event.target.value
        });
    }
    handleSubmit = (event) => {
        this.props.onSubmit(this.state.searchTerm)
            .then(() => {
                this.setState({ searchTerm: '', error: null })
            })
            .catch(() => {
                this.setState({
                    error: 'Unknown username'
                })
            })
    }



    render() {

        {console.log("value entered " + this.state.searchTerm);} //pass back in order to display in repolist

        let potentialError = null;
        if (this.state.error) {
            potentialError = <p className="notification-box alert">{this.state.error}</p>
        }


    return (
        <div>
            <div className='userFormDetails'>
            	{potentialError}
                <label>Search Repositories by Username</label>
                <input className='inputUserName' type="text" placeholder="username" value={this.state.searchTerm} onChange={this.handleChange}/>
                <button onClick={this.handleSubmit} disabled={this.state.searchTerm === ''}>Search</button>    
            </div>
        </div>
    )
}
}

UserForm.propTypes = {
    onSubmit: func.isRequired
}
export default UserForm;




