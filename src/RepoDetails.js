import React from 'react';
import styles from './style.css';
import { array } from 'prop-types'

const RepoDetails = (props) => {
    return (

        <div className="row">
            <div className='dojoDetailsHeader'>
                <h1>hello_dojo details</h1>
                <button>Home</button>
                
            </div>

            <table className="dojoDetails" >
                <thead>
                    <tr>
                        <th width="75">Stars</th>
                        <th width="75">Forks</th>
                        <th width="350">Primary Language</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>323</td>              
                        <td>6</td>
                        <td>JavaScript</td>
                    </tr>
                    <tr>
                        <td>69</td>
                        <td>42</td>
                        <td>Ruby</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default RepoDetails;