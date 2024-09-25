import React from "react";

import { useNavigate } from "react-router-dom";

function Maintenance(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/guides/maintenances/${props.maintenance.id}`);
    };

    return(
        <>
            <tr key={props.maintenance.id} onClick={handleClick}>
                <td>{props.maintenance.machine}</td>
                <td>{props.maintenance.type_of_maintenance}</td>
                <td>{props.maintenance.date_of_maintenance}</td>
                <td>{props.maintenance.operating_time}</td>
                <td>{props.maintenance.order_number}</td>
                <td>{props.maintenance.data_of_order}</td>
                <td>{props.maintenance.organization}</td>
                <td>{props.maintenance.service_company}</td>
            </tr>
        </>
    );
}

export default Maintenance;
