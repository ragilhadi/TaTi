import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            marginTop:'200px',
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p> Project BCC <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
