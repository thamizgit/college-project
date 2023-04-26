const CseDept = ({ cseref }) => {
  return (
    <article ref={cseref} className="department">
      <article className="department-name">
        <h1>
          <i
            className="fa-solid fa-laptop-code"
            style={{ padding: "1rem" }}
          ></i>
          Diploma in Computer Science [CSE]
        </h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-con">
          <p>
            A diploma in Computer Science is a diploma level certificate and
            professional course that teach learners about designing and
            developing methods and tools required in computer and software
            fields and the programming languages to work in that environment
            Diploma in Computer Science broadens the computer knowledge of the
            learners and help them in analyzing and developing new applications
            Diploma in Computer Science helps one in getting a job in the
            software and hardware companies Interested learners can pursue this
            diploma course from a well-recognized college Average fee for
            Diploma in Computer Science is between INR 10 to 60 thousand in a
            year and the course may take 1 to 3 year to complete
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
    </article>
  );
};
export default CseDept;
