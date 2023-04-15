import React, { useEffect } from "react";
import moleHillImage from '../images/molehill.png'

function EmptySlot(props) {
    useEffect(()=> {

        let numSeconds = Math.ceil(Math.random() * 4000);
        let timer = setTimeout(()=> {
            props.setIsVisible(true);
        }, numSeconds);
        return ()=> clearTimeout(timer);
    })

    return (        
        <div className="EmptySlot">
            <img src={moleHillImage} />
        </div>
    );
}

export default EmptySlot;