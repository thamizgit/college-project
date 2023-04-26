import { useInView } from "react-intersection-observer";
const Mission = () => {
    const {ref: visionRef,inView: visionVisible} = useInView();
    return(
        <article ref={visionRef} className={`vision ${visionVisible ? 'showMission':''}`}>
            <h2 className='vision-title'>Our Mission</h2>
            <li className="vision-content">To provide Quality Technical Education.</li>
            <li className="vision-content">To Make Competent Engineers.</li>
            <li className="vision-content">To instill a sense of enthusiasm.</li>
            <li className="vision-content">To train them and prepare them for a career.</li>
        </article>
    
    )
}
export default Mission