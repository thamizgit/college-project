
import '../../src/components/Departments/Departments.css';
import { useNavigate } from 'react-router-dom';
import { HiDesktopComputer } from 'react-icons/hi';
const DepartmentCard = ({ icon, dept, dceref, autoref, eeeref, cseref, eceref, mechref }) => {
  const navigate = useNavigate();
  const handleClick = (dept) => {
    if (dept === "DCE") {
      navigate("/departments/dce");
    }
    else if (dept === "AUTO")
      navigate("/departments/auto");
    else if (dept === "EEE")
      navigate("/departments/eee");
    else if (dept === "CSE")
      navigate("/departments/cse");
    else if (dept === "ECE")
      navigate("/departments/ece");
    else
      navigate("/departments/mech");
  }
    return (
      <article onClick={() => handleClick(dept)} className={`dept-card ${dept}`}>
        <p className='dept-icon'>{icon}</p>
        <h1>{dept}</h1>
      </article>
    );
}
export default DepartmentCard