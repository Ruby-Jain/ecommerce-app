import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { DLT } from '../redux/actions/action';
import { DLTALL } from "../redux/actions/action";
import { useNavigate } from 'react-router';
import { ADDQTY } from '../redux/actions/action';
import { DLTQTY } from '../redux/actions/action';


const Header = () => {
    const history = useNavigate()

    const getdata = useSelector((state) => state.cartreducer.cart)
    const getqnty = useSelector((state) => state.cartreducer.qnty) 

    const dispatch = useDispatch()

    const dlt = (id) => {
        dispatch(DLT(id))
    }
    const addqnty = (id) => {
        dispatch(ADDQTY())
    }
    const delqnty = (id) => {
        dispatch(DLTQTY())
    }
    const dltall = () => {
        dispatch(DLTALL())
        history('/')
    }
    /* const addbtn = () => {
        setqnty(qnty + 1)
    }
    const minusbtn = () => {
        setqnty(qnty - 1)
    } */

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <Navbar bg="light" variant="light">
                <Container>
                    <NavLink style={{ fontWeight: "bolder", fontSize: "1.5rem" }} className={'text-decoration-none'} to="/"><i className="fa-solid fa-cart-shopping" style={{ color: "blue", fontSize: 33, cursor: "pointer", marginRight: "0.3rem" }}></i>ShoppingCart</NavLink>
                    <Nav className="me-auto">
                        <NavLink className={'text-decoration-none'} to="/"><i style={{ marginLeft: "2rem", padding: "0.2rem", fontSize: 20 }} className="fa-solid fa-house"></i>Home</NavLink>
                    </Nav>
                    <Nav style={{ right: 18, position: "relative" }}>
                        <NavLink style={{ marginRight: "3rem" }} className={'text-decoration-none'} to="/login"><i style={{ padding: 7, fontSize: 20 }} className="fa-solid fa-user"></i>Login</NavLink>

                        <NavLink style={{ marginRight: "3rem" }} className={'text-decoration-none'} to="/signup"><i style={{ padding: 7, fontSize: 20 }} className="fa-solid fa-right-to-bracket"></i>Signup</NavLink>

                        <NavLink style={{ marginRight: "3rem" }} className={'text-decoration-none'} to="/dashboard"><i style={{ padding: 7, fontSize: 20, }} className="fa-solid fa-gauge"></i>Dashboard</NavLink>
                    </Nav>
                    <Badge
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        badgeContent={getdata.length} color="primary">
                        <i className="fa-solid fa-cart-shopping fa-fade text-dark" style={{ fontSize: 27, cursor: "pointer" }}></i></Badge>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        {
                            getdata.length ? (<div>
                                <table>
                                    <thead>
                                        <tr>
                                            <th className='text-center'>
                                                Image
                                            </th>

                                            <th className='text-left'>
                                                Title
                                            </th>
                                            <th className='text-left'>
                                                Price
                                            </th>
                                            <th className='text-left mx-2'>
                                                Add
                                            </th>
                                            <th className='text-left mx-2'>
                                                Delete
                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody className='text-left'>
                                        {
                                            getdata.map((e) => {
                                                return (<tr  style={{ width: "10rem", margin: "auto" }}>
                                                    <NavLink to={`/cart/${e.id}`} onClick={handleClose}><img className='mx-5 p-2' style={{ width: "7rem", height: "7rem" }} src={e.image} alt="itemm" /></NavLink>

                                                    <td>
                                                        <p className='p-2' style={{ width: "10rem", height: "4rem" }}>{e.title}</p>
                                                    </td>
                                                    <td>
                                                        <h6 className='p-3' style={{ fontWeight: "bolder", width: "10rem", height: "3rem" }}> ${e.price}</h6>
                                                    </td>

                                                    <td>
                                                        <button  onClick={() => addqnty(e.id)} className='p-1' style={{ fontWeight: "bolder", width: "2rem", height: "3rem" }}>+</button>

                                                    </td>
                                                    <td>
                                                        {getqnty === 0 ? (<Menu
                                                            id="basic-menu"
                                                            anchorEl={anchorEl}
                                                            open={open}
                                                            onClose={handleClose}
                                                            MenuListProps={{
                                                                'aria-labelledby': 'basic-button',
                                                            }}
                                                        ><div style={{ cursor: "pointer", textAlign: "center", alignItems: "center", top: 5, position: "relative" }} className="card-details mx-3 my-1"> <p className='mx-1'><i onClick={handleClose} style={{ cursor: "pointer", padding: 7, bottom: 22, right: 18, position: "relative", fontSize: 21 }} className="fa-solid fa-rectangle-xmark"></i>Your Cart is Empty<i className="fa-solid fa-cart-shopping text-dark" style={{ padding: 7, fontSize: 25 }}></i></p> </div></Menu>) : (<button  onClick={() => delqnty(e.id)} className='p-1' style={{ fontWeight: "bolder", width: "2rem", height: "3rem" }}>-</button>)}

                                                    </td>
                                                    <td>
                                                        <h6 className='p-3' style={{ fontWeight: "bolder", width: "10rem", height: "3rem" }}> Quantity:{getqnty}</h6>
                                                    </td>
                                                    <td>
                                                        <h6 className='p-3' style={{ fontWeight: "bolder", width: "10rem", height: "3rem" }}>${getqnty * e.price}</h6>
                                                    </td>
                                                    <td>
                                                        <i onClick={() => dlt(e.id)} style={{ color: "red", right: "3rem", position: "relative", cursor: "pointer" }} className='fas fa-trash'></i>
                                                    </td>

                                                </tr>
                                            )})

                                        }
                                        
                                        
                                        <p className='mx-5 p-3' style={{ fontSize: "bolder" }}>Total:{ } Items</p>
                                    </tbody>
                                    <tr style={{ fontSize: "bolder" }} className='text-left'>
                                            <button onClick={dltall}><i class="fa-solid fa-cart-shopping" style={{ fontSize: 27, cursor: "pointer", color: "red" }}>Delete all</i></button>
                                        </tr>
                                </table>
                            </div>) : (<div style={{ cursor: "pointer", textAlign: "center", alignItems: "center", top: 5, position: "relative" }} className="card-details mx-3 my-1"> <p className='mx-1'><i onClick={handleClose} style={{ cursor: "pointer", padding: 7, bottom: 22, right: 18, position: "relative", fontSize: 21 }} className="fa-solid fa-rectangle-xmark"></i>Your Cart is Empty<i className="fa-solid fa-cart-shopping text-dark" style={{ padding: 7, fontSize: 25 }}></i></p> </div>)
                        }

                    </Menu> <strong className='mx-2 '>Cart</strong>
                </Container>
            </Navbar>

        </>
    )
}

export default React.memo(Header)