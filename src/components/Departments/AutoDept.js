const AutoDept = ({ autoref }) => {
  return (
    <article ref={autoref} className="department">
      <article className="department-name">
        <h1>
          <i className="fa-solid fa-gauge" style={{ padding: "1rem" }}></i>
          Diploma in Automobile Engineering [AUTO]
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
    </article>
  );
};
export default AutoDept;
