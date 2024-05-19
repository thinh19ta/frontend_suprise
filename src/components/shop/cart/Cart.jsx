import { Link } from 'react-router-dom'
import Header from '../../header/Header'
import './index.css'
import { useEffect, useState } from 'react'
import CartService from "../../../services/CartService"
import useAuth from '../../../hooks/useAuth'
import CurrencyFormat from 'react-currency-format'

export default function Cart() {

    const [, accountId] = useAuth()
    const [products, setProducts] = useState([])


    useEffect(
        () => {
            CartService.getCartByAccountId(accountId).then(
                res => {
                    console.log(res.data)
                    setProducts(res.data)
                }
            )
        }, [accountId])
    //handle this


    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                {/* Add breadcrumb o day */}
                <div className="row">
                    <div className="col">
                        <nav
                            aria-label="breadcrumb"
                            className="bg-body-tertiary rounded-3 p-3 mb-4"
                        >

                            {/* Breadcrumb o day, chu y xem co nen sai ko */}
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Product Cart
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div>

                {/* Add breadcrumb o day */}


                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div
                            className="card card-registration card-registration-2"
                            style={{ borderRadius: 15 }}
                        >
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <hr className="my-4" />
                                            {products && products.map(
                                                product => (
                                                    <div>
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img
                                                                    src={`${process.env.PUBLIC_URL}/assets/images/products/${product.imageURL}`}
                                                                    className="img-fluid rounded-3"
                                                                    alt="Cotton T-shirt"
                                                                />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-black mb-0">{product.name}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button
                                                                    data-mdb-button-init=""
                                                                    data-mdb-ripple-init=""
                                                                    className="btn btn-link px-2"
                                                                    onlick="this.parentNode.querySelector('input[type=number]').stepDown()"
                                                                >
                                                                    <i className="fas fa-minus" />
                                                                </button>
                                                                <input
                                                                    id="form1"
                                                                    min={0}
                                                                    name="quantity"
                                                                    defaultValue={1}
                                                                    type="number"
                                                                    className="form-control form-control-sm"
                                                                />
                                                                <button
                                                                    data-mdb-button-init=""
                                                                    data-mdb-ripple-init=""
                                                                    className="btn btn-link px-2"
                                                                    onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                                                                >
                                                                    <i className="fas fa-plus" />
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' vnđ'} /></h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <a href="#!" className="text-muted">
                                                                    <i className="fas fa-times" />
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <hr className="my-4" />
                                                    </div>

                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="col-lg-4 bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>
                                            <hr className="my-4" />
                                            {/* <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">items 3</h5>
                                                <h5>€ 132.00</h5>
                                            </div>
                                            <h5 className="text-uppercase mb-3">Shipping</h5>
                                            <div className="mb-4 pb-2">
                                                <select data-mdb-select-init="">
                                                    <option value={1}>Standard-Delivery- €5.00</option>
                                                    <option value={2}>Two</option>
                                                    <option value={3}>Three</option>
                                                    <option value={4}>Four</option>
                                                </select>
                                            </div>
                                            <h5 className="text-uppercase mb-3">Give code</h5>
                                            <div className="mb-5">
                                                <div data-mdb-input-init="" className="form-outline">
                                                    <input
                                                        type="text"
                                                        id="form3Examplea2"
                                                        className="form-control form-control-lg"
                                                    />
                                                    <label className="form-label" htmlFor="form3Examplea2">
                                                        Enter your code
                                                    </label>
                                                </div>
                                            </div> */}
                                            {/* <hr className="my-4" /> */}
                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>€ 137.00</h5>
                                            </div>
                                            <button
                                                type="button"
                                                data-mdb-button-init=""
                                                data-mdb-ripple-init=""
                                                className="btn btn-dark btn-block btn-lg"
                                                data-mdb-ripple-color="dark"
                                            >
                                                Check out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


    )
}