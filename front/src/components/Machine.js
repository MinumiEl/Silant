import React from "react";

function Machine(props) {
    return(
        <>
            <tr key={props.machine.id}>
                <td>{props.machine.technic_model}</td>
                <td>{props.machine.machine_factory_number}</td>
                <td>{props.machine.engine_model}</td>
                <td>{props.machine.engine_factory_number}</td>
                <td>{props.machine.transmission_model}</td>
                <td>{props.machine.transmission_factory_number}</td>
                <td>{props.machine.driving_bridge_model}</td>
                <td>{props.machine.driving_bridge_factory_number}</td>
                <td>{props.machine.controlled_bridge_model}</td>
                <td>{props.machine.controlled_bridge_factory_number}</td>
            </tr>
        </>
    );
}

export default Machine;
