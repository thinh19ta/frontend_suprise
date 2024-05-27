import { useEffect, useState } from "react"
import useAuth from "../../../hooks/useAuth"
import OrderService from "../../../services/OrderService";
export default function Order() {

    const [orders, setOrders] = useState([])
    const [, accountId] = useAuth()

    useEffect(() => {
        if (accountId) {
            OrderService.getAllOrder(accountId)
                .then(
                    res => {
                        console.log(res.data)
                        setOrders(res.data)
                    }
                )
                .catch(
                    e => console.log(e)
                )
        }
    }, [accountId])


    return (
        <div>
            {
                orders.map(
                    order => (
                        <div key={order.id}>
                            ------------------------------------
                            <h1>Your order id: {order.id}</h1>
                            <h1>Your paymentMethod id: {order.paymentMethod}</h1>
                            <div>
                            <h1>List of order product</h1>
                                {
                                    order.orderProductResponses.map(
                                        product => (
                                            <div key={product.id}>
                                                <p>Product ID: {product.productId}</p>
                                                <p>Name: {product.name}</p>
                                                <p>Price: {product.price}</p>
                                                <p>Description: {product.description}</p>
                                                <p>Image URL: {product.imageURL}</p>
                                                <p>Quantity: {product.quantity}</p>
                                            </div>
                                        )
                                    )
                                }      
                       
                            </div>
                            <h1>Your paymentStatus id: {order.paymentStatus}</h1>
                            <h1>Your order status: {order.status}</h1>
                        </div>
                    )
                )
            }

        </div>
    )
}