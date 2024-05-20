import { Link } from "react-router-dom";
import Header from "../../header/Header";
import Products from "../products/Products";

export default function Shop() {
    return (
        <>
            <Header />
            {/* Add breadcrumb o day */}
            <div className="row">
                <div className="col">
                    <nav
                        aria-label="breadcrumb"
                        className="bg-body-tertiary rounded-3 p-3 mb-4"
                    >

                        {/* Breadcrumb o day, chu y xem co nen sai ko */}
                        <ol className="breadcrumb mb-0">
                            <li className="breadcrumb-item">
                                <Link to={'/'}>Home</Link>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Shop
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Add breadcrumb o day */}
            <Products />
        </>
    )
}