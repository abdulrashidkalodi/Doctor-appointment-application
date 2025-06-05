import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
import "../styles/LayoutStyles.css";
import { adminMenu, userMenu } from "./../Data/data";
const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  const doctorMenu = [
    { name: "Home", path: "/", icon: "fa-solid fa-house" },
    {
      name: "Appointments",
      path: "/doctor-appointments",
      icon: "fa-solid fa-list",
    },
    {
      name: "Profile",
      path: `/doctor/profile/${user?._id}`,
      icon: "fa-solid fa-user",
    },
  ];

  const menuItems = user?.isAdmin
    ? adminMenu
    : user?.isDoctor
    ? doctorMenu
    : userMenu;

  return (
    <>
      <header id="header" className="header sticky-top">
        {/* Topbar */}
        <div className="topbar d-flex align-items-center">
          <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center">
              <i className="bi bi-envelope d-flex align-items-center">
                <a href="mailto:contact@example.com">
                  abdulrashidkalodi@gmail.com
                </a>
              </i>
              <i className="bi bi-phone d-flex align-items-center ms-4">
                <span>+91-9048116962</span>
              </i>
              <div className="d-block d-lg-none d-flex align-items-center gap-3">
                {/* Profile + Notification Dropdown */}
                <div className="dropdown nav-profile ms-3 position-relative">
                  {/* Profile Icon with Badge */}
                  <a
                    href="#"
                    className="d-flex align-items-center text-decoration-none dropdown-toggle"
                    id="profileDropdown"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <Badge
                      count={user?.notifcation?.length || 0}
                      size="small"
                      offset={[3, -5]}
                      style={{ backgroundColor: "#f5222d" }}
                    >
                      <i className="bi bi-person-circle fs-4 text-dark"></i>
                    </Badge>
                  </a>

                  {/* Dropdown Menu */}
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="profileDropdown"
                  >
                    {/* User Name */}
                    <li className="dropdown-header text-center">
                      <strong>{user?.name}</strong>
                    </li>

                    {/* Profile Link */}
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        <i className="bi bi-person me-2"></i> Profile
                      </Link>
                    </li>

                    {/* Notification Link */}
                    <li>
                      <button
                        className="dropdown-item"
                        onClick={() => navigate("/notification")}
                      >
                        <i className="fa-solid fa-bell me-2"></i> Notifications
                        {user?.notifcation?.length > 0 && (
                          <span className="badge bg-danger ms-2">
                            {user.notifcation.length}
                          </span>
                        )}
                      </button>
                    </li>

                    {/* Divider */}
                    <li>
                      <hr className="dropdown-divider" />
                    </li>

                    {/* Logout Button */}
                    <li>
                      <button
                        className="dropdown-item text-danger"
                        onClick={handleLogout}
                      >
                        <i className="bi bi-box-arrow-right me-2"></i> Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
              <a
                href="https://www.linkedin.com/in/abdul-rashid-k-297748264/"
                className="twitter"
              >
                <i className="bi bi-twitter-x"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rashid-k-297748264/"
                className="facebook"
              >
                <i className="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rashid-k-297748264/"
                className="instagram"
              >
                <i className="bi bi-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/abdul-rashid-k-297748264/"
                className="linkedin"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Branding & Menu */}
        <div className="branding d-flex align-items-center">
          <div className="container position-relative d-flex align-items-center justify-content-between">
            <Link to="/" className="logo d-flex align-items-center me-auto">
              <img
                src="assets/img/logoo.jpg"
                alt="logo"
                style={{ width: "40px", marginRight: "30px" }}
              />
              <h1 className="sitename">Medilab</h1>
            </Link>

            {/* Dynamic Nav Menu */}
            <nav id="navmenu" className="navmenu">
              <ul className="list-unstyled d-flex gap-3 m-0 p-0">
                {menuItems.map((menu) => (
                  <li
                    key={menu.name}
                    className={
                      location.pathname === menu.path
                        ? "fw-bold  border-primary"
                        : ""
                    }
                  >
                    <Link
                      to={menu.path}
                      className="text-decoration-none px-2 py-1 d-inline-block"
                      style={{
                        fontSize: "1.1rem",
                        color:
                          location.pathname === menu.path ? "#0d6efd" : "#333",
                      }}
                    >
                      {menu.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
            {/* <a className="cta-btn d-none d-sm-block" href="#appointment">
              Make an Appointment
            </a> */}
            {/* Notification + Profile + Logout */}
            <div className="d-none d-lg-block d-flex align-items-center gap-3">
              {/* Profile + Notification Dropdown */}
              <div className="dropdown nav-profile ms-3 position-relative">
                {/* Profile Icon with Badge */}
                <a
                  href="#"
                  className="d-flex align-items-center text-decoration-none dropdown-toggle"
                  id="profileDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Badge
                    count={user?.notifcation?.length || 0}
                    size="small"
                    offset={[3, -5]}
                    style={{ backgroundColor: "#f5222d" }}
                  >
                    <i className="bi bi-person-circle fs-4 text-dark"></i>
                  </Badge>
                </a>

                {/* Dropdown Menu */}
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                >
                  {/* User Name */}
                  <li className="dropdown-header text-center">
                    <strong>{user?.name}</strong>
                  </li>

                  {/* Profile Link */}
                  <li>
                    <Link className="dropdown-item" to="/profile">
                      <i className="bi bi-person me-2"></i> Profile
                    </Link>
                  </li>

                  {/* Notification Link */}
                  <li>
                    <button
                      className="dropdown-item"
                      onClick={() => navigate("/notification")}
                    >
                      <i className="fa-solid fa-bell me-2"></i> Notifications
                      {user?.notifcation?.length > 0 && (
                        <span className="badge bg-danger ms-2">
                          {user.notifcation.length}
                        </span>
                      )}
                    </button>
                  </li>

                  {/* Divider */}
                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  {/* Logout Button */}
                  <li>
                    <button
                      className="dropdown-item text-danger"
                      onClick={handleLogout}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i> Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Page Content */}
      <main className="container my-4">{children}</main>
    </>
  );
};

export default Layout;
