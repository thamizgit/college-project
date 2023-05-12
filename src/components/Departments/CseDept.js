import { HiDesktopComputer } from "react-icons/hi";
import pdf from "../../PDF/placementInfo.pdf";
const CseDept = ({ cseref }) => {
  return (
    <article
      style={{ backgroundColor: "#c8bd4d" }}
      ref={cseref}
      className="department"
    >
      <article className="department-name">
        <h1>
          Diploma in Computer Science [CSE]
          <HiDesktopComputer style={{ padding: "4px", marginBottom: "-8px" }} />
        </h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-con">
          <p>
            The Computer Engineering Department was established in the year
            2007. It follows the curriculum prescribed by DOTE, Chennai for the
            award of Diploma. The department is well equipped with well
            established Laboratories. The Department has many areas of Interest
            like Hardware, Networks, Data Structures and Data Base Management
            System. Technically sound eminent staff from knowledge base our
            department. The Department has well equipped computing laboratories
            with latest computer system and rich repository of software covering
            a wide spectrum of applications.
          </p>
        </article>
      </article>

      <article className="department-sec-fac">
        <h1>Lab Facility</h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img
            alt="cse-lab"
            src={require("../../images/labs/computer.jpg")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            The department also encourages innovative projects and quality
            research in various interrelated domains. The department is actively
            involved in sponsored research projects and consultancy services.
            The department is involved in major research on which faculty
            members and students work on several areas such as Networks,
            Database, Theoretical Computer Science, Multimedia, Image
            Processing, Software Engineering, Data Mining, Big Data, Machine
            Learning and Internet of Things
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
              <td>Miss RAGINI K</td>
              <td>14</td>
              <td>C PROGRAMMING</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Miss TAMILTHENDREL B</td>
              <td>10</td>
              <td>NETWORKS</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Miss SUDHA M</td>
              <td>5</td>
              <td>Data Structure</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Mr.BALASUBRAMANIAN.V</td>
              <td>8</td>
              <td>Computer Fundamentals & Applications</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Miss GIRIJA R</td>
              <td>11</td>
              <td>Communication Skills</td>
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
export default CseDept;
