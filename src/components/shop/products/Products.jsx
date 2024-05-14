import './index.css'
import { useEffect } from "react"
import { useState } from "react"
import ProductService from "../../../services/ProductService"
import Header from '../../header/Header'
import CurrencyFormat from 'react-currency-format'


export default function Products() {

    const [products, setProducts] = useState([])

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


    return (

        <div>
            <Header />
            {/* // margin top by mt-5 here... */}
            <div className="container bg-white mt-5">
                <nav className="navbar navbar-expand-md navbar-light bg-white">
                    <div className="container-fluid p-0">
                        {" "}
                        <a className="navbar-brand text-uppercase fw-800" href="#">
                            <span className="border-red pe-2">New</span>Product
                        </a>{" "}
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
                        <div className="collapse navbar-collapse" id="myNav">
                            <div className="navbar-nav ms-auto">
                                {" "}
                                <a className="nav-link active" aria-current="page" href="#">
                                    All
                                </a>{" "}
                                <a className="nav-link" href="#">
                                    Women's
                                </a>{" "}
                                <a className="nav-link" href="#">
                                    Men's
                                </a>{" "}
                                <a className="nav-link" href="#">
                                    Kid's
                                </a>{" "}
                                <a className="nav-link" href="#">
                                    Accessories
                                </a>{" "}
                                <a className="nav-link" href="#">
                                    Cosmetics
                                </a>{" "}
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="row">

                    {
                        products.map(
                            product => (
                                <div className="col-lg-3 col-sm-6 d-flex flex-column align-items-center justify-content-center product-item my-3" key={product.id}>
                                    <div className="product">
                                        {" "}
                                        <img
                                            src={`${process.env.PUBLIC_URL}/assets/images/products/${product.imageURL}`}
                                            alt=""
                                        />
                                        <ul className="d-flex align-items-center justify-content-center list-unstyled icons">
                                            <li className="icon">
                                                <span className="fas fa-expand-arrows-alt" />
                                            </li>
                                            <li className="icon mx-3">
                                                <span className="far fa-heart" />
                                            </li>
                                            <li className="icon">
                                                <span className="fas fa-shopping-bag" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tag bg-green">new</div>
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