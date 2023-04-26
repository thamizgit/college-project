import {useState,useEffect} from 'react';

const useWindowSize = () => {
   const [windowSize,setWindowSize] = useState({width:undefined,height:undefined})

    useEffect(()=>{
        const adjust = ()=> {
            setWindowSize({width:window.innerWidth,height:window.innerHeight})
        }
        adjust();
        window.addEventListener("resize",adjust);

        return ()=>window.removeEventListener("resize",adjust);
    },[])
    return windowSize;
}
export default useWindowSize;