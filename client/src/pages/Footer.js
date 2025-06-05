import React from "react";

function Footer() {
  return (
    <div>
      {/* /Contact Section */}
      <footer id="footer" className="footer light-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">Medilab</span>
              </a>
              <div className="footer-contact pt-3">
                <p>HealthBridge Office</p>
                <p>Malappuram, Kerala, India</p>
                <p className="mt-3">
                  <strong>Phone:</strong> <span>+91-9048116962</span>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <span>abdulrashidkalodi@gmail.com</span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="">
                  <i className="bi bi-facebook" />
                </a>
                <a href="">
                  <i className="bi bi-instagram" />
                </a>
                <a href="">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">About us</a>
                </li>
                <li>
                  <a href="#">Book Appointment</a>
                </li>
                <li>
                  <a href="#">Terms of service</a>
                </li>
                <li>
                  <a href="#">Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href="#">Doctor Appointment Booking</a>
                </li>
                <li>
                  <a href="#">Patient Health Records (Coming Soon)</a>
                </li>
                <li>
                  <a href="#">Hospital Admin Dashboard</a>
                </li>
                <li>
                  <a href="#">SMS Notifications</a>
                </li>
              </ul>
            </div>
            {/* <div className="col-lg-2 col-md-3 footer-links">
              <h4>Hic solutasetp</h4>
              <ul>
                <li>
                  <a href="#">Molestiae accusamus iure</a>
                </li>
                <li>
                  <a href="#">Excepturi dignissimos</a>
                </li>
                <li>
                  <a href="#">Suscipit distinctio</a>
                </li>
                <li>
                  <a href="#">Dilecta</a>
                </li>
                <li>
                  <a href="#">Sit quas consectetur</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Nobis illum</h4>
              <ul>
                <li>
                  <a href="#">Ipsam</a>
                </li>
                <li>
                  <a href="#">Laudantium dolorum</a>
                </li>
                <li>
                  <a href="#">Dinera</a>
                </li>
                <li>
                  <a href="#">Trodelas</a>
                </li>
                <li>
                  <a href="#">Flexo</a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">HealthBridge</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            Designed by{" "}
            <a href="https://rashid-portfolio-five.vercel.app/">Rashid</a>{" "}
            Distributed by{" "}
            <a href="“https://rashid-portfolio-five.vercel.app/">HealthBridge</a>
          </div>
          <a href="https://rashid-portfolio-five.vercel.app/"></a>
        </div>
        <a href="https://rashid-portfolio-five.vercel.app/"></a>
      </footer>
      <a href="https://rashid-portfolio-five.vercel.app/"></a>
    </div>
  );
}

export default Footer;
