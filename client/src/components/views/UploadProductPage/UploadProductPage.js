import React, { useState } from 'react'
import { Typography, Button, Form, notification, Input, Icon, Divider} from 'antd';
import FileUpload from '../../reusable/FileUpload'
import Axios from 'axios';

const { Title } = Typography;
const { TextArea } = Input;

const Category = [
    { key: 1, value: "Sayur" },
    { key: 2, value: "Buah" },
    { key: 3, value: "Rempah" }  
]

const openNotificationWithIcon = type => {
    notification[type]({
      message: "Penambahan Produk Berhasil",
      description:
        "Produk anda telah berhasil disimpan"
    });
  };



function UploadProductPage(props) {

    const [TitleValue, setTitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [PriceValue, setPriceValue] = useState(0)
    const [StockValue, setStockValue] = useState(0)
    const [CategoryValue, setCategoryValue] = useState(1)

    const [Images, setImages] = useState([])


    const onTitleChange = (event) => {
        setTitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onPriceChange = (event) => {
        setPriceValue(event.currentTarget.value)
    }

    const onStockChange = (event) =>{
        setStockValue(event.currentTarget.value)
    }

    const onCategorySelectChange = (event) => {
        setCategoryValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        openNotificationWithIcon('success')


        if (!TitleValue || !DescriptionValue || !PriceValue ||
            !CategoryValue || !Images) {
            return alert('fill all the fields first!')
        }

        const variables = {
            writer: props.user.userData._id,
            title: TitleValue,
            description: DescriptionValue,
            price: PriceValue,
            stock: StockValue,
            images: Images,
            category: CategoryValue,
        }

        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    // alert('Product Successfully Uploaded')

                    props.history.push('/')
                } else {
                    alert('Failed to upload Product')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Jual Produk Anda</Title>
                <Divider />
            </div>


            <Form onSubmit={onSubmit} >

                <Title level={3}> Upload Gambar Produk</Title>
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                <label>Nama Produk</label>
                <Input
                    onChange={onTitleChange}
                    value={TitleValue}
                />
                <br />
                <br />
                <label>Deskripsi Produk</label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>Harga Produk</label>
                <Input
                    onChange={onPriceChange}
                    value={PriceValue}
                    type="number"
                />
                <br /><br />
                <label>Stock Produk</label>
                <Input
                    onChange={onStockChange}
                    value={StockValue}
                    type="number"
                />
                <br /><br />
                <label>Ketgori Produk</label>
                <br/>
                <select onChange={onCategorySelectChange}>
                    {Category.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />

                <Button
                    onClick={onSubmit}

                >
                    Submit
                </Button>

            </Form>

        </div>
    )
}

export default UploadProductPage
