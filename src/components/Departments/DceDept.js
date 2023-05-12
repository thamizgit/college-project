import { BsFillBuildingFill } from "react-icons/bs";
import pdf from "../../PDF/placementInfo.pdf";
const DceDept = ({ dceref }) => {
  return (
    <article
      style={{
        backgroundColor: "purple",
        display: "flex",
        flexFlow: "column wrap",
      }}
      ref={dceref}
      className="department"
    >
      <article className="department-name">
        <p></p>
        <h1>
          Diploma for Civil Engineering [DCE]
          <BsFillBuildingFill
            style={{ padding: "4px", marginBottom: "-8px" }}
          />
        </h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-con">
          <p>
            The department of Civil Engineering was established in the year
            2007-2008 with the vision of fulfilling the current and emerging
            needs of society and to create a world class infrastructure
            development in Civil Engineering. Fully equipped laboratories in all
            Civil Engineering subjects as per the needs of Department of
            Technical Education. Establishment of Modern Equipment’s namely
            Total Station, GPS. Etc. Fully ventilated and lighted class rooms.
            Qualified faculties with thorough knowledge in latest technologies.
            Experienced persons to deliver practical knowledge to the students.
            Guest lectures and seminars by the eminent Engineers from various
            state, central, public sectors and private companies. Field Visit
            and survey camps are regularly organized by our department. The
            outgoing students are employed in various Departments not only in
            India but also in abroad.
          </p>
        </article>
      </article>

      <article className="department-sec-fac">
        <h1>Lab Facility</h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-img">
          <img
            src={require("../../images/labs/dcelab.jpg")}
            width="400px"
            height="300px"
            alt="dcelab"
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            This Laboratory is used for performing experiments for the subjects
            Building Material and Concrete Technology and Advanced Concrete
            Technology. Students will be able to Identify and list the various
            building materials, their properties and symbols. Also they will be
            able to perform various tests on different materials cement, Sand,
            aggregate, advanced concrete etc.. Fineness, consistency, setting
            time, Soundness, Compressive Strength, RCPT, NDT test by rebound
            hammer etc.
          </p>
        </article>
      </article>
      <article className="department-sec reverse">
        <article className="department-sec-img">
          <img
            src={require("../../images/labs/surveying.jpg")}
            width="400px"
            height="300px"
            alt="dcelab"
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            A Surveying Lab is a facility or department that is dedicated to the
            study, analysis, and measurement of the earth's surface and its
            features. Surveying is the science of determining the relative
            positions of points on or near the surface of the earth. The lab may
            offer training and education on surveying techniques, including
            topographic surveying, geodetic surveying, and construction
            surveying. It may also conduct research and development in the area
            of surveying technology, such as developing new surveying methods,
            improving accuracy and precision, and exploring the use of remote
            sensing and photogrammetry in surveying.
          </p>
        </article>
      </article>
      <article className="department-sec-fac">
        <h1>Faculty details </h1>
      </article>
      <article className="department-table">
        <table style={{ borderRadius: "10px" }}>
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
export default DceDept;
