const MechDept = ({ mechref }) => {
  return (
    <article ref={mechref} className="department">
      <article className="department-name">
        <h1>
          <i className="fa-solid fa-wrench" style={{ padding: "1rem" }}></i>
          Diploma in Mechanical Engineering [MECH]
        </h1>
      </article>
      <article className="department-sec">
        <article className="department-sec-con">
          <p>
            The duration of the Diploma in Mechanical Engineering is 3 years.
            The candidates can pursue Diploma in Mechanical Engineering
            immediately after their 10th entrance exam. The entry to Mechanical
            engineering polytechnic course is either based on merit list or
            entrance exam. The top entrance exams for Diploma in Mechanical
            engineering are JEECUP, JEXPO, Odisha DET, etc. The top recruiters
            for the Mechanical engineering Diploma courses are Bajaj, Ford,
            Honda, NTPC, BHEL Hindustan Unilever, L&T, Ashok Leyland, etc.
            Candidates who have high aptitude and interest in machines, advanced
            mechanics, robotics should pursue this course. Candidates after
            completion of the course are accepted in different job profiles such
            as Mechanical Engineer, Manufacturing Manager, Sanction Head, Sales
            Engineer, Mechanical Technician, etc. The average salary of
            Mechanical Diploma Holders range between INR 20000-INR 500000.
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
    </article>
  );
};
export default MechDept;
