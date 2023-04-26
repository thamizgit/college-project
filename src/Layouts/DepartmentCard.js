
import '../../src/components/Departments/Departments.css';
const DepartmentCard = ({ icon, dept ,dceref,autoref,eeeref,cseref,eceref,mechref}) => {
  const handleClick = (dept) => {
    if (dept === "DCE")
      dceref.current?.scrollIntoView({ behavior: 'smooth' });
    else if (dept === "AUTO")
      autoref.current?.scrollIntoView({ behavior: "smooth" });
    else if (dept === "EEE")
      eeeref.current?.scrollIntoView({ behavior: "smooth" });
    else if (dept === "CSE")
      cseref.current?.scrollIntoView({ behavior: "smooth" });
    else if (dept === "ECE")
      eceref.current?.scrollIntoView({ behavior: "smooth" });
    else
      mechref.current?.scrollIntoView({ behavior: "smooth" });
  }
    return (
      <article onClick={()=>handleClick(dept)} className="dept-card">
        <i className={icon} style={{ fontSize: "3rem" }} onClick={() => handleClick(dept)} />
        <h1>{dept}</h1>
      </article>
    );
}
export default DepartmentCard;