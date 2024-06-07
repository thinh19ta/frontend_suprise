export default function Blogs() {
  return (
    <>
      {/*Main Navigation*/}
      {/*Main layout*/}
      <main className="my-5">
        <div className="container">
          {/*Section: Content*/}
          <section className="text-center">
            <h4 className="mb-3">
              <strong>Bài viết</strong>
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
          </section>
          {/*Section: Content*/}
        </div>
      </main>
      {/*Main layout*/}
    </>
  );
}
