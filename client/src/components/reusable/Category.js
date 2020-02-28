import React from 'react'
import {Col } from 'antd';


const data = [
    {id : 1, name: 'Buah', src:'https://i.ibb.co/LDytFkd/nadine-primeau-b-Lk-T8w-GV0-I-unsplash.jpg'},
    {id : 2, name: 'Sayur', src:'https://i.ibb.co/9TR8wBh/nadine-primeau-ft-Wfohtj-Nw-unsplash.jpg'},
    {id : 3, name: 'Rempah', src:'https://i.ibb.co/vjGGGgT/jo-sonn-ze-Fy-o-CUh-V8-unsplash.jpg'},
]

function Category(){
    return(
        <div>
            {data.map(item => (
                <Col lg={8} className='category-card' >
                <div 
                style={{backgroundImage: `url(${item.src})`,backgroundSize:'cover', 
                height:'400px', margin:'5px 10px 20px', backgroundRepeat  : 'no-repeat',
                backgroundPosition: 'center'}}>
                    <h1>
                        {item.name}
                    </h1>
                </div>
            </Col>
            ))}
        </div>
    )


}

export default Category