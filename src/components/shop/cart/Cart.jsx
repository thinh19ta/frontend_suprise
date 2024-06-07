import { useNavigate } from 'react-router-dom';
import './index.css';
import { useEffect, useState } from 'react';
import CartService from "../../../services/CartService";
import OrderService from "../../../services/OrderService";
import useAuth from '../../../hooks/useAuth';
import CurrencyFormat from 'react-currency-format';
import toast from 'react-hot-toast';
import AccountService from "../../../services/AccountService";
import { Modal, Button } from 'react-bootstrap';
import Header from '../../layouts/header/Header';


export default function Cart() {
    const [, accountId] = useAuth();
    const [account, setAccount] = useState({});
    const [products, setProducts] = useState([]);
    const totalPrice = products.reduce((total, product) => total + (product.price * product.quantity), 0);
    const [paymentMethod, setPaymentMethod] = useState(1); // Default payment method (C.O.D)
    const [showModal, setShowModal] = useState(false);
    const [showBankingModal, setShowBankingModal] = useState(false);
    const navigate = useNavigate();

    // Load account
    useEffect(() => {
        if (accountId) {
            AccountService.getAccountById(accountId)
                .then(res => {
                    setAccount(res.data);
                })
                .catch(e => console.log(e));
        }
    }, [accountId]);

    // Load cart for the account
    useEffect(() => {
        CartService.getCartByAccountId(accountId).then(
            res => {
                if (Array.isArray(res.data)) {
                    setProducts(res.data);
                } else {
                    console.error("Expected res.data to be an array but got:", res.data);
                }
            }
        ).catch(error => {
            console.error("Error fetching cart data:", error);
        });
    }, [accountId]);

    // Remove a product from cart
    const handleRemoveFromCart = (e, id) => {
        e.preventDefault();
        const cartRequest = { accountId, id };
        CartService.removeProduct(cartRequest).then(
            res => {
                setProducts(prevProducts => prevProducts.filter(product => product.id !== id));
                toast.success("Removed from cart successfully!");
            }
        ).catch(e => console.log(e));
    };

    const handleDecrementQuantity = (productId) => {
        setProducts(prevProducts => {
            const updatedProducts = prevProducts.map(product => {
                if (product.id === productId && product.quantity > 1) {
                    const newQuantity = product.quantity - 1;
                    updateProductQuantity(productId, newQuantity);
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });
            return updatedProducts;
        });
    };

    const handleIncrementQuantity = (productId) => {
        setProducts(prevProducts => {
            const updatedProducts = prevProducts.map(product => {
                if (product.id === productId) {
                    const newQuantity = product.quantity + 1;
                    updateProductQuantity(productId, newQuantity);
                    return { ...product, quantity: newQuantity };
                }
                return product;
            });
            return updatedProducts;
        });
    };

    const updateProductQuantity = (productId, newQuantity) => {
        const cartProductRequest = { accountId, id: productId, quantity: newQuantity };
        CartService.updateProductQuantity(cartProductRequest)
            .then(res => {
                console.log(`Updated product ${productId} quantity to ${newQuantity}`);
            })
            .catch(e => {
                console.log(e);
                toast.error("Error updating product quantity.");
            });
    };

    const handleCheckout = () => {
        if (products.length === 0) {
            toast.error("Nothing to check out, please pick something!");
            setShowModal(false); // Close the modal if there are no products
            return;
        }

        if (paymentMethod === 1) {
            // C.O.D payment method
            const orderData = {
                accountId,
                paymentMethod: 1,
                paymentStatus: "Not yet",
                status: "Pending",
                totalPrice
            };

            OrderService.addOrder(orderData)
                .then(res => {
                    console.log(res);
                    navigate('/profile');
                })
                .catch(e => {
                    console.log(e);
                    toast.error("Error placing order.");
                });
        } else if (paymentMethod === 2) {
            // Banking payment method
            setShowModal(false); // Close the modal if there are no products
            setShowBankingModal(true);
        }
    };

    const handleConfirmBankingCheckout = () => {
        // Payment done
        const orderData = {
            accountId,
            paymentMethod: 2,
            paymentStatus: "Done",
            status: "Pending",
            totalPrice
        };

        OrderService.addOrder(orderData)
            .then(res => {
                console.log(res);
                navigate('/order');
            })
            .catch(e => {
                console.log(e);
                toast.error("Error placing order.");
            });

        setShowBankingModal(false);
    };

    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
            <Header />
            <div className="container py-5 h-100">
                {/* Breadcrumb */}
                {/* <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-body-tertiary rounded-3 p-3 mb-4">
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
                </div> */}
                {/* Breadcrumb */}

                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2" style={{ borderRadius: 15 }}>
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    <div className="col-lg-8">
                                        <div className="p-5">
                                            <hr className="my-4" />
                                            {products && products.map(
                                                product => (
                                                    <div key={product.id}>
                                                        <div className="row mb-4 d-flex justify-content-between align-items-center">
                                                            <div className="col-md-2 col-lg-2 col-xl-2">
                                                                <img
                                                                    src={`${process.env.PUBLIC_URL}/assets/images/products/${product.imageURL}`}
                                                                    className="img-fluid rounded-3"
                                                                    alt="Product"
                                                                />
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-3">
                                                                <h6 className="text-black mb-0">{product.name}</h6>
                                                            </div>
                                                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                                                                <button
                                                                    className="btn btn-link px-2"
                                                                    onClick={() => handleDecrementQuantity(product.id)}
                                                                >
                                                                    <i className="fas fa-minus" />
                                                                </button>
                                                                <input
                                                                    id="form1"
                                                                    min={0}
                                                                    name="quantity"
                                                                    value={product.quantity}
                                                                    type="number"
                                                                    className="form-control form-control-sm"
                                                                    readOnly
                                                                    style={{ width: "55px" }}
                                                                />
                                                                <button
                                                                    className="btn btn-link px-2"
                                                                    onClick={() => handleIncrementQuantity(product.id)}
                                                                >
                                                                    <i className="fas fa-plus" />
                                                                </button>
                                                            </div>
                                                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                                                                <h6 className="mb-0"><CurrencyFormat value={product.price} displayType={'text'} thousandSeparator={true} suffix={' vnđ'} /></h6>
                                                            </div>
                                                            <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                                                                <i className="fas fa-times" onClick={(e) => handleRemoveFromCart(e, product.id)} />
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
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Tóm tắt</h3>
                                            <hr className="my-4" />
                                            <h5 className="text-uppercase mb-3">Phương thức thanh toán</h5>
                                            <div className="mb-4 pb-2">
                                                <select onChange={(e) => setPaymentMethod(parseInt(e.target.value))}>
                                                    <option value={1}>C.O.D</option>
                                                    <option value={2}>Banking (Vietcombank)</option>
                                                </select>
                                            </div>
                                            <h5 className="text-uppercase mb-3">Địa chỉ giao hàng</h5>
                                            {
                                                account.address ? <h3>{account.address}</h3>
                                                    :
                                                    <div className="mb-5">
                                                        <div className="form-outline">
                                                            <input
                                                                type="text"
                                                                id="form3Examplea2"
                                                                className="form-control form-control-lg"
                                                            />
                                                            <label className="form-label" htmlFor="form3Examplea2">Enter your code</label>
                                                        </div>
                                                    </div>
                                            }

                                            <hr className="my-4" />
                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Tổng tiền</h5>
                                                <h5><CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} suffix={' vnđ'} /></h5>
                                            </div>
                                            <button
                                                type="button"
                                                className="btn btn-dark btn-block btn-lg"
                                                onClick={handleShowModal}
                                            >
                                                Thanh toán
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Checkout</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure you want to proceed with the checkout?</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={handleCheckout}>
                        Confirm
                    </Button>
                </Modal.Footer>
            </Modal>

            {/* Banking Payment Modal */}
            <Modal show={showBankingModal} onHide={() => setShowBankingModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Banking Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>Tổng: <CurrencyFormat value={totalPrice} displayType={'text'} thousandSeparator={true} suffix={' vnđ'} /></h5>
                    {/* Placeholder for QR code image */}
                    <div className="d-flex justify-content-center">
                        <img
                            src={`${process.env.PUBLIC_URL}/assets/images/qr/qr.jpg`}
                            alt="Banking Details"
                            width={"72%"}
                            className="img-fluid"
                        />
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowBankingModal(false)}>
                        Trả sau
                    </Button>
                    <Button variant="primary" onClick={handleConfirmBankingCheckout}>
                        Thanh toán
                    </Button>
                </Modal.Footer>
            </Modal>
        </section>
    );
}

