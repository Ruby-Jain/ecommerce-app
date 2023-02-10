import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react';
import axios from "axios"
import Skeleton from '@mui/material/Skeleton';
import "./style.css"
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';


const Cards = () => {
    const dispatch = useDispatch()

    const send = (e) => {
        dispatch(ADD(e))
    }

    const [fdata, setfdata] = useState([])

    const getdata = async () => {
        const {data} = await axios.get("https://fakestoreapi.com/products");

        setfdata(data)
    }

    useEffect(() => {
        getdata()
    }, [])

    return (
        <div style={{ height: "100vh", color: "white" }} className='text-dark'>
            <h1>Shopping Cart</h1><hr></hr>
            {fdata ? (<div className='row d-flex justify-content-center mx-2 my-2'>
                {
                    fdata.map((ele, key) => {
                        return (
                            <Card key={ele.id}
                                style={{ width: '19rem' }} className='mx-3 my-4 card-style zoom card'>
                                <Card.Img src={ele.image} style={{ padding: "0.7rem", width: '12rem', height: '12rem', margin: "auto" }} />
                                <Card.Body>
                                    <Card.Title><strong>{ele.title}</strong></Card.Title>
                                    <Card.Text style={{ fontSize: "1rem" }}>
                                        {(ele.description.slice(0, 60))}
                                        <br /><br /><strong>PRICE: ${ele.price}</strong>
                                    </Card.Text>
                                    <Button onClick={() => send(ele, ele.id)} className='col-lg-12' variant="primary"> <strong>ADD TO CART</strong> </Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
            </div>) : (<Skeleton variant="rectangular" width="100%">
                <div style={{ paddingTop: '57%' }} />
            </Skeleton>)}
        </div>

    )
}

export default React.memo(Cards)