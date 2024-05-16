import React, { useContext } from 'react'
import MainContext from '../../../context/context'
import Loading from '../../../components/Loading/Loading'
import ProductList from '../../../components/ProductList/ProductList'
import { Helmet } from 'react-helmet'

const Home = () => {
    const { data, loading } = useContext(MainContext)
    return (
        <>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div>
                {
                    loading ? <Loading /> : <ProductList data={data} />
                }
            </div>
        </>
    )
}

export default Home