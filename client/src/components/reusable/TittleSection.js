import React from 'react'

function TittleSection(props) {
    return (
        <div className="tittle-style">
            <h1 >{props.tittle}</h1>
            <h2>{props.subtittle}</h2>
        </div>
    )
}

export default TittleSection
