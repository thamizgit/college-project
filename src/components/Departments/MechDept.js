import { BsTools } from "react-icons/bs";
import pdf from "../../PDF/placementInfo.pdf";
const MechDept = ({ mechref }) => {
  return (
    <article
      style={{ backgroundColor: "#15a5d1" }}
      ref={mechref}
      className="department"
    >
      <article className="department-name">
        <h1>
          Diploma in Mechanical Engineering [MECH]
          <BsTools style={{ padding: "4px", marginBottom: "-8px" }} />
        </h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-con">
          <p>
            Department of Mechanical Engineering was started in 2007 with an
            intake of 60 students. In 2011 the all India council for technical
            education granted approval for the addition of 60 students. Now the
            mechanical engineering department is having 240 students for I year
            and a addition 48 seats for direct II year students. Candidates who
            have high aptitude and interest in machines, advanced mechanics,
            robotics should pursue this course. Candidates after completion of
            the course are accepted in different job profiles such as Mechanical
            Engineer, Manufacturing Manager, Sanction Head, Sales Engineer,
            Mechanical Technician, etc. The average salary of Mechanical Diploma
            Holders range between INR 20000-INR 500000.
          </p>
        </article>
      </article>

      <article className="department-sec-fac">
        <h1>Lab Facility</h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img alt="mech-lab"
            src={require("../../images/labs/cncmilling.jpg")}
            width={350}
            height={350}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            A CNC milling lab is a facility or a department that is dedicated to
            the use of computer numerical control (CNC) milling machines for
            manufacturing and machining purposes. CNC milling machines are a
            type of machine tool that are used to cut and shape a variety of
            materials, such as metal, wood, and plastic, by removing material
            from a workpiece using a rotating cutting tool. It allows for the
            creation of complex geometries and the production of parts with
            tight tolerances, making it a crucial part of modern manufacturing
            processes.
          </p>
        </article>
      </article>
      <article className="department-sec reverse">
        <article className="department-sec-img">
          <img alt="mech-lab"
            src={require("../../images/labs/thermal.jpg")}
            width={350}
            height={350}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            A Thermal Lab is a facility or department that is dedicated to the
            study, analysis, and testing of thermal systems and processes.
            Thermal systems refer to any system that involves the transfer,
            conversion, or utilization of heat energy. The lab may offer
            training and education on thermal systems and processes, including
            heat transfer, thermodynamics, and fluid mechanics. It provides a
            platform for students, researchers, and professionals to gain
            hands-on experience with thermal equipment and techniques and to
            develop innovative solutions for improving the efficiency,
            sustainability, and safety of thermal systems and processes.
          </p>
        </article>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img alt="mech-lab"
            src={require("../../images/labs/lathework.jpg")}
            width={350}
            height={350}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            A Lathe Work Lab is a facility or department that is dedicated to
            the study, testing, and analysis of lathe operations and practices.
            A lathe is a machine tool used to shape and cut materials by
            rotating the workpiece against a cutting tool. Lathes are used in a
            variety of manufacturing processes, including metalworking,
            woodworking, and glassworking. The lab may offer training and
            education on lathe operation, safety, and maintenance. It may also
            conduct research and development in the area of lathe technology,
            such as developing new cutting tools, optimizing lathe operations,
            and exploring the use of automation and robotics in lathe machining.
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
              <td>Mr. CHINNADURAI K</td>
              <td>20</td>
              <td>MECHANICAL ENGINEEING</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Mr. GOBIKRISHNAN P</td>
              <td>10</td>
              <td>Strength of Material</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Mr. KANAGARAJU K</td>
              <td>5</td>
              <td>Engineering Drawing</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mr. HARIHARAN M</td>
              <td>4</td>
              <td>MACHINE DRAWING</td>
            </tr>
            <tr>
              <td>5</td>
              <td> Mr. KARTHIKEYAN G </td>
              <td>7</td>
              <td>THERMAL ENGINEERING</td>
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
export default MechDept;
