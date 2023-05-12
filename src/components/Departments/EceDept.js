import { MdOutlineCellTower } from "react-icons/md";
import pdf from "../../PDF/placementInfo.pdf";
const EceDept = ({ eceref }) => {
  return (
    <article
      style={{ backgroundColor: "#27ce38" }}
      ref={eceref}
      className="department"
    >
      <article className="department-name">
        <h1>
          Diploma in Electronics and Communication Engineering [ECE]
          <MdOutlineCellTower
            style={{ padding: "4px", marginBottom: "-8px" }}
          />
        </h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-con">
          <p>
            Diploma in Electronics and Communication Engineering(ECE) is a
            3-year course that focuses on understanding electronics networks and
            devices, electric magnetic fields, computer fundamentals,
            telecommunications, and control systems. ECE diploma courses can be
            done from any institution after completing class 10th. Diploma in
            Electronics and Communication Engineering admission can be through
            both merit or entrance based, depending upon the institution. The
            candidates must fulfill the minimum eligibility criteria for Diploma
            in Electronics and Communication Engineering before applying to any
            institution. An ECE diploma holder has diverse job opportunities in
            front of them in public as well as private organizations along with
            an average salary of about 3-4 lakh per annum in starting.
          </p>
        </article>
      </article>

      <article className="department-sec-fac">
        <h1>Lab Facility</h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img alt="ece-lab"
            src={require("../../images/labs/ecelab.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            The department of Electronics and Communication was established in
            the year 2008. Highly qualified faculty members with vast experience
            in Academic and Industry. Well-equipped separate laboratories for
            each discipline of study. Guest Lectures and Interaction seminars
            with visiting faculty to gain exposure into the core areas of study.
            Motivating our students to take to take part in various real time
            seminars. Communication performance to be improved for our students
            so we make arrangements from the semester starting itself. VLSI and
            also Cell Phone Servicing for our students.
          </p>
        </article>
      </article>
      <article className="department-sec reverse">
        <article className="department-sec-img">
          <img alt="ece-lab"
            src={require("../../images/labs/wiringandwinding.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            A Wiring and Winding Lab is a facility or department that is
            dedicated to the study, analysis, and testing of electrical wiring
            and winding systems. Electrical wiring and winding systems refer to
            the construction and arrangement of electrical conductors and coils
            used in various electrical machines and devices.The lab may offer
            training and education on wiring and winding techniques, including
            motor winding, transformer winding, and coil winding. It may also
            conduct research and development in the area of electrical wiring
            and winding technology, such as developing new materials and
            techniques.
          </p>
        </article>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img alt="ece-lab"
            src={require("../../images/labs/electronics.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            An Electronics Lab is a facility or department that is dedicated to
            the study, design, and testing of electronic circuits and devices.
            Electronics refers to the branch of physics and engineering that
            deals with the behavior and control of electrons, with applications
            ranging from consumer electronics to advanced technologies such as
            robotics, automation, and communication systems. The lab may offer
            training and education on electronic circuit design, testing, and
            troubleshooting. It may also conduct research and development in the
            area of electronics, such as developing new materials, optimizing
            circuit performance, and exploring the use of emerging technologies
            in electronics.
          </p>
        </article>
      </article>
      <article className="department-sec-fac">
        <h1>Faculty details </h1>
      </article>
      <article className="department-table">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Exp (in Years)</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>KavyaMaran</td>
              <td>2</td>
              <td>Maths</td>
            </tr>
          </tbody>
        </table>
      </article>
      <article>
        {" "}
        <p style={{ textAlign: "center", margin: "2rem" }}>
          <a
            style={{ color: "white" }}
            href={pdf}
            target="_blank"
            rel="noreferrer"
          >
            View Placement Details
          </a>
        </p>
      </article>
    </article>
  );
};
export default EceDept;
