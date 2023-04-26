import DepartmentCard from "../../Layouts/DepartmentCard";
export default function DepartmentCards({
  dceref,
  autoref,
  eeeref,
  cseref,
  eceref,
  mechref,
}) {
  return (
    <article className="dept-links">
      <DepartmentCard
        icon="fa-solid fa-building-circle-check"
        dept="DCE"
        dceref={dceref}
        autoref={autoref}
      />
      <DepartmentCard icon="fa-solid fa-gauge" dept="AUTO" autoref={autoref} />
      <DepartmentCard
        icon="fa-solid fa-plug-circle-bolt"
        dept="EEE"
        eeeref={eeeref}
      />
      <DepartmentCard
        icon="fa-solid fa-laptop-code"
        dept="CSE"
        cseref={cseref}
      />
      <DepartmentCard icon="fa-solid fa-microchip" dept="ECE" eceref={eceref} />
      <DepartmentCard icon="fa-solid fa-wrench" dept="MECH" mechref={mechref} />
    </article>
  );
}
