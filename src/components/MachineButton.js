import React from "react";

import "../styles/MachineButton.css";

function MachineButton(props) {
    const handleChange = (e) => {
        props.handleMachineUrlChange(props.machine.id)
    };

    return(
        <div className="buttons_container">
            <div className="buttons">
                <p>Машина {props.index + 1}:</p>
                <button onClick={handleChange} >
                    {props.machine.machine_factory_number}
                </button>   
            </div>  
        </div>
    );
}

export default MachineButton;