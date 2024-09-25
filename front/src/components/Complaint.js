import React from "react";
import { useNavigate } from "react-router-dom";

function Complaint(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/guides/complaints/${props.complaint.id}`);
    };

    return(
        <>
            <tr key={props.complaint.id} onClick={handleClick}>
                <td>{props.complaint.machine}</td>
                <td>{props.complaint.date_of_failure}</td>
                <td>{props.complaint.operating_time}</td>
                <td>{props.complaint.failure_node}</td>
                <td>{props.complaint.description_of_failure}</td>
                <td>{props.complaint.recovery_method}</td>
                <td>{props.complaint.spare_parts_used}</td>
                <td>{props.complaint.date_of_recovery}</td>
                <td>{props.complaint.technic_downtime}</td>
                <td>{props.complaint.service_company}</td>
            </tr>
        </>
    );
}

export default Complaint;
