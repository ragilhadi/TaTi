import React from 'react'

function ParallaxFixed(props) {
    return (
        <div 
        style={{backgroundImage: `url(${props.src})`,backgroundSize:'cover', 
        height:'350px', margin:'5px auto 20px', backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center',backgroundAttachment:'fixed'}}>
            <h1>
                {props.name}
            </h1>
            
        </div>
    )
}

export default ParallaxFixed
