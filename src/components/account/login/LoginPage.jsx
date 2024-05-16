import { useContext, useState } from 'react'
import './index.css'
import { AuthContext } from '../../../hooks/AuthContext'
import { useNavigate } from 'react-router-dom'
import AccountService from "../../../services/AccountService"


export default function () {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')
    const [error, setError] = useState('')

    const handleUserNameChange = e => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = e => {
        setpassword(e.target.value)
    }

    const handleSubmit = () => {
        const account = {
            userName,
            password
        }
        AccountService.login(account).then(
            res => {
                if (res.status === 200) {
                    context.login(res.data)
                    navigate('/')
                }
            }
        ).catch(e => {
            setError("Invalid username or password.")
        }
        )
    }

    return (
        <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="text-center">
                                            <img
                                                src={`${process.env.PUBLIC_URL}/assets/images/logos/logo5.jpg`}
                                                style={{ width: 185 }}
                                                alt="logo"
                                            />
                                            {/* <h4 className="mt-1 mb-5 pb-1">We are The Lotus Team</h4> */}
                                        </div>
                                        <form>
                                            <h5 className='text-dark float-end'>Please login!</h5>
                                            <div data-mdb-input-init="" className="form-outline mb-3">
                                                <input
                                                    type="email"
                                                    id="form2Example11"
                                                    className="form-control"
                                                    placeholder="User name"
                                                    value={userName}
                                                    onChange={e => handleUserNameChange(e)}
                                                />
                                                {/* <label className="form-label" htmlFor="form2Example11">
                                                    Username
                                                </label> */}
                                            </div>
                                            <div data-mdb-input-init="" className="form-outline mb-4">
                                                <input
                                                    type="password"
                                                    id="form2Example22"
                                                    className="form-control"
                                                    placeholder="Password"
                                                    onChange={(e) => handlePasswordChange(e)}

                                                />
                                                {/* <label className="form-label" htmlFor="form2Example22">
                                                    Password
                                                </label> */}
                                            </div>
                                            <h6 className='text-danger text-center'>{error}</h6>
                                            {/* Delete margin bottom mt-5 above */}
                                            <div className="text-center pt-1 pb-1">
                                                <button
                                                    data-mdb-button-init=""
                                                    data-mdb-ripple-init=""
                                                    className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                                    type="button"
                                                    style={{ width: "50%", height: "5vh" }}
                                                    onClick={handleSubmit}
                                                >
                                                    Log in
                                                </button>
                                            </div>
                                            <div className="d-flex align-items-center justify-content-center pb-4">
                                                <p className="mb-0 me-2">Don't have an account?</p>
                                                <button
                                                    type="button"
                                                    data-mdb-button-init=""
                                                    data-mdb-ripple-init=""
                                                    className="btn btn-outline-danger"
                                                >
                                                    Create new
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are more than just a company</h4>
                                        <p className="small mb-0">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                            laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
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