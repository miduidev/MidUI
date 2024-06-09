"use client"
import { useEffect, useRef, useState } from "react";

const useTooltip = (ms:number = 2000) => {
    const [isVisible, setIsVisible] = useState(false);
    const timerRef = useRef<null | NodeJS.Timeout>(null);

    const clear = () => { 
        if (timerRef.current) { 
            clearTimeout(timerRef.current);
            timerRef.current = null;
        }
    }
    
    const toggle = () => {
        clear();
        setIsVisible(true);
        timerRef.current = setTimeout(() => {
            setIsVisible(false);
        }, ms);
    }

    useEffect(() => {
        return () => { 
            clear();
        }
    }, [])

    return {isVisible , toggle}

}

export default useTooltip;