import React from "react";

const DoctorList = ({ doctorsData }) => {
  const doctorImages = [
    "assets/img/doctors/doctors-1.jpg",
    "assets/img/doctors/doctors-2.jpg",
    "assets/img/doctors/doctors-3.jpg",
    "assets/img/doctors/doctors-4.jpg",
    // Add more paths if needed
  ];

  return (
    <section id="doctors" className="doctors section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Our Doctors</h2>
        <p>
          Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
          consectetur velit
        </p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {doctorsData?.map((doctor, index) => (
            <div
              className="col-lg-6"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 1)}
              key={doctor._id}
            >
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img
                    src={doctorImages[index % doctorImages.length]} // Loop through images
                    className="img-fluid"
                    alt={doctor.firstName}
                  />
                </div>
                <div className="member-info">
                  <h4>{doctor.firstName} {doctor.lastName}</h4>
                  <span>{doctor.specialization}</span>
                  <p>
                    Experience: {doctor.experience} years<br />
                    Fees: ₹{doctor.feesPerCunsaltation}<br />
                    Email: {doctor.email}<br />
                    Phone: {doctor.phone}<br />
                    Address: {doctor.address}
                  </p>
                  <div className="social">
                    <a href="#"><i className="bi bi-twitter-x" /></a>
                    <a href="#"><i className="bi bi-facebook" /></a>
                    <a href="#"><i className="bi bi-instagram" /></a>
                    <a href="#"><i className="bi bi-linkedin" /></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoctorList;
