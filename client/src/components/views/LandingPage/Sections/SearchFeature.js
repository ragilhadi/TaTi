import React, { useState } from 'react'
import { Input } from 'antd';

const { Search } = Input;

function SearchFeature(props) {

    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)

        props.refreshFunction(event.currentTarget.value)

    }

    return (
        <div style={{marginTop:'2rem'}}>
            <Search
                value={SearchTerms}
                onChange={onChangeSearch}
                placeholder="Cari Hasil Tani disini.."
            />
        </div>
    )
}

export default SearchFeature
