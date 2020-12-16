import React from 'react';

import GitHubGetData from '../data/GitHubData'

const SearchBox = () => {

    //Made this handler in a handleSubmit function in order to keep the calls to the API minimized.
    //It could be in an onChange in the input field if we need realtime search.

    const handleSubmit = (event) => {
        event.preventDefault();
        const queryString = event.target.value
        GitHubGetData(queryString)
    }

    return (
    <form onSubmit={handleSubmit}>
        <div className="control has-icons-right">
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Buscar:</label>
                </div>
                <input className="input" type="text" placeholder="ej: javascript" />
                <span className="icon is-small is-right">
                    <i className="fa fa-search"></i>
                </span>
            </div>
        </div>
    </form>
    )

}

export default SearchBox;