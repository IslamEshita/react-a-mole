import React from "react";
import { useState } from "react";
import Mole from "./Mole";
import EmptySlot from "./EmptySlot";

function MoleContainer(props) {
    let [isVisible, setIsVisible] = useState(false);

    let handleWhack = (e) => {

        if(isVisible) {
            props.setScore(props.score + 1);
            setIsVisible(false);
        }
    }

    return(
        <div className="MoleContainer">
            {isVisible ? <Mole setIsVisible={setIsVisible} handleWhack={handleWhack} /> : <EmptySlot setIsVisible={setIsVisible} /> }            
        </div>        
    )
}

export default MoleContainer;