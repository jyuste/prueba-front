
import React from 'react'

const Loader = () => {
    return (
        <div className="container notification is-info">
            <h3>Cargando Datos
                <i className="is-pulled-right fa fa-spinner fa-pulse fa-2x fa-fw"></i>
            </h3>
        </div>
    )
}

export default  Loader