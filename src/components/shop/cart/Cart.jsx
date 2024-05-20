import { Link } from 'react-router-dom'
import Header from '../../header/Header'
import './index.css'
import { useEffect, useState } from 'react'
import CartService from "../../../services/CartService"
import useAuth from '../../../hooks/useAuth'
import CurrencyFormat from 'react-currency-format'
import toast from 'react-hot-toast'
import AccountService from "../../../services/AccountService"

export default function Cart() {

    const [, accountId] = useAuth()
    const [account, setAccount] = useState({})
    const [products, setProducts] = useState([])
    const totalPrice = Array.isArray(products) ? products.reduce((total, product) => total + product.price, 0) : 0;
    const [order, setOrder] = useState()

    useEffect(
        () => {
            if (accountId) {
                AccountService.getAccountById(accountId)
                    .then(res => {
                        console.log(res.data)
                        setAccount(res.data)
                    })
                    .catch(
                        e => console.log(e)
                    )
            }
        }
        , [accountId])

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

    const handleRemoveFromCart = (e, productId) => {
        e.preventDefault()
        const cartRequest = {
            accountId,
            productId
        }
        CartService.removeProduct(cartRequest).then(
            res => {
                setProducts(prevProducts => prevProducts.filter(product => product.id !== productId))
                toast.success("Remove cart successfully!")
            }
        ).catch(e => console.log(e))
    }


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
                                                                // onClick={}
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
                                                                // onClick={}
                                                                >
                                                                    <i className="fas fa-plus" />
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' vnđ'} /></h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <i className="fas fa-times"
                                                                    onClick={(e) => handleRemoveFromCart(e, product.id)}

                                                                />
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
                                            <h5 className="text-uppercase mb-3">Payment method</h5>
                                            <div className="mb-4 pb-2">
                                                <select data-mdb-select-init="">
                                                    <option value={1}>C.O.D</option>
                                                    <option value={2}>Banking (Vietcombank)</option>
                                                </select>
                                            </div>
                                            <h5 className="text-uppercase mb-3">Shipping adddress</h5>
                                            {
                                                account.address ? <h3>{account.address}</h3>
                                                    :
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
                                                    </div>
                                            }

                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5><CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} suffix={' vnđ'} /></h5>
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