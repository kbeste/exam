import React from 'react';
import styles from './style.css';

const RepoList = () => {
    return (

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
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>NM Exam</td>
                    </tr>
                    <tr>
                        <td>Counter</td>
                    </tr>
                    <tr>
                        <td>hello_dojo</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default RepoList;