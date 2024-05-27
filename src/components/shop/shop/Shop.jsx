import Header from "../../header/Header";
import Products from "../products/Products";
// import Carousel from "../../layouts/Carousel";
import './index.css'
export default function Shop() {
    return (
        <>
            <Header />
            {/* <Carousel /> */}
            <div className="image-container">
                <img
                    src={`${process.env.PUBLIC_URL}/assets/images/qr/robothelp3.jpg`}
                    alt="Robot Help"
                    className="full-screen-image "
                />
            </div>
            <Products />
        </>
    );
}
