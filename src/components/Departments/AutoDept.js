import { BsCarFrontFill } from "react-icons/bs";
import pdf from "../../PDF/placementInfo.pdf";
const AutoDept = ({ autoref }) => {
  return (
    <article
      style={{
        backgroundColor: "#e88b5c",
      }}
      ref={autoref}
      className="department"
    >
      <article className="department-name">
        <h1>
          Diploma in Automobile Engineering [AUTO]
          <BsCarFrontFill style={{ padding: "4px", marginBottom: "-8px" }} />
        </h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-con">
          <p>
            Automobile engineering is a branch of engineering that combines
            elements of mechanical, electrical, electronic, software, and safety
            engineering in the design, manufacture, and service of automobiles,
            buses, and trucks, as well as their subsystems. The course equips
            the students for a deeper understanding of the automobiles,
            designing, manufacturing, customer relationships, market analysis,
            also taking a comprehensive view of sales and management. Diploma in
            Automobile Engineering involves training in areas such as-
            automobile design, vehicle engineering, electrical and electronic
            systems used in vehicles, braking, material science, engines, fuels
            and lubricants etc.
          </p>
        </article>
      </article>

      <article className="department-sec-fac">
        <h1>Lab Facility</h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img alt="auto-lab"
            src={require("../../images/labs/autolab.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            Department of automobile Engineering was started in the year 2008
            with an intake of 60 students. Now the automobile engineering
            department is having 30 students for I year and a addition 6 seats
            for direct II year students. The department has well-qualified and
            vast experienced faculty members with proven ability and
            administrative skills. The laboratories are well equipped with
            advanced research facilities that fulfill the needs of the students
            and research scholars. The department is actively involved in
            teaching and research in the areas of Alternate fuels, Chassis
            Design, Engine Electronics and related areas.
          </p>
        </article>
      </article>
      <article className="department-sec reverse">
        <article className="department-sec-img">
          <img alt="auto-lab"
            src={require("../../images/labs/autotronics.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            Autotronics Lab is focused on the field of automotive electronics.
            This involves the study and development of electronic systems used
            in automobiles, such as sensors, control units, communication
            networks, and other related components. The lab conduct research in
            areas such as:Development of advanced driver assistance systems
            (ADAS) and autonomous driving technologies,Design and testing of
            automotive sensors and control systems Optimization of engine
            control and fuel efficiency Development of communication networks
            between different electronic systems in vehicles Analysis of vehicle
            performance data and diagnostics.
          </p>
        </article>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img alt="auto-lab"
            src={require("../../images/labs/specialmachine.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            Special Machines Lab - deals with the study, design, analysis, and
            testing of specialized machines used in the manufacturing of
            automotive components. The lab may offer training and education on
            the design and development of special machines, including materials
            selection, manufacturing processes, and automation techniques. It
            may also conduct research and development in the area of special
            machine technology, such as developing new machine concepts,
            optimizing machine performance, and exploring the use of emerging
            technologies, such as artificial intelligence and machine learning,
            in machine design and control.
          </p>
        </article>
      </article>
      <article className="department-sec reverse">
        <article className="department-sec-img">
          <img alt="auto-lab"
            src={require("../../images/labs/cnclathe.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            CNC Lathe Lab - deals with the study, design, analysis, and testing
            of computer numerical control (CNC) lathe machines, which are used
            in the manufacturing of automotive components. The lab may offer
            training and education on CNC lathe operations, programming, and
            maintenance. It may also conduct research and development in the
            area of CNC machining, such as developing new cutting tool
            materials, optimizing machining processes, and exploring the use of
            artificial intelligence and machine learning in CNC programming and
            control.
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
              <th className="s-no">S.No</th>
              <th>Name</th>
              <th>Exp (in Years)</th>
              <th>Subject</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Karthikeyan S</td>
              <td>4</td>
              <td>ENGG. PHYSICS</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Miss BHUVANA S</td>
              <td>2</td>
              <td>MATHEMATICS</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Miss BRINDHA S</td>
              <td>6</td>
              <td>ENGINEERING GRAPHICS</td>
            </tr>
            <tr>
              <td>4</td>
              <td> Mr. KANAGARAJU K</td>
              <td>4</td>
              <td> AUTOMOBILES</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Mr. JAYABAL T</td>
              <td>10</td>
              <td> DESIGN OF MACHNIE ELEMENTS</td>
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
export default AutoDept;
