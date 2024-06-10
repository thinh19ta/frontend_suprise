import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid" style={{ backgroundColor: "#eee" }}>
      <footer className="py-5">
        <div className="row">
          {/* <div className="col-6 col-md-2 mb-3">
            <h5>Section</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item mb-2">
                <a href="#" className="nav-link p-0 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
          </div> */}
          <div className="col-5 col-md-3 mb-3 ms-5">
          <h5>Tính năng</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Tính năng
                </Link>
              </li>
              <li to="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Liên hệ
                </Link>
              </li>
              <li to="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Về Surprise Box
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-5 col-md-2 mb-3">
            <h5>Tính năng</h5>
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Trang chủ
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Tính năng
                </Link>
              </li>
              <li to="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Liên hệ
                </Link>
              </li>
              <li to="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  FAQs
                </Link>
              </li>
              <li className="nav-item mb-2">
                <Link to="#" className="nav-link p-0 text-body-secondary">
                  Về Surprise Box
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="newsletter1" className="visually-hidden">
                  Địa chỉ Email
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  className="form-control"
                  placeholder="Địa chỉ Email"
                  fdprocessedid="ed2eb"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  fdprocessedid="uheh5j"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="d-flex flex-column flex-sm-row justify-content-center py-4 my-4 border-top">
          <p>© 2024 Company, Inc. All rights reserved.</p>
          <ul className="list-unstyled d-flex">
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i class="fa-brands fa-facebook fa-xl"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i class="fa-brands fa-instagram fa-xl"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis" href="#">
                <i class="fa-brands fa-tiktok fa-xl"></i>
              </a>
            </li>
          </ul>
        </div> */}
      </footer>
    </div>

  )
}