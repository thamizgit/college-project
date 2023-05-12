import DepartmentCard from "../../Layouts/DepartmentCard";
import { HiDesktopComputer } from "react-icons/hi";
import { BsFillBuildingFill } from "react-icons/bs";
import { BsCarFrontFill } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { MdOutlineCellTower } from "react-icons/md";
import { BsTools } from 'react-icons/bs';
export default function DepartmentCards() {
  return (
    <article className="dept-links">
      <DepartmentCard icon={<BsFillBuildingFill />} dept="DCE" />
      <DepartmentCard icon={<BsCarFrontFill />} dept="AUTO" />
      <DepartmentCard icon={<MdElectricalServices />} dept="EEE" />
      <DepartmentCard icon={<HiDesktopComputer />} dept="CSE" />
      <DepartmentCard icon={<MdOutlineCellTower />} dept="ECE" />
      <DepartmentCard icon={<BsTools />} dept="MECH" />
    </article>
  );
}
