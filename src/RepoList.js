import React from 'react';
import styles from './style.css';
import { array } from 'prop-types'

const RepoList = (props) => {
    const tableRows = props.repos.map((repo) => {
        return (
            <tr key={repo.id}>
                <td>{repo.name}</td>
            </tr>
        )
    })

// console.log("test " + {this.props.submitted} )
// this.props.submitted

    return (

        // if props.repos.is
        <div className='repoListDetails'>
            <h1>kbeste repositories</h1>
            <h4>Filter repos by primary language</h4>

            <select>
                  <option value="All">All</option>
                  <option value="JavaScript">JavaScript</option>
                  <option value="HTML">HTML</option>
                  <option value="Ruby">Ruby</option>
            </select>


            <table className="repoListTable" >
                <thead>
                    <tr>
                        <th>Repos</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
    )
}

RepoList.propTypes = {
    repos: array.isRequired
}

export default RepoList;