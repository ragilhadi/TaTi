import React from 'react'
import { Carousel } from 'antd';
import 'antd/dist/antd.css';

const data = [
    { id: 1, value: "https://i.ibb.co/D5TFWyT/an-vision-g-DPa-DDy6-WE-unsplash.jpg" },
    { id: 1, value: "https://i.ibb.co/6tcGFRg/hotchicksing-Dyc95d-Ku-Gp4-unsplash.jpg" },
    { id: 2, value: "https://i.ibb.co/jTJNHb4/maja-petric-v-GQ49l9-I4-EE-unsplash.jpg" }
]

function AdvSlider() {
    return (
        <div className="adv-slider">
        <Carousel autoplay>
          {data.map(item => (
              <img src={item.value} style={{width: '100%',  height: '200px'}}/>
          ))}
        </Carousel>
        </div>
    )
}

export default AdvSlider
