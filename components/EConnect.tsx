import { GlobeIcon } from "@radix-ui/react-icons";
import { FC, ReactNode ,useEffect,useState} from "react";

interface EconnectProp {
    children:ReactNode;
}
const Econnect:FC<EconnectProp>=({children})=>{

    const [isOnline,setIsOnline] =useState<boolean>(navigator.onLine);
    const checkNetworkStatus = () => {
        setIsOnline(navigator.onLine);
      };
    
    useEffect(() => {
        const handleOnline =()=>{
            console.log("online");
        }

        const handleOfline =()=>{
            console.log("ofLine");
        }
    
        window.addEventListener('online',handleOnline);
        window.addEventListener('offline',handleOfline);
      return () => {
        window.removeEventListener('online',handleOnline);
        window.removeEventListener('offline',handleOfline);
      }
    }, [])
    
    const content =<div>
         <GlobeIcon color={isOnline ?"green":"red"} className=""/>
    </div>
    return (<>
    {content}
    {children
    }</>)
}
export default Econnect;