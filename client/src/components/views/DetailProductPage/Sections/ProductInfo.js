import React, { useEffect, useState } from 'react'
import { Button, Descriptions, Collapse } from 'antd';

const { Panel } = Collapse;

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }

    function callback(key) {
        console.log(key);
      }

    return (
        <div>
            {/* <Descriptions title="Product Info">
                <Descriptions.Item label="Price"> {Product.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="View"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Description"> {Product.description}</Descriptions.Item>
            </Descriptions> */}

            <h1>Product Info </h1>
            <h2>
                Harga : {Product.price}
            </h2>
            <h3>
                Stock : {Product.stock}
            </h3>
            <Collapse defaultActiveKey={['1']} onChange={callback}>
                <Panel header="Deskripsi" key="2">
                <p>{Product.description}</p>
                </Panel>
            </Collapse>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large" shape="round" icon="shopping-cart"
                    onClick={addToCarthandler}
                >
                    Add to Cart
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
