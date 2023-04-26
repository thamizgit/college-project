const EceDept = ({ eceref }) => {
  return (
    <article ref={eceref} className="department">
      <article className="department-name">
        <h1>
          <i className="fa-solid fa-microchip" style={{ padding: "1rem" }}></i>
          Diploma in Electronics and Communication Engineering [ECE]
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
          <img
            src={require("../../images/browser-icon.png")}
            width={320}
            height={320}
          />
        </article>
        <article className="department-sec-con">
          <p>
            {" "}
            This is the lab of computer science. ISNDNduh vdinvdudv dm dinvnd dv
            ndvs dnvnu d vdn vdudnv dsvndundvs vdvdi duhuvds dvidsvn dv
            dvuvdnivdsuauvs dvsanvds vdsadvhbdv badinv dj idsvn dsavdvidvu dsdvs
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
    </article>
  );
};
export default EceDept;
