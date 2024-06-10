import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService"
import CurrencyFormat from "react-currency-format"
import CartService from "../../../services/CartService"
import useAuth from '../../../hooks/useAuth'
import toast from 'react-hot-toast'
import RandomProducts from "../products/RandomProducts";
import Header from "../../layouts/header/Header";

export default function ProductDetail() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState('')
    const [, accountId] = useAuth()

    useEffect(() => {
        ProductService.getProductById(id).then(
            res => {
                setProduct(res.data)
            }
        ).catch(e => console.log(e))
    }, [id])


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


    return (
        <>
            <Header />
            {/* Add breadcrumb o day */}
            {/* <div className="row">
                <div className="col">
                    <nav
                        aria-label="breadcrumb"
                        className="bg-body-tertiary rounded-3 p-3 mb-4"
                    >

                        Breadcrumb o day, chu y xem co nen sai ko
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="breadcrumb-item">
                                <Link to={'/shop'}>Shop</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Product details
                            </li>
                        </ol>
                    </nav>
                </div>
            </div> */}

            <section className="py-5 bg-white">
                <div className="container px-4 px-lg-5 my-5">
                    <div className="row gx-4 gx-lg-5 align-items-center">
                        <div className="col-md-5">
                            <img
                                className="card-img-top mb-5 mb-md-0"
                                src={`${process.env.PUBLIC_URL}/assets/images/products/${product.imageURL}`}
                                alt="..."
                            />
                        </div>
                        <div className="col-md-6">
                            <div className="small mb-1">SKU: BST-498</div>
                            <h2 className="fw-bolder">{product.name}</h2>
                            <div className="fs-5 mb-5">
                                {/* <span className="text-decoration-line-through">$45.00</span> */}
                                <span className="text-danger"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' vnđ'} /></span>
                            </div>
                            <p className="lead">
                                {product.description}
                            </p>
                            <div className="d-flex">
                                <input
                                    className="form-control text-center me-3"
                                    id="inputQuantity"
                                    type="num"
                                    defaultValue={1}
                                    style={{ maxWidth: "3rem" }}
                                />
                                <button className="btn btn-outline-dark flex-shrink-0" type="button"
                                    onClick={() => handleAddCart(product.id)}
                                >
                                    Thêm vào giỏ hàng{" "}
                                    <i className="fa-solid fa-cart-shopping fa-bounce"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <RandomProducts title={'Sản phẩm liên quan'} length={8} />
        </>
    )
}