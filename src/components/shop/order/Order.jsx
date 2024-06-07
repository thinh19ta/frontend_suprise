import { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import useAuth from "../../../hooks/useAuth";
import OrderService from "../../../services/OrderService";
import CurrencyFormat from "react-currency-format";

export default function Order() {
    const [orders, setOrders] = useState([]);
    const [, accountId] = useAuth();
    const [selectedOrder, setSelectedOrder] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (accountId) {
            OrderService.getAllOrder(accountId)
                .then((res) => {
                    console.log(res.data);
                    setOrders(res.data);
                })
                .catch((e) => console.log(e));
        }
    }, [accountId]);

    const handleOrderDetailsClick = (order) => {
        setSelectedOrder(order);
        setShowModal(true);
    };

    // Function to format date as day/month/year
    const formatDate = (dateString) => {
        const options = { day: "2-digit", month: "2-digit", year: "numeric" };
        return new Date(dateString).toLocaleDateString("en-GB", options);
    };

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tổng</th>
                        <th scope="col">Ngày đặt hàng</th>
                        <th scope="col">Trạng thái thanh toán</th>
                        <th scope="col">Trạng thái đơn hàng</th>
                        <th scope="col">Chi tiết</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                                <CurrencyFormat
                                    value={order.totalPrice}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    suffix={' vnđ'}
                                />
                            </td>
                            <td>{formatDate(order.orderDate)}</td> {/* Format date here */}
                            <td>{order.paymentStatus}</td>

                            <td>{order.status}</td>

                            <td>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => handleOrderDetailsClick(order)}
                                >
                                    Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Order Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {selectedOrder &&
                        selectedOrder.orderProductResponses.map((product) => (
                            <div key={product.id}>
                                <div className="row mb-4 align-items-center">
                                    <div className="col-4 col-md-2">
                                        <img
                                             src={`${process.env.PUBLIC_URL}/assets/images/products/${product.imageURL}`}
                                            className="img-fluid rounded-3"
                                            alt="Product"
                                        />
                                    </div>
                                    <div className="col-8 col-md-10">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <h6 className="col-6 text-black mb-0">{product.name}</h6>
                                            <p className="col-1 mb-0">{product.quantity}</p>
                                            <h6 className="col-3 mb-0">
                                                <CurrencyFormat
                                                    value={product.price}
                                                    displayType={'text'}
                                                    thousandSeparator={true}
                                                    suffix={' vnđ'}
                                                />
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <hr className="my-4" />
                            </div>
                        ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
