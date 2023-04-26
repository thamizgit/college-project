
const DceDept = ({dceref}) => {
    return (
      <article ref={dceref} className="department">
        <article className="department-name">
          <h1>
            <i
              className="fa-solid fa-building-circle-check"
              style={{ padding: "1rem" }}
            ></i>
            Diploma for Civil Engineering [DCE]
          </h1>
        </article>
        <article className="department-sec">
          <article className="department-sec-con">
            <p>
              The course of Civil Engineering in Diploma basically focuses on
              planning, designing, execution and the maintenance of bridges,
              buildings, roads, etc. The job opportunities in this field
              comprise of Civil Engineer, Civil Engineering Drafter, Civil
              Engineering Technologist, Site Engineer, Construction Engineer,
              Geotechnical Engineer, Structural Engineer, Environment Engineer,
              Urban Planning Engineer, etc. Furthermore, the Civil Engineering
              Diploma Salary varies from INR 3-20 LPA.
            </p>
          </article>
        </article>

        <article className="department-sec-fac">
          <h1>Lab Facility</h1>
        </article>
        <article className="department-sec">
          <article className="department-sec-img">
            <img
              src={require("../../images/browser-icon.png")}
              width={320}
              height={320}
            />
          </article>
          <article className="department-sec-con">
            <p>
              {" "}
              This is the lab of computer science. ISNDNduh vdinvdudv dm dinvnd
              dv ndvs dnvnu d vdn vdudnv dsvndundvs vdvdi duhuvds dvidsvn dv
              dvuvdnivdsuauvs dvsanvds vdsadvhbdv badinv dj idsvn dsavdvidvu
              dsdvs
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
      </article>
    );
}   
export default DceDept