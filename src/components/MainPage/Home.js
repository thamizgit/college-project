import Slider from "./Slider";
import Vision from "./Vision";
import Mission from "./Mission";
import Admission from "./Admission";
import KeepMeUpdate from "./KeepMeUpdate";
const Home = () => {
  return (
    <article className="main-page-section">
      <Slider />
      <article className="vision-mission">
        <Vision />
        <Mission />
      </article>
      <Admission />
      <KeepMeUpdate />
    </article>
  );
};
export default Home;
