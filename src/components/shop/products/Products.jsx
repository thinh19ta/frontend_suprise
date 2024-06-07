import './index.css'
import { useEffect } from "react"
import { useState } from "react"
import ProductService from "../../../services/ProductService"
import CurrencyFormat from 'react-currency-format'
import { Link, useNavigate } from 'react-router-dom'
import CartService from "../../../services/CartService"
import useAuth from '../../../hooks/useAuth'
import toast from 'react-hot-toast'

export default function Products() {

    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [, accountId] = useAuth()

    useEffect(() => {
        // if (categoryId) {
        //     ProductService.getAllProductsByCategory(categoryId).then(
        //         res => {
        //             setProducts(res.data)
        //         }
        //     ).catch(
        //         e => {
        //             console.log(e)
        //         }
        //     )
        // }
        // else {
        ProductService.getAllProducts().then(
            res => {
                setProducts(res.data)
            }
        ).catch(
            e => {
                console.log(e)
            }
        )
        // }
        // }, [categoryId])
    })

    const handleProductDetail = (productId) => {
        navigate(`/product/${productId}`)
    }

    const handleAddCart = (productId) => {
        if (accountId == null) {
            navigate('/login')
            toast.error("Please login!")
            return
        }
        const cartRequest = {
            accountId,
            productId,
            quantity: 1
        }
        CartService.addCart(cartRequest).then(
            toast.success("Add cart successfully!")
        ).catch(
            e => console.log(e)
        )
    }

    const handleBuy = (productId) => {

    }

    return (

        <div>
            {/* // margin top by mt-5 here... */}
            <div className="container bg-white mt-3">
                <nav className="navbar navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid p-0">
                        {" "}
                        <Link className="navbar-brand text-uppercase fw-800">
                            <span className="border-red pe-2">Sản phẩm</span>mới
                        </Link>{" "}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#myNav"
                            aria-controls="myNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            {" "}
                            <span className="fas fa-bars" />{" "}
                        </button>
                        {/* <div className="collapse navbar-collapse" id="myNav">
                            <div className="navbar-nav ms-auto">
                                {" "}
                                <Link className="nav-link" aria-current="page">
                                    All
                                </Link>{" "}
                                <Link className="nav-link">
                                    Women's
                                </Link>{" "}
                                <Link className="nav-link">
                                    Men's
                                </Link>{" "}
                                <Link className="nav-link">
                                    Kid's
                                </Link>{" "}
                                <Link className="nav-link">
                                    Accessories
                                </Link>{" "}
                                <Link className="nav-link">
                                    Cosmetics
                                </Link>{" "}
                            </div>
                        </div> */}
                    </div>
                </nav>
                <div className="row">

                    {
                        products.map(
                            product => (
                                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3" key={product.id}>
                                    <div className="product img-hover-zoom">
                                        {" "}
                                        <img
                                            onClick={() => handleProductDetail(product.id)}
                                            src={`${process.env.PUBLIC_URL}/assets/images/products/${product.imageURL}`}
                                            alt=""
                                        />
                                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li className="icon"
                                                onClick={() => handleProductDetail(product.id)}
                                            >
                                                <span className="fas fa-expand-arrows-alt" />
                                            </li>
                                            <li className="icon mx-3"
                                                onClick={() => handleBuy(product.id)}
                                            >
                                                <span className="far  fa-credit-card" />
                                            </li>
                                            <li className="icon"
                                                onClick={() => handleAddCart(product.id)}
                                            >
                                                <span className="fas fa-cart-shopping" />
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="tag bg-green">new</div> */}
                                    <div className="title pt-4 pb-1">{product.name}</div>
                                    <div className="d-flex align-content-center justify-content-center">
                                        {" "}
                                        <span className="fas fa-star" /> <span className="fas fa-star" />{" "}
                                        <span className="fas fa-star" /> <span className="fas fa-star" />{" "}
                                        <span className="fas fa-star" />{" "}
                                    </div>
                                    <div className="price"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' vnd'} /></div>
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    )
}