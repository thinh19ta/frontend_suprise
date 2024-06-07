
import { useEffect, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import AccountService from "../../../services/AccountService"
import Order from "../../shop/order/Order";
import Header from "../../layouts/header/Header";


export default function Profile() {

    const [, accountId] = useAuth()
    const [account, setAccount] = useState({})

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


    return (
        <>
            <Header />
            <section style={{ backgroundColor: "#eee" }}>
                <div className="container py-5 h-100">
                    {/* <div className="row">
                    <div className="col">
                        Breadcrumb o day, chu y xem co nen sai ko
                        <nav
                            aria-label="breadcrumb"
                            className="bg-body-tertiary rounded-3 p-3 mb-4"
                        >

                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item">
                                    <Link to={'/'}>Home</Link>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    User Profile
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div> */}
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle img-fluid"
                                        style={{ width: 150 }}
                                    />
                                    <h5 className="my-3">{account.fullName}</h5>
                                    <p className="text-muted mb-1">V.I.P</p>
                                    <p className="text-muted mb-4">{account.address}</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <button
                                            type="button"
                                            data-mdb-button-init=""
                                            data-mdb-ripple-init=""
                                            className="btn btn-primary"
                                        >
                                            Follow
                                        </button>
                                        <button
                                            type="button"
                                            data-mdb-button-init=""
                                            data-mdb-ripple-init=""
                                            className="btn btn-outline-primary ms-1"
                                        >
                                            Message
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card mb-4 mb-lg-0">
                            <div className="card-body p-0">
                                <ul className="list-group list-group-flush rounded-3">
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fas fa-globe fa-lg text-warning" />
                                        <p className="mb-0">https://mdbootstrap.com</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i className="fab fa-github fa-lg text-body" />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-twitter fa-lg"
                                            style={{ color: "#55acee" }}
                                        />
                                        <p className="mb-0">@mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-instagram fa-lg"
                                            style={{ color: "#ac2bac" }}
                                        />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                        <i
                                            className="fab fa-facebook-f fa-lg"
                                            style={{ color: "#3b5998" }}
                                        />
                                        <p className="mb-0">mdbootstrap</p>
                                    </li>
                                </ul>
                            </div>
                        </div> */}
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Họ tên</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{account.fullName}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{account.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Số điện thoại</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{account.phone}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Địa chỉ giao hàng</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{account.address}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        <p className="mb-4">
                                            <span className="text-primary font-italic me-1">
                                                assigment
                                            </span>{" "}
                                            Project Status
                                        </p>
                                        <p className="mb-1" style={{ fontSize: ".77rem" }}>
                                            Web Design
                                        </p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow={80}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Website Markup
                                        </p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "72%" }}
                                                aria-valuenow={72}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            One Page
                                        </p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "89%" }}
                                                aria-valuenow={89}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Mobile Template
                                        </p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "55%" }}
                                                aria-valuenow={55}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Backend API
                                        </p>
                                        <div className="progress rounded mb-2" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "66%" }}
                                                aria-valuenow={66}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        <p className="mb-4">
                                            <span className="text-primary font-italic me-1">
                                                assigment
                                            </span>{" "}
                                            Project Status
                                        </p>
                                        <p className="mb-1" style={{ fontSize: ".77rem" }}>
                                            Web Design
                                        </p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "80%" }}
                                                aria-valuenow={80}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Website Markup
                                        </p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "72%" }}
                                                aria-valuenow={72}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            One Page
                                        </p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "89%" }}
                                                aria-valuenow={89}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Mobile Template
                                        </p>
                                        <div className="progress rounded" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "55%" }}
                                                aria-valuenow={55}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                        <p className="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
                                            Backend API
                                        </p>
                                        <div className="progress rounded mb-2" style={{ height: 5 }}>
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{ width: "66%" }}
                                                aria-valuenow={66}
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                            < Order />
                        </div>
                    </div>
                </div>
            </section>
        </>


    )
}