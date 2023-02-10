import React, { useEffect } from 'react'
import Table from 'react-bootstrap/Table';
import "./style.css"
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { DLT } from '../redux/actions/action';

const CardsDetails = () => {
    const getdata = useSelector((state) => state.cartreducer.cart)
    //console.log(getdata)


    const dispatch = useDispatch()

    const dlt = (id) => {
        dispatch(DLT(id))
    }
    const [data, setdata] = useState([])

    const { id } = useParams();

    const compare = () => {
        const comparedata = getdata.filter((e) => {
            return e.id !== id
        });
        setdata(comparedata)
        console.log(comparedata);
    };

    useEffect(() => {
        compare();
        // eslint-disable-next-line
    }, [id]);

    return (
        <ol className='container'>
            <h2>Card Details</h2>
            <section style={{ left: "10rem", position: "relative", height: "70vh", width: "60rem" }}>
                <div className='carddetails bg-light'>
                    {
                        data.map((elem, i) => {
                            return (
                                <div className='d-flex mx-5' style={{ width: "50rem", height: "30rem" }}>
                                    <div key={i} className='image my-3'>
                                        <img className='my-5' style={{ width: "18rem", height: "20rem" }} src={elem.image} alt="imgg" ></img>
                                    </div>

                                    <div key={i} style={{ top:"3rem",position:"relative",width: "50rem", height: "27rem" }} className='details'>
                                        <Table key={i} style={{ margin: "auto" }} className='d-flex justify-content-left align-items-left'>
                                            <tr>
                                                <td style={{ justifyContent:"justify",alignItems: "left", textAlign: "left",left:"4rem",position:"relative"}}>
                                                    <p> <strong>{elem.title}</strong>  {elem.title}
                                                    </p>
                                                    <p className='d-flex'> <strong>Description:</strong>   {elem.description}</p>
                                                    <p> <strong>Price: $</strong>  {elem.price}</p>
                                                    <p> <strong>Category:</strong>  {elem.category}</p>  
                                                    <p> <strong>Rating:  {elem.rating.rate}</strong>  ☆☆☆☆☆</p>        
                                                </td>
                                            </tr>
                                            <hr/>
                                        </Table>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </ol>
    )
}

export default CardsDetails