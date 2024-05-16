export default function Carousel() {
    return (
        <div
            id="carouselExampleCaptions"
            className="carousel slide"
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
                    <img  src="https://th.bing.com/th/id/R.0dbdeb615cba4ecdb906a4a08a7b7978?rik=F68K8x07wWlr%2fQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fWW3Y3zB.jpg&ehk=cKsD3%2f8VZq7W5rNsu2l4fEbc4fm7C5a0SOKYOW8YWRU%3d&risl=&pid=ImgRaw&r=0" className="d-block w-50" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://th.bing.com/th/id/R.0dbdeb615cba4ecdb906a4a08a7b7978?rik=F68K8x07wWlr%2fQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fWW3Y3zB.jpg&ehk=cKsD3%2f8VZq7W5rNsu2l4fEbc4fm7C5a0SOKYOW8YWRU%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="https://th.bing.com/th/id/R.0dbdeb615cba4ecdb906a4a08a7b7978?rik=F68K8x07wWlr%2fQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fWW3Y3zB.jpg&ehk=cKsD3%2f8VZq7W5rNsu2l4fEbc4fm7C5a0SOKYOW8YWRU%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
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