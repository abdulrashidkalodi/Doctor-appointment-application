import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import Footer from "./Footer";
import { useSelector } from "react-redux";
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  const { user } = useSelector((state) => state.user);

  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get("/api/v1/user/getAllDoctors", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (res.data.success) {
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <div>
      <Layout />
      {/* Hero Section */}
      <section id="hero" className="hero section light-background">
        <img src="assets/img/hero-bg.jpg" alt="" data-aos="fade-in" />
        <div className="container position-relative">
          <div
            className="welcome position-relative"
            data-aos="fade-down"
            data-aos-delay={100}
          >
            <h2>
              WELCOME TO MEDILAB{" "}
              <span
                style={{
                  backgroundColor: "#1977cc",
                  color: "#fff",
                  padding: "6px 16px",
                  borderRadius: "30px", // Round both ends
                  display: "inline-block",
                }}
              >
                Mr, {user.name}
              </span>
            </h2>
            <p>
              Connecting patients, doctors, and hospitals — all in one place.
            </p>
          </div>
          {/* End Welcome */}
          <div className="content row gy-4">
            <div className="col-lg-4 d-flex align-items-stretch">
              <div className="why-box" data-aos="zoom-out" data-aos-delay={200}>
                <h3>Why Choose MEDILAB?</h3>
                <p>
                  MEDILAB is designed to simplify the healthcare process by
                  allowing patients to book appointments from the comfort of
                  their homes. The system supports doctors in managing their
                  schedules and helps hospital administrators oversee
                  operations.
                </p>
                <div className="text-center">
                  <a href="#about" className="more-btn">
                    <span>Learn More</span>{" "}
                    <i className="bi bi-chevron-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* End Why Box */}
            <div className="col-lg-8 d-flex align-items-stretch">
              <div className="d-flex flex-column justify-content-center">
                <div className="row gy-4">
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div
                      className="icon-box"
                      data-aos="zoom-out"
                      data-aos-delay={300}
                    >
                      <i className="bi bi-clipboard-data" />
                      <h4>Online Appointment Booking</h4>
                      <p>
                        Patients can easily find doctors and book appointments
                        anytime from their phone or computer, without visiting
                        the hospital physically.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div
                      className="icon-box"
                      data-aos="zoom-out"
                      data-aos-delay={400}
                    >
                      <i className="bi bi-gem" />
                      <h4>Doctor Profile Management</h4>
                      <p>
                        Doctors can update their personal details, specialties,
                        availability, consultation fees, and view upcoming
                        appointments.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                  <div className="col-xl-4 d-flex align-items-stretch">
                    <div
                      className="icon-box"
                      data-aos="zoom-out"
                      data-aos-delay={500}
                    >
                      <i className="bi bi-inboxes" />
                      <h4>Admin Dashboard for Hospitals</h4>
                      <p>
                        The hospital admin has full control to manage doctors,
                        approve or reject doctor applications, monitor patient
                        bookings, and maintain overall system settings.
                      </p>
                    </div>
                  </div>
                  {/* End Icon Box */}
                </div>
              </div>
            </div>
          </div>
          {/* End  Content*/}
        </div>
      </section>
      {/* /Hero Section */}
      {/* Doctors Section */}
      <DoctorList doctorsData={doctors} />
      {/* /Doctors Section */}
      {/* About Section */}
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4 gx-5">
            <div
              className="col-lg-6 position-relative align-self-start"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <img src="assets/img/about.jpg" className="img-fluid" alt="" />
            </div>
            <div
              className="col-lg-6 content"
              data-aos="fade-up"
              data-aos-delay={100}
            >
              <h3>About Us</h3>
              <p>
                MediLab is a modern appointment scheduling platform for
                hospitals, clinics, and private practitioners. Our system brings
                together patients, doctors, and management under one secure
                environment.
              </p>
              <ul>
                <li>
                  <i className="fa-solid fa-vial-circle-check" />
                  <div>
                    <h5>Trusted & Transparent Service</h5>
                    <p>
                      We ensure smooth communication and booking experience.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-pump-medical" />
                  <div>
                    <h5>Admin Control Panel</h5>
                    <p>
                      The Admin role represents the hospital and approves doctor
                      registrations and monitors services.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="fa-solid fa-heart-circle-xmark" />
                  <div>
                    <h5>Accessible Anywhere</h5>
                    <p>
                      Our responsive design ensures the platform works across
                      devices.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
      {/* Stats Section */}
      {/* <section id="stats" className="stats section light-background">
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="fa-solid fa-user-doctor" />
                <div className="stats-item">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={85}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>Doctors</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="fa-regular fa-hospital" />
                <div className="stats-item">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={18}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>Departments</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="fas fa-flask" />
                <div className="stats-item">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={12}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>Research Labs</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="fas fa-award" />
                <div className="stats-item">
                  <span
                    data-purecounter-start={0}
                    data-purecounter-end={150}
                    data-purecounter-duration={1}
                    className="purecounter"
                  />
                  <p>Awards</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/* /Stats Section */}
      {/* Services Section */}
      {/* <section id="services" className="services section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Services</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          <div className="container">
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="service-item  position-relative">
                  <div className="icon">
                    <i className="fas fa-heartbeat" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Nesciunt Mete</h3>
                  </a>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-pills" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Eosle Commodi</h3>
                  </a>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-hospital-user" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Ledo Markt</h3>
                  </a>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-dna" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Asperiores Commodit</h3>
                  </a>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="#" className="stretched-link" />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-wheelchair" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Velit Doloremque</h3>
                  </a>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a href="#" className="stretched-link" />
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <i className="fas fa-notes-medical" />
                  </div>
                  <a href="#" className="stretched-link">
                    <h3>Dolori Architecto</h3>
                  </a>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="#" className="stretched-link" />
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/* /Services Section */}
      {/* Appointment Section */}
      {/* <section id="appointment" className="appointment section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Appointment</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <form
              action="forms/appointment.php"
              method="post"
              role="form"
              className="php-email-form"
            >
              <div className="row">
                <div className="col-md-4 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    required=""
                  />
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    className="form-control"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    required=""
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input
                    type="datetime-local"
                    name="date"
                    className="form-control datepicker"
                    id="date"
                    placeholder="Appointment Date"
                    required=""
                  />
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="department"
                    id="department"
                    className="form-select"
                    required=""
                  >
                    <option value="">Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select
                    name="doctor"
                    id="doctor"
                    className="form-select"
                    required=""
                  >
                    <option value="">Select Doctor</option>
                    <option value="Doctor 1">Doctor 1</option>
                    <option value="Doctor 2">Doctor 2</option>
                    <option value="Doctor 3">Doctor 3</option>
                  </select>
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  placeholder="Message (Optional)"
                  defaultValue={""}
                />
              </div>
              <div className="mt-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">
                  Your appointment request has been sent successfully. Thank
                  you!
                </div>
                <div className="text-center">
                  <button type="submit">Make an Appointment</button>
                </div>
              </div>
            </form>
          </div>
        </section> */}
      {/* /Appointment Section */}
      {/* Departments Section */}
      {/* <section id="departments" className="departments section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Departments</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row">
              <div className="col-lg-3">
                <ul className="nav nav-tabs flex-column">
                  <li className="nav-item">
                    <a
                      className="nav-link active show"
                      data-bs-toggle="tab"
                      href="#departments-tab-1"
                    >
                      Cardiology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#departments-tab-2"
                    >
                      Neurology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#departments-tab-3"
                    >
                      Hepatology
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#departments-tab-4"
                    >
                      Pediatrics
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#departments-tab-5"
                    >
                      Eye Care
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9 mt-4 mt-lg-0">
                <div className="tab-content">
                  <div className="tab-pane active show" id="departments-tab-1">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Cardiology</h3>
                        <p className="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Et nobis maiores eius. Voluptatibus ut enim blanditiis
                          atque harum sint. Laborum eos ipsum ipsa odit magni.
                          Incidunt hic ut molestiae aut qui. Est repellat minima
                          eveniet eius et quis magni nihil. Consequatur dolorem
                          quaerat quos qui similique accusamus nostrum rem vero
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-1.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="departments-tab-2">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>Et blanditiis nemo veritatis excepturi</h3>
                        <p className="fst-italic">
                          Qui laudantium consequatur laborum sit qui ad sapiente
                          dila parde sonata raqer a videna mareta paulona marka
                        </p>
                        <p>
                          Ea ipsum voluptatem consequatur quis est. Illum error
                          ullam omnis quia et reiciendis sunt sunt est. Non
                          aliquid repellendus itaque accusamus eius et velit
                          ipsa voluptates. Optio nesciunt eaque beatae accusamus
                          lerode pakto madirna desera vafle de nideran pal
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-2.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="departments-tab-3">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Impedit facilis occaecati odio neque aperiam sit
                        </h3>
                        <p className="fst-italic">
                          Eos voluptatibus quo. Odio similique illum id quidem
                          non enim fuga. Qui natus non sunt dicta dolor et. In
                          asperiores velit quaerat perferendis aut
                        </p>
                        <p>
                          Iure officiis odit rerum. Harum sequi eum illum
                          corrupti culpa veritatis quisquam. Neque
                          necessitatibus illo rerum eum ut. Commodi ipsam minima
                          molestiae sed laboriosam a iste odio. Earum odit
                          nesciunt fugiat sit ullam. Soluta et harum voluptatem
                          optio quae
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-3.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="departments-tab-4">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Fuga dolores inventore laboriosam ut est accusamus
                          laboriosam dolore
                        </h3>
                        <p className="fst-italic">
                          Totam aperiam accusamus. Repellat consequuntur iure
                          voluptas iure porro quis delectus
                        </p>
                        <p>
                          Eaque consequuntur consequuntur libero expedita in
                          voluptas. Nostrum ipsam necessitatibus aliquam fugiat
                          debitis quis velit. Eum ex maxime error in consequatur
                          corporis atque. Eligendi asperiores sed qui veritatis
                          aperiam quia a laborum inventore
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-4.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="departments-tab-5">
                    <div className="row">
                      <div className="col-lg-8 details order-2 order-lg-1">
                        <h3>
                          Est eveniet ipsam sindera pad rone matrelat sando reda
                        </h3>
                        <p className="fst-italic">
                          Omnis blanditiis saepe eos autem qui sunt debitis
                          porro quia.
                        </p>
                        <p>
                          Exercitationem nostrum omnis. Ut reiciendis
                          repudiandae minus. Omnis recusandae ut non quam ut
                          quod eius qui. Ipsum quia odit vero atque qui
                          quibusdam amet. Occaecati sed est sint aut vitae
                          molestiae voluptate vel
                        </p>
                      </div>
                      <div className="col-lg-4 text-center order-1 order-lg-2">
                        <img
                          src="assets/img/departments-5.jpg"
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/* /Departments Section */}

      {/* Faq Section */}
      {/* <section id="faq" className="faq section light-background">
          <div className="container section-title" data-aos="fade-up">
            <h2>Frequently Asked Questions</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div
                className="col-lg-10"
                data-aos="fade-up"
                data-aos-delay={100}
              >
                <div className="faq-container">
                  <div className="faq-item faq-active">
                    <h3>Non consectetur a erat nam at lectus urna duis?</h3>
                    <div className="faq-content">
                      <p>
                        Feugiat pretium nibh ipsum consequat. Tempus iaculis
                        urna id volutpat lacus laoreet non curabitur gravida.
                        Venenatis lectus magna fringilla urna porttitor rhoncus
                        dolor purus non.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  <div className="faq-item">
                    <h3>
                      Feugiat scelerisque varius morbi enim nunc faucibus?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  <div className="faq-item">
                    <h3>
                      Dolor sit amet consectetur adipiscing elit pellentesque?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Eleifend mi in nulla posuere sollicitudin aliquam
                        ultrices sagittis orci. Faucibus pulvinar elementum
                        integer enim. Sem nulla pharetra diam sit amet nisl
                        suscipit. Rutrum tellus pellentesque eu tincidunt.
                        Lectus urna duis convallis convallis tellus. Urna
                        molestie at elementum eu facilisis sed odio morbi quis
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  <div className="faq-item">
                    <h3>
                      Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Dolor sit amet consectetur adipiscing elit pellentesque
                        habitant morbi. Id interdum velit laoreet id donec
                        ultrices. Fringilla phasellus faucibus scelerisque
                        eleifend donec pretium. Est pellentesque elit
                        ullamcorper dignissim. Mauris ultrices eros in cursus
                        turpis massa tincidunt dui.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  <div className="faq-item">
                    <h3>
                      Tempus quam pellentesque nec nam aliquam sem et tortor?
                    </h3>
                    <div className="faq-content">
                      <p>
                        Molestie a iaculis at erat pellentesque adipiscing
                        commodo. Dignissim suspendisse in est ante in. Nunc vel
                        risus commodo viverra maecenas accumsan. Sit amet nisl
                        suscipit adipiscing bibendum est. Purus gravida quis
                        blandit turpis cursus in
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                  <div className="faq-item">
                    <h3>Perspiciatis quod quo quos nulla quo illum ullam?</h3>
                    <div className="faq-content">
                      <p>
                        Enim ea facilis quaerat voluptas quidem et dolorem. Quis
                        et consequatur non sed in suscipit sequi. Distinctio
                        ipsam dolore et.
                      </p>
                    </div>
                    <i className="faq-toggle bi bi-chevron-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      {/* /Faq Section */}
      {/* Contact Section */}
      {/* <section id="contact" className="contact section">
          <div className="container section-title" data-aos="fade-up">
            <h2>Contact</h2>
            <p>
              Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
              consectetur velit
            </p>
          </div>
          <div className="mb-5" data-aos="fade-up" data-aos-delay={200}>
            <iframe
              style={{ border: 0, width: "100%", height: 270 }}
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
              frameBorder={0}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
              <div className="col-lg-4">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Location</h3>
                    <p>A108 Adam Street, New York, NY 535022</p>
                  </div>
                </div>
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p>+1 5589 55488 55</p>
                  </div>
                </div>
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={500}
                >
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>info@example.com</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required=""
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required=""
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required=""
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section> */}

      <Footer />
    </div>
  );
};

export default HomePage;
