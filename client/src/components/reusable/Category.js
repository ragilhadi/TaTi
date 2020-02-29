import React from 'react'
import {Col } from 'antd';


const data = [
    {id : 1, name: 'Buah', src:'https://i.ibb.co/z4s2bpf/sayur-2x.png'},
    {id : 2, name: 'Sayur', src:'https://i.ibb.co/72N8LFz/Buah-2x.png'},
    {id : 3, name: 'Rempah', src:'https://i.ibb.co/KLvhWjG/Rempah-2x.png'},
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
                    <h1 className='text-center category-text'>
                        {item.name}
                    </h1>
                </div>
            </Col>
            ))}
        </div>
    )


}

export default Category