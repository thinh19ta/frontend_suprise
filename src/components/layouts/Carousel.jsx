export default function Carousel() {

    const imageStyle = {
        maxWidth: '88%', /* Adjust this value as needed */
        maxHeight: '450px', /* Adjust this value as needed */
        margin: '0 auto', /* Center the image horizontally */
        objectFit: 'cover', /* Ensures the image covers the given dimensions without stretching */
        borderRadius: '10px' /* Adjust this value for the desired roundness */
    }

    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide mt-2"
            data-bs-ride="carousel"
        >
            <div className="carousel-indicators">
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={0}
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={1}
                    aria-label="Slide 2"
                />
                <button
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide-to={2}
                    aria-label="Slide 3"
                />
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/carousels/carousel4.jpg`}
                        className="d-block w-100" alt="..."
                        style={imageStyle} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Surprise Box</h5>
                        {/* <p>Some representative placeholder content for the first slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/carousels/carousel1.jpg`}
                        className="d-block w-100" alt="..."
                        style={imageStyle} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Surprise Box</h5>
                        {/* <p>Some representative placeholder content for the second slide.</p> */}
                    </div>
                </div>
                <div className="carousel-item">
                    <img
                        src={`${process.env.PUBLIC_URL}/assets/images/carousels/carousel5.jpg`}
                        className="d-block w-100" alt="..."
                        style={imageStyle} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Surprise Box</h5>
                        {/* <p>Some representative placeholder content for the third slide.</p> */}
                    </div>
                </div>
            </div>
            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}