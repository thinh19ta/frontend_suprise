import { useContext, useState } from 'react'
import './index.css'
import { AuthContext } from '../../../hooks/AuthContext'
import { useNavigate } from 'react-router-dom'
import AccountService from "../../../services/AccountService"
import toast from 'react-hot-toast'
import Header from '../../layouts/header/Header'


export default function LoginPage() {
    const context = useContext(AuthContext)
    const navigate = useNavigate()
    const [userName, setUserName] = useState('')
    const [password, setpassword] = useState('')

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
                    toast.success("Login successfully!")
                }
            }
        ).catch(e => {
            toast.error("Invalid username or password.",
                { position: "top-left" }
            )
        }
        )
    }

    const handleCreateNew = () => {
        navigate('/register')
    }

    return (
        <>
            <Header />
            <section className="h-100 gradient-form">
                <div className="container py-5 h-100">

                    {/* Breadcrumb o day, chu y xem co nen sai ko
                <div className="row">
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
                                <li className="breadcrumb-item" aria-current="page">
                                    Account
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    Login
                                </li>
                            </ol>
                        </nav>
                    </div>
                </div> */}

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
                                                        onClick={handleCreateNew}
                                                    >
                                                        Create new
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">

                                            <p className="medium mb-0">
                                                Surprise Box rất vui khi được chia sẻ những khoảnh khắc đặc biệt của
                                                cuộc sống cùng bạn.
                                                <br />
                                                Tại đây, chúng tôi không chỉ bán các sản phẩm, mà chúng tôi còn muốn
                                                tạo ra những trải nghiệm tuyệt vời và ý nghĩa cho bạn và những người
                                                thân yêu của bạn.
                                            </p>
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