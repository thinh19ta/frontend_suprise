import Header from "../header/Header";
import Blogs from "../layouts/Blogs";
import Carousel from "../layouts/Carousel";
import Products from "../shop/products/Products";

export default function Home() {
    return (
        <>
            <Header />
            <Carousel />
            <Blogs />
            <Products />
        </>
    )
}