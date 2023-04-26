const EeeDept = ({ eeeref }) => {
  return (
    <article ref={eeeref} className="department">
      <article className="department-name">
        <h1>
          <i
            className="fa-solid fa-plug-circle-bolt"
            style={{ padding: "1rem" }}
          ></i>
          Diploma in Electrical & Electronics Engineering [EEE]
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
            sector or opt for higher studies.
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
    </article>
  );
};
export default EeeDept;
