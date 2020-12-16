import React from 'react';

const SearchBox = () => {

    return (
    <form>
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