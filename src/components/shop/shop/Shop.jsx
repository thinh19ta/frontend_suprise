
import { Link } from "react-router-dom";
import Footer from "../../layouts/footer/Footer";
import Header from "../../layouts/header/Header";
import Products from "../products/Products";
// import Carousel from "../../layouts/Carousel";
import './index.css'
export default function Shop() {
    return (
        <>
            <Header />
            {/* <Carousel /> */}
            <div className="image-container">
                <Link to={'/giftr'}>
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/qr/robothelp3.jpg`}
                    alt="Robot Help"
                    className="full-screen-image "
                />
                </Link>
            </div>
            <Products />
            <Footer />
        </>
    );
}
