import React from 'react'

function ParallaxFixed(props) {
    return (
        <div 
        className='parallax-text'
        style={{backgroundImage: `url(${props.src})`,backgroundSize:'cover', 
        height:'350px', margin:'5px auto 20px', backgroundRepeat  : 'no-repeat',
        backgroundPosition: 'center',backgroundAttachment:'fixed', textAlign:'center'}}>
            <h1 className='text-center'>
                {props.tittle}
            </h1>
            <h2 className='text-center2'>
                {props.subtittle}
            </h2>
            
        </div>
    )
}

export default ParallaxFixed
