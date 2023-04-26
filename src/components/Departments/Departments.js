import DepartmentCards from "./DepartmentCards";
import "./Departments.css";
import DceDept from "./DceDept";
import AutoDept from "./AutoDept";
import { useRef } from "react";
import EeeDept from "./EeeDept";
import CseDept from "./CseDept";
import EceDept from "./EceDept";
import MechDept from "./MechDept";
const Departments = () => {
  const dceref = useRef();
  const autoref = useRef();
  const eeeref = useRef();
  const cseref = useRef();
  const eceref = useRef();
  const mechref = useRef();
  return (
    <article className="dept-module">
      <DepartmentCards
        dceref={dceref}
        autoref={autoref}
        eeeref={eeeref}
        cseref={cseref}
        eceref={eceref}
        mechref={mechref}
      />
      <DceDept dceref={dceref} />
      <AutoDept autoref={autoref} />
      <EeeDept eeeref={eeeref} />
      <CseDept cseref={cseref} />
      <EceDept eceref={eceref} />
      <MechDept mechref={mechref} />
    </article>
  );
};
export default Departments;
