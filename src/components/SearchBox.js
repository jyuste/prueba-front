import React from 'react';

const SearchBox = (props) => {

    return (

        <div className="field has-addons has-addons-right">
            <p className="control">
                <input
                    className="input is-small"
                    type="text"
                    placeholder="ej: javascript"
                />
            </p>
            <p className="control">
                <button className="button is-small is-info">
                    <span class="icon is-small">
                        <i class="fa fa-search"></i>
                    </span>
                    <span>
                        Buscar
                    </span>
                </button>
            </p>
        </div>

    )
}

export default SearchBox;