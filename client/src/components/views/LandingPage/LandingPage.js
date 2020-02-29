import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { Icon, Col, Card, Row, Button } from 'antd';
import ImageSlider from '../../reusable/ImageSlider';
import Slider from "react-slick";
import CheckBox from './Sections/CheckBox';
import RadioBox from './Sections/RadioBox';
import { category, price } from './Sections/Datas';
import SearchFeature from './Sections/SearchFeature';
import AdvSlider from '../../reusable/AdvSlider';
import Category from '../../reusable/Category';
import ParallaxFixed from '../../reusable/ParallaxFixed';
import TittleSection from '../../reusable/TittleSection';

const { Meta } = Card;

function LandingPage() {

    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")

    const [Filters, setFilters] = useState({
        continents: [],
        price: []
    })

    useEffect(() => {

        const variables = {
            skip: Skip,
            limit: Limit,
        }

        getProducts(variables)

    }, [])

    const getProducts = (variables) => {
        Axios.post('/api/product/getProducts', variables)
            .then(response => {
                if (response.data.success) {
                    if (variables.loadMore) {
                        setProducts([...Products, ...response.data.products])
                    } else {
                        setProducts(response.data.products)
                    }
                    setPostSize(response.data.postSize)
                } else {
                    alert('Failed to fectch product datas')
                }
            })
    }

    const onLoadMore = () => {
        let skip = Skip + Limit;

        const variables = {
            skip: skip,
            limit: Limit,
            loadMore: true

        }
        getProducts(variables)
        setSkip(skip)
    }


    const renderCards = Products.map((product, index) => {

        return <Col lg={6} md={8} xs={24}>
            <Card
                hoverable={true}
                cover={<a href={`/product/${product._id}`} > 
                <ImageSlider images={product.images} /></a>}
            >
                <Meta
                    title={product.title}
                    description={`Rp${product.price}`}
                />
            </Card>
        </Col>
    })
    

    // const render = Products.map((product, index) => {
    //     return <Col lg={6} lg={6} md={8} xs={24}>
    //         <Card
    //             hoverable={true}
    //             cover={<a href={`/product/${product._id}`} >
    //             <img/> </a>}                          
    //         >
                

    //         </Card>
    //     </Col>
    // })


    const showFilteredResults = (filters) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: filters

        }
        getProducts(variables)
        setSkip(0)

    }

    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for (let key in data) {

            if (data[key]._id === parseInt(value, 10)) {
                array = data[key].array;
            }
        }
        console.log('array', array)
        return array
    }

    const handleFilters = (filters, category) => {

        const newFilters = { ...Filters }

        newFilters[category] = filters

        if (category === "price") {
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues

        }

        console.log(newFilters)

        showFilteredResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerms = (newSearchTerm) => {

        const variables = {
            skip: 0,
            limit: Limit,
            filters: Filters,
            searchTerm: newSearchTerm
        }

        setSkip(0)
        setSearchTerms(newSearchTerm)

        getProducts(variables)
    }


    return (
        <div style={{ width: '75%', margin: '1rem auto 1rem' }}>
            <div style={{ textAlign: 'center' }}>
                <h1 style={{fontSize:'2rem'}}>   Selamat Datang di TaTi <Icon type="shop" />  </h1>
                <h2>   Tempat Hasil Tani Terbaik </h2>
            </div>

            <AdvSlider/>

            <div style={{ display: 'flex', margin: '0.5rem auto' }}>

                <h2 style={{marginRight:'675px'}}>
                    Silahkan Cari Hasil Tani Anda
                </h2>

                <SearchFeature
                    refreshFunction={updateSearchTerms}
                />

            </div>

            <TittleSection
                tittle='Category Produk'
                subtittle='Beberapa Produk Utama yang dijual'/>

            <Category />


            {Products.length === 0 ?
                <div style={{ display: 'flex', height: '300px', justifyContent: 'center', alignItems: 'center' }}>
                    <h2>No post yet...</h2>
                </div> :
                <div>
                    <TittleSection
                        tittle='Produk Terbaru'
                        subtittle='jangan lewatkan beberapa produk terbaru berikut'/>
                    <Row gutter={[16, 16]}>

                        {renderCards}

                    </Row>


                </div>
            }
            <br /><br />

            {PostSize >= Limit &&
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom:'50px'}}>
                    <Button onClick={onLoadMore}>Load More</Button>
                </div>
            }

            <ParallaxFixed 
                src='https://i.ibb.co/LDytFkd/nadine-primeau-b-Lk-T8w-GV0-I-unsplash.jpg'
                tittle='Tujuan dari TaTi'
                subtittle='TaTi Hadir untuk memudahkan para petani untuk menjual produknya'
            />

            <br/><br/>


            <Row gutter={[16, 16]}>
                <Col lg={12} xs={24} >
                    <CheckBox
                        list={category}
                        handleFilters={filters => handleFilters(filters, "category")}
                    />
                </Col>
                <Col lg={12} xs={24}>
                    <RadioBox
                        list={price}
                        handleFilters={filters => handleFilters(filters, "price")}
                    />
                </Col>
            </Row> 

            <br/>
            <Row gutter={[16, 16]}>

            {renderCards}

            </Row>

            <br/>
            <br/>
            <ParallaxFixed 
                src='https://i.ibb.co/LDytFkd/nadine-primeau-b-Lk-T8w-GV0-I-unsplash.jpg'
                tittle='Tujuan dari TaTi'
                subtittle='TaTi Hadir untuk memudahkan para petani untuk menjual produknya'
            />


        </div>
    )
}

export default LandingPage
