const Admission = () => {
  return (
    <article className="main-box">
      <article className="inner">
        <article>
          <h1
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "10px 10px 0px 0px",
              color: "darkblue",
              fontWeight: "bolder",
              padding: "0.5rem",
              fontSize: "2rem",
            }}
          >
            Admissions
          </h1>
          <p
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "0px 0px 10px 10px",
              color: "darkblue",
              fontWeight: "bold",
              padding: "0.5rem",
            }}
          >
            Sudharshana Polytechnic College offers to gain knowledge and
            expertize through its trained and experienced faculty in the fields
            of Automobile Engineering, Civil Engineering, Computer Science
            Engineering, Electrical Engineering, Electronics & Communication
            Engineering, Mechanical Engineering.
          </p>
        </article>
        <article>
          <h1
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "10px 10px 0px 0px",
              color: "darkblue",
              fontWeight: "bolder",
              padding: "0.5rem",
              fontSize: "2rem",
            }}
          >
            Facilities
          </h1>
          <p
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "0px 0px 10px 10px",
              color: "darkblue",
              fontWeight: "bold",
              padding: "0.5rem",
            }}
          >
            Courses offered by institute are recognized and acknowlegded by
            approving bodies like AICTE. Sudharshana Polytechnic College provide
            good facilities all around the campus like Auditorium, Cafeteria,
            Gym, Hospital / Medical Facilities, Hostel, Labs, Library, Sports
            Complex, Wi-Fi Campus.
          </p>
        </article>
      </article>
      <article className="admission-img">
        <img alt="bulb-image1" src={require("../../images/bulp-img.png")} />
      </article>
      <article className="inner-2">
        <article>
          <h1
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "10px 10px 0px 0px",
              color: "darkblue",
              fontWeight: "bolder",
              padding: "0.5rem",
              fontSize: "2rem",
              marginTop: "-14rem",
            }}
          >
            Overview
          </h1>
          <p
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "0px 0px 10px 10px",
              color: "darkblue",
              fontWeight: "bold",
              padding: "0.5rem",
            }}
          >
            Sudharshana Polytechnic College (SPC) located at Kalipatti
            VillageAmmapatti PostThuraiyur TkTrichy DtPin:621 014 Thuraiyur
            Tiruchirappalli Tamil Nadu is one of the popular colleges in India.
            The College has been rated by 19 people on iCBSE. has been viewed 616 times by the visitors on iCBSE Source.
          </p>
        </article>
        <article>
          <h1
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "10px 10px 0px 0px",
              color: "darkblue",
              fontWeight: "bolder",
              padding: "0.5rem",
              fontSize: "2rem",
              marginTop: "-14rem",
            }}
          >
            Placements
          </h1>
          <p
            style={{
              backgroundColor: "whitesmoke",
              borderRadius: "0px 0px 10px 10px",
              color: "darkblue",
              fontWeight: "bold",
              padding: "0.5rem",
              
              
            }}
          >
            A rise of 3% was witnessed in the number of companies that visited
            the campus in 2022 as compared with 2021 A rise of 12% in the
            highest package was observed 2022 as compared with 2021 The average
            package in 2022 went up by 13% as compared with 2021.
          </p>
        </article>
      </article>
    </article>
  );
};
export default Admission;
