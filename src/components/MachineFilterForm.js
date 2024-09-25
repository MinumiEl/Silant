import React, {useState} from "react";

import Machines from "./Machines";
import AuthMachines from "./AuthMachines";

import '../styles/MachineFilterForm.css';
import FilterSelect from "./FilterSelect";


function MachineFilterForm(props) {
    const [valueTM, setValueTM] = useState('');
    const [valueEM, setValueEM] = useState('');
    const [valueTrM, setValueTrM] = useState('');
    const [valueDBM, setValueDBM] = useState('');
    const [valueCBM, setValueCBM] = useState('');

    const handleTechicModelChange = (valueTM) => {
        setValueTM(valueTM);
    };

    const handleEngineModelChange = (valueEM) => {
        setValueEM(valueEM);
    };

    const handleTransmissionModelChange = (valueTrM) => {
        setValueTrM(valueTrM);
    };

    const handleDrivingBridgeModelChange = (valueDBM) => {
        setValueDBM(valueDBM);
    };

    const handleControlledBridgeModelChange = (valueCBM) => {
        setValueCBM(valueCBM);
    };

    if (!props.token) {
        return (
            <>
                <Machines />
            </>
        )
    }

    return (
        <>
            <form>
                <p>
                    <label>
                        Модель техники:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/technic_models/'
                            onChange={handleTechicModelChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Модель двигателя:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/engine_models/'
                            onChange={handleEngineModelChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Модель трансмиссии:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/transmission_models/'
                            onChange={handleTransmissionModelChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Модель ведущего моста:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/driving_bridge_models/'
                            onChange={handleDrivingBridgeModelChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Модель управляемого моста:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/controlled_bridge_models/'
                            onChange={handleControlledBridgeModelChange}
                        />
                    </label>
                </p>
            </form>
            <div>
                <AuthMachines
                    valueTM={valueTM}
                    valueEM={valueEM}
                    valueTrM={valueTrM}
                    valueDBM={valueDBM}
                    valueCBM={valueCBM}
                    firstName={props.firstName}
                    user={props.user}
                    role={props.role}
                    servc={props.servc}
                    formUsername={props.formUsername}
                    machines={props.machines}
                    setMachines={props.setMachines}
                />
            </div>
        </>
    );
}

export default MachineFilterForm;