import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AccountService from "../../../services/AccountService"
import Header from "../../layouts/header/Header";


export default function Register() {

    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'fullName':
                setFullName(value);
                break;
            case 'userName':
                setUserName(value);
                break;
            case 'password':
                setPassword(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'address':
                setAddress(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = (e) => {
        const accountRequest = {
            fullName,
            userName,
            password,
            email,
            phone,
            address,
            roles: "ROLE_USER"
        }

        if (fullName && userName && password && phone && address) {
            e.preventDefault()
            AccountService.register(accountRequest)
                .then(res => {
                    if (res.data) {
                        navigate('/login')
                        toast.success("Sign up successfully!")
                    } else {
                        toast.error("User name already exists, choose another one!")
                    }
                })
                .catch(
                    e => {
                        console.log(e)
                        toast.error("User name already exists, choose another one!, but in error")
                    }

                )
        } else {
            // e.preventDefault()
            toast.error("Please fill required field!")
        }

    }

    return (
        <>
            <Header />
            <section className="h-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">

                        {/*                     
                    Breadcrumb o day, chu y xem co nen sai ko
                    <div className="row mt-1">
                        <div className="col">
                            <nav
                                aria-label="breadcrumb"
                                className="bg-body-tertiary rounded-3 p-3 mb-0"
                            >
                                Breadcrumb o day, chu y xem co nen sai ko
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <Link to={'/'}>Home</Link>
                                    </li>
                                    <li className="breadcrumb-item" aria-current="page">
                                        Account
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Register
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div> */}

                        <div className="col-lg-10 col-xl-9">
                            {/* Remove  style={{ marginTop: "-70px" }}  under */}
                            <div className="card text-black rounded-3">
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-6 order-2 order-lg-1">
                                            <p className="text-center h3 fw-bold mb-3 mx-1 mx-md-4">
                                                Sign up
                                            </p>
                                            <form className="mx-1 mx-md-4">
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fa-solid fa-signature fa-lg me-3 fa-fw"></i>
                                                    <div
                                                        data-mdb-input-init=""
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="text"
                                                            // id="form3Example1c"
                                                            className="form-control"
                                                            placeholder="Full name *"
                                                            required
                                                            name="fullName"
                                                            onChange={handleChange}
                                                            value={fullName}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw fa-fade" />
                                                    <div
                                                        data-mdb-input-init=""
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="User Name *"
                                                            required
                                                            name="userName"
                                                            onChange={handleChange}
                                                            value={userName}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                    <div
                                                        data-mdb-input-init=""
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="password"
                                                            className="form-control"
                                                            placeholder="Password *"
                                                            required
                                                            name="password"
                                                            onChange={handleChange}
                                                            value={password}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw fa-beat" />
                                                    <div
                                                        data-mdb-input-init=""
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder="Email"
                                                            name="email"
                                                            onChange={handleChange}
                                                            value={email}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fa-solid fa-phone fa-lg me-3 fa-fw"></i>
                                                    <div
                                                        data-mdb-input-init=""
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="tel"
                                                            className="form-control"
                                                            placeholder="Phone *"
                                                            pattern="0[0-9]{8,10}"
                                                            required
                                                            name="phone"
                                                            onChange={handleChange}
                                                            value={phone}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-3">
                                                    <i className="fa-solid fa-location-dot fa-lg me-3 fa-fw fa-bounce"></i>
                                                    <div
                                                        data-mdb-input-init=""
                                                        className="form-outline flex-fill mb-0"
                                                    >
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Address"
                                                            name="address"
                                                            required
                                                            onChange={handleChange}
                                                            value={address}
                                                        />
                                                    </div>
                                                </div>
                                                {/* <div className="form-check d-flex justify-content-center mb-5">
                                                <input
                                                    className="form-check-input me-2 border-primary"
                                                    type="checkbox"
                                                    defaultValue=""
                                                // id="form2Example3c"
                                                />
                                                <label className="form-check-label" htmlFor="form2Example3">
                                                    I agree all statements in{" "}
                                                    <a href="#!">Terms of service</a>
                                                </label>
                                            </div> */}
                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-0">
                                                    <button
                                                        type="submit"
                                                        data-mdb-button-init=""
                                                        data-mdb-ripple-init=""
                                                        className="btn btn-primary btn-lg gradient-custom-2"
                                                        style={{ width: "55%" }}
                                                        onClick={handleSubmit}
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2 d-none d-lg-flex">
                                            <img
                                                // src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                                src={`${process.env.PUBLIC_URL}/assets/images/logos/logo5.jpg`}
                                                className="img-fluid"
                                                alt="logo"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}