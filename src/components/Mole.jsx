import React, { useEffect } from "react";
import moleImage from '../images/mole.png'

function Mole(props) {
    useEffect(()=> {
        let numSeconds = Math.ceil(Math.random() * 5000);
        let timer = setTimeout(()=> {
            props.setIsVisible(false)
        }, numSeconds);
        return ()=> clearTimeout(timer);
    })
    
    return (        
        <div onClick = {props.handleWhack} className="Mole">
            <img src={moleImage} />
        </div>
    );
}

export default Mole;