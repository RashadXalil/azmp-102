import { Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const [data, setData] = useState([])
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'description',
            dataIndex: 'description',
            key: 'description',
        }, {
            title: 'image',
            dataIndex: 'image',
            key: 'image',
            render: (t, item) => {
                return <img src={item.thumbnail} alt="" />
            }
        }
    ];
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then(res => {
            setData(res.data.products)
        })
    }, [])
    return (
        <Table dataSource={data} columns={columns} />
    )
}

export default Home