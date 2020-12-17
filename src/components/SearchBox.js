import React from 'react';

const SearchBox = () => {

    return (
        <div className="control has-icons-right">
            <div className="field is-horizontal">
                <div className="field-label is-normal is-white">
                    <label className="label has-text-grey-light">Buscar:</label>
                </div>
                <input className="input is-small" type="text" placeholder="ej: javascript" />
                <span className="icon is-small is-right">
                    <i className="fa fa-search"></i>
                </span>
            </div>
        </div>
    )
}

export default SearchBox;