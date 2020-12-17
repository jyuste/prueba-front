import React from 'react';

import ResultTableRow from './ResultTableRow'

import '../animate.css';

const ResultTable = (props) => {

    const tableRow = props.apiData.map((result, i) => <ResultTableRow className="animate__animated animate__fadeIn" key={i} name={result.name} url={result.url} />)

    return (
        <div className="container">
            <div className="table-container">
                <table className="table is-fullwidth is-striped is-hoverable">
                    <thead>
                        <tr className="th">
                            <th>Nombre repositorio</th>
                            <th>URL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.apiData.length > 0 ? tableRow : <tr><td colSpan="1">Sin resultados</td></tr>}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ResultTable