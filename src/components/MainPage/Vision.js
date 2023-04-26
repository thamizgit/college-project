import '../../App.css';
import { useInView } from 'react-intersection-observer';

const Vision = () => {
    
    const {ref: visionRef,inView: visionVisible} = useInView();

    return(
        <article ref={visionRef} className={`vision ${visionVisible ? 'show':''}`}>
            <h2 className='vision-title'>Our Vision</h2>
            <p className='vision-content'>Our Institution committed to provide the Technical Education, for Rural People with ethical values, trained and make them fully prepared to face tomorrow's challeges and create a generation of technical personnel to suit the new developments in the industry.</p>
        </article>
    )
}
export default Vision