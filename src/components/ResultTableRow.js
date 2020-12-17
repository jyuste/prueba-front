import React from 'react';

const ResultTableRow = (props) => {

    return (
        <tr>
            <td>{ props.name }</td>
            <td>             
                <a 
                    href={props.url} 
                    title={props.name}
                    target="_blank"
                    rel="noreferrer"
                >
                    { props.url }
                </a>
            </td>
        </tr>
    )

};

export default ResultTableRow;