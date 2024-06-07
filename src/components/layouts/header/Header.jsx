import { Link, NavLink } from 'react-router-dom'
import './index.css'
import useAuth from '../../../hooks/useAuth'
import { useContext } from 'react'
import { AuthContext } from '../../../hooks/AuthContext'
import toast from 'react-hot-toast'

export default function Header() {

    const [, accountId] = useAuth()
    const context = useContext(AuthContext)

    const handleLogout = () => {
        context.logout()
        toast.success("Logged out!")
    }

    return (
        <header className="App-header">
            <>
                <div className="superNav border-bottom py-2 bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 centerOnMobile">
                                <select className="me-3 border-0 bg-light">
                                    <option value="en-us">EN-US</option>
                                </select>
                                <span className="d-none d-lg-inline-block d-md-inline-block d-sm-inline-block d-xs-none me-3">
                                    <strong><a href="https://www.facebook.com/surpriseebox.vn" className='text-decoration-none'><i class="fa-brands fa-facebook"></i> Fanpage</a></strong>
                                </span>
                                <span className="me-3">
                                    <i className="fa-solid fa-phone me-1 text-warning" />{" "}
                                    <strong>090006789</strong>
                                </span>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 d-none d-lg-block d-md-block-d-sm-block d-xs-none text-end">
                                <span className="me-3">
                                    <i className="fa-solid fa-truck text-muted me-1" />
                                    <a className="text-muted" href="https://ghn.vn/blogs/trang-thai-don-hang" target="_blank" rel="noopener noreferrer">
                                        Shipping
                                    </a>
                                </span>
                                {/* <span className="me-3">
                                    <i className="fa-solid fa-file  text-muted me-2" />
                                    <a className="text-muted" href="#">
                                        Policy
                                    </a>
                                </span> */}
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg bg-white sticky-top navbar-light p-3 shadow-sm">
                    <div className="container">
                        <Link className="navbar-brand" to={'/'}>
                            <i className="fa-solid fa-gifts"></i> <strong>Surprise Box</strong>
                        </Link>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown"
                            aria-controls="navbarNavDropdown"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="mx-auto my-3 d-lg-none d-sm-block d-xs-block">
                            <div className="input-group">
                                <span className="border-warning input-group-text bg-warning text-white">
                                    <i className="fa-solid fa-magnifying-glass" />
                                </span>
                                <input
                                    type="text"
                                    className="form-control border-warning"
                                    style={{ color: "#7a7a7a" }}
                                />
                                <button className="btn btn-warning text-white">Search</button>
                            </div>
                        </div>
                        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
                            <div className="ms-auto d-none d-lg-block">
                                <div className="input-group">
                                    <span className="border-warning input-group-text bg-warning text-white">
                                        <i className="fa-solid fa-magnifying-glass" />
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control border-warning"
                                        style={{ color: "#7a7a7a" }}
                                    />
                                    <button className="btn btn-warning text-white">Search</button>
                                </div>
                            </div>

                            {/* comment activeClassName="active", but it still work! */}

                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link mx-2 text-uppercase"
                                        // activeClassName="active"
                                        to={'/'}
                                    >
                                        Trang chủ
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link mx-2 text-uppercase"
                                        // activeClassName="active"
                                        to={'/shop'}
                                    >
                                        Cửa hàng
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link mx-2 text-uppercase"
                                        // activeClassName="active"
                                        to={'/blogs'}
                                    >
                                        Blogs
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link mx-2 text-uppercase"
                                        // activeClassName="active"
                                        to={'/about'}
                                    >
                                        Liên hệ
                                    </NavLink>
                                </li>
                            </ul>

                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    {
                                        accountId &&
                                        <Link className="nav-link mx-2 text-uppercase" to={'/cart'}>
                                            <i className="fa-solid fa-cart-shopping me-1" /> Giỏ hàng
                                        </Link>
                                    }
                                </li>
                                <li className="nav-item">
                                    {
                                        accountId ?
                                            <div className='dropdown'>
                                                <Link className="nav-link mx-2 text-uppercase dropdown-toggle"
                                                    id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="fa-solid fa-circle-user me-1" /> Tài khoản
                                                </Link>
                                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                    <li><Link className="dropdown-item" to={'/profile'}>Thông tin</Link></li>
                                                    <li><Link className="dropdown-item" onClick={handleLogout}>Đăng xuất</Link></li>
                                                </ul>
                                            </div>
                                            :
                                            <Link className="nav-link mx-2 text-uppercase" to={'/login'}>
                                                <i className="fa-solid fa-right-to-bracket"></i> Đăng nhập
                                            </Link>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        </header>
    )
}