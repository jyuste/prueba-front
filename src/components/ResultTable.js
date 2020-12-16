import React from 'react';

import ResultTableRow from './ResultTableRow'

import '../animate.css';

const ResultTable = () => {

    return (
        <div className="container animate__animated animate__fadeIn">
            <table className="table is-fullwidth is-striped is-hoverable">
                <tr className="th">
                    <th>Nombre repositorio</th>
                    <th>URL</th>
                </tr>
                
                <ResultTableRow />
        </table>
    </div>
    )
}

export default ResultTable