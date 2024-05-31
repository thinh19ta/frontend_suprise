
import Blogs from "../blogs/Blogs";
import Carousel from "../layouts/Carousel";
import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";
import Products from "../shop/products/Products";

export default function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <Blogs />
            <Products />
            <Footer />
        </>
    )
}