import { MdElectricalServices } from "react-icons/md";
import pdf from "../../PDF/placementInfo.pdf";
const EeeDept = ({ eeeref }) => {
  return (
    <article
      style={{ backgroundColor: "#df5d82" }}
      ref={eeeref}
      className="department"
    >
      <article className="department-name">
        <h1>
          Diploma in Electrical & Electronics Engineering [EEE]
          <MdElectricalServices
            style={{ padding: "4px", marginBottom: "-8px" }}
          />
        </h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-con">
          <p>
            The Diploma in Electrical and Electronics Engineering deals with the
            study and application of electricity, electronics and
            electromagnetism, DC and AC machines, Power System (generation,
            transmission and utilization), Power Electronics and PLC, Digital
            Electronics and Micro Controllers. This programme also offers
            adequate exposure to electrical wiring and maintenance, electronics
            engineering, industrial management and smart technologies and
            Engineering Drawing. In addition students will also get exposed to
            software like C Programming, MATLAB & ECAD. By the end of the
            programme student will be able to find job opportunity in industrial
            sector or opt for higher studies. The mission of this department is
            to prepare and train students for future industry with excellent
            skill, knowledge, attitude to give greater performance and help in
            building the nation in the electrical and electronics engineering
            field.
          </p>
        </article>
      </article>

      <article className="department-sec-fac">
        <h1>Lab Facility</h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img alt="eee-lab"
            src={require("../../images/labs/eeelab.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            The Electrical and Electronics Engineering department beginning in
            the year 2007 with an intake of 60 students as First batch. The
            department has well qualified and dedicated faculty members with on
            hand field and academic experience. The department has grown during
            the year to cater the need of modern industry and requirement of
            syllabus / scheme prescribed by the Director of Technical Education
            Tamil Nadu. The department provides excellent opportunity to
            students in project work, in house preparation of technical papers
            for seminar etc.
          </p>
        </article>
      </article>
      <article className="department-sec reverse">
        <article className="department-sec-img">
          <img alt="eee-lab"
            src={require("../../images/labs/ledbulb.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            A LED bulb manufacturing lab is a facility or department that is
            dedicated to the design, development, and production of LED bulbs.
            LED stands for Light Emitting Diode, and LED bulbs are highly
            energy-efficient lighting devices that have gained popularity in
            recent years due to their long lifespan and low power consumption.
            The lab may offer training and education on LED bulb manufacturing
            processes, including materials selection, circuit design, and
            assembly techniques. It provides a platform for students,
            researchers, and professionals to gain hands-on experience with LED
            manufacturing and to develop innovative solutions for improving the
            efficiency, quality, and sustainability of LED lighting.
          </p>
        </article>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img alt="eee-lab"
            src={require("../../images/labs/electricalmachines.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            An Electrical Machines Lab is a facility or department that is
            dedicated to the study, testing, and analysis of electrical
            machines. Electrical machines refer to devices that convert
            electrical energy into mechanical energy, or vice versa. These
            machines are commonly used in a wide range of applications, from
            power generation and transportation to industrial machinery and
            household appliances. It provides a platform for students,
            researchers, and professionals to gain hands-on experience with
            electrical machines and to develop innovative solutions for
            improving their efficiency, reliability, and sustainability.
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
              <td>Miss BRINDHA k</td>
              <td>5</td>
              <td>ELECTRONICS</td>
            </tr>
            <tr>
              <td>2</td>
              <td> Miss RADHA T</td>
              <td>7</td>
              <td>COMMUNICATION ENGLISH</td>
            </tr>
            <tr>
              <td>3</td>
              <td> Miss SARITHA P</td>
              <td>5</td>
              <td>Applied Mathematics</td>
            </tr>
            <tr>
              <td>4</td>
              <td> Mr. BALAJI S</td>
              <td>6</td>
              <td>Engineering Chemistry</td>
            </tr>
            <tr>
              <td>5</td>
              <td> Mr. CHANDRASEKAR R</td>
              <td>5</td>
              <td>Engineering Graphics </td>
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
export default EeeDept;
