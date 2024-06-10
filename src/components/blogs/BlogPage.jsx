import Footer from "../layouts/footer/Footer";
import Header from "../layouts/header/Header";



export default function BlogPage() {
    return (
        <>
            <Header />
            {/*Main Navigation*/}
            {/*Main layout*/}
            <main className="my-5">
                <div className="container">
                    {/*Section: Content*/}
                    <section className="text-center">
                        <h4 className="mb-5">
                            <strong>Latest posts</strong>
                        </h4>
                        <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay"
                    data-mdb-ripple-init=""
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/blogs/nfc.jpg`}
                      className="img-fluid"
                      alt="nature"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      NFC Tag: Công Nghệ Kết Nối Tiện Lợi Cho Cuộc Sống Hiện Đại
                    </h5>
                    <p className="card-text text-start">
                      NFC (Near Field Communication) tag là công nghệ truyền
                      thông không dây tầm ngắn, được ứng dụng rộng rãi trong
                      nhiều lĩnh vực như thanh toán di động, quản lý thông tin,
                      và tự động hóa.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-primary"
                      data-mdb-ripple-init=""
                    >
                      Đọc
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay"
                    data-mdb-ripple-init=""
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/blogs/whichone.jpg`}
                      className="img-fluid"
                      alt="nature"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                      Tính Năng Gợi Ý Quà Qua Các Keyword của Khách Hàng
                    </h5>
                    <p className="card-text text-start">
                      Việc lựa chọn món quà phù hợp với sở thích và nhu cầu của
                      người nhận vẫn là một thách thức đối với nhiều người. Để
                      giải quyết vấn đề này, các hệ thống gợi ý quà tặng thông
                      minh dựa trên các keyword của khách hàng đã ra đời. 
                    </p>
                    <a
                      href="#!"
                      className="btn btn-primary"
                      data-mdb-ripple-init=""
                    >
                      Đọc
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay"
                    data-mdb-ripple-init=""
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/blogs/giftranking.jpg`}
                      className="img-fluid"
                      alt="nature"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Chọn gì vào dịp nào?</h5>
                    <p className="card-text text-start">
                      Trong cuộc sống hiện đại, tặng quà đã trở thành một phần
                      không thể thiếu trong các dịp đặc biệt như sinh nhật, kỷ
                      niệm, lễ hội hay thậm chí chỉ là những ngày bình thường để
                      thể hiện tình cảm. Mỗi năm, có những xu hướng quà tặng mới
                      xuất hiện.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-primary"
                      data-mdb-ripple-init=""
                    >
                      Đọc
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay"
                    data-mdb-ripple-init=""
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/blogs/valentine.jpg`}
                      className="img-fluid"
                      alt="nature"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                    Quà Tặng Valentine: Biểu Tượng Của Tình Yêu và Sự Quan Tâm
                    </h5>
                    <p className="card-text text-start">
                    Ngày Valentine, hay còn gọi là Ngày Lễ Tình Nhân, diễn ra vào ngày 14 tháng 2 hàng năm,
                     là dịp để các đôi tình nhân bày tỏ tình yêu cho nhau.
                    Một trong những cách phổ biến nhất để thể hiện tình cảm trong ngày này là tặng quà. 
                    </p>
                    <a
                      href="#!"
                      className="btn btn-primary"
                      data-mdb-ripple-init=""
                    >
                      Đọc
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay"
                    data-mdb-ripple-init=""
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/blogs/totnghiep.jpg`}
                      className="img-fluid"
                      alt="nature"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">
                    Quà Tặng Dịp Lễ Tốt Nghiệp: Tôn Vinh Thành Công và Khởi Đầu Mới
                    </h5>
                    <p className="card-text text-start">
                    Lễ tốt nghiệp là một trong những sự kiện quan trọng đánh dấu sự kết thúc của một hành trình học tập
                     và mở ra một chương mới trong cuộc đời mỗi người.
                     Đây là dịp để tôn vinh những nỗ lực, cố gắng và thành tựu đã đạt được.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-primary"
                      data-mdb-ripple-init=""
                    >
                      Đọc
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="card">
                  <div
                    className="bg-image hover-overlay"
                    data-mdb-ripple-init=""
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/blogs/kaka.jpg`}
                      className="img-fluid"
                      alt="nature"
                    />
                    <a href="#!">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      />
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Bí quyết chọn quà phù hợp</h5>
                    <p className="card-text text-start">
                      Trong cuộc sống hiện đại, tặng quà đã trở thành một phần
                      không thể thiếu trong các dịp đặc biệt như sinh nhật, kỷ
                      niệm, lễ hội hay thậm chí chỉ là những ngày bình thường để
                      thể hiện tình cảm. Mỗi năm, có những xu hướng quà tặng mới
                      xuất hiện.
                    </p>
                    <a
                      href="#!"
                      className="btn btn-primary"
                      data-mdb-ripple-init=""
                    >
                      Đọc
                    </a>
                  </div>
                </div>
              </div>
            </div>
                    </section>
                    {/*Section: Content*/}
                    {/* Pagination */}
                    <nav className="my-4" aria-label="...">
                        <ul className="pagination pagination-circle justify-content-center">
                            <li className="page-item">
                                <a
                                    className="page-link"
                                    href="/blogs"
                                    tabIndex={-1}
                                    aria-disabled="true"
                                >
                                    Previous
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="/blogs">
                                    1
                                </a>
                            </li>
                            <li className="page-item active" aria-current="page">
                                <a className="page-link" href="/blogs">
                                    2 <span className="sr-only">(current)</span>
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="/blogs">
                                    3
                                </a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="/blogs">
                                    Next
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </main>
            {/*Main layout*/}
            <Footer />

        </>
    )
}