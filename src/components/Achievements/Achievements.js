import AchievementsData from "../Data/AchievementsData";
import "./Achievements.css";

const Achievements = () => {
  const acharr = AchievementsData();
  return (
    <main className="achievements-section">
      <h1 style={{textAlign:"center",marginTop:"2rem"}}>State Rank Details</h1>
      <table className="achievements-table">
        <thead>
          <tr>
            <th className="s-no">S.No</th>
            <th>Register No.</th>
            <th>Name</th>
            <th>Year/Month</th>
            <th>Department</th>
            <th>Semester</th>
            <th>Mark</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {acharr.map((data, pos) => (
            <tr key={pos}>
              <td>{pos + 1}</td>
              <td>{data.register}</td>
              <td>
                {data.img ? (
                  <>
                    <img
                      style={{ display: "block", margin: "0 auto" }}
                      src={data.img} alt={data.name}
                    />
                    <p style={{ textAlign: "center" }}>{data.name}</p>
                  </>
                ) : (
                  data.name
                )}
              </td>

              <td>{data.year}</td>
              <td>{data.department}</td>
              <td>{data.semester}</td>
              <td>{data.mark}</td>
              <td>{data.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
export default Achievements;
