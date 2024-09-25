import React, { useState } from "react";

import Maintenances from "./Maintenances"
import MachineButton from "./MachineButton";
import FilterSelect from "./FilterSelect";

function MaintenanceFilterForm(props) {
    const [valueToM, setValueToM] = useState('');
    const [valueM, setValueM] = useState('');
    const [valueSC, setValueSC] = useState('');
    const [machines, setMachines] = useState([]);
    const [machine_url, setMachine] = useState('');
    const [touch, setTouch] = useState(false);

    const handleTypeOfMaintenanceChange = (valueToM) => {
        setValueToM(valueToM);
    };

    const handleMachineChange = (value) => {
        setValueM(value);
    };

    const handleServiceCompanyChange = (valueSC) => {
        setValueSC(valueSC);
    };

    const handleMachinesChange = (machines) => {
        setMachines(machines);
    };

    const handleMachineUrlChange = (machine_url) => {
        setMachine(machine_url);
        setTouch(true);
    };

    const userMashinesFiltered =
        machines.filter(({ client }) => client === props.formUsername);

    return(
        <>
            <p>Ваши машины:</p>
            <div>
                {userMashinesFiltered.map((machine, index) =>
                    <MachineButton
                        machine={machine}
                        handleMachineUrlChange={handleMachineUrlChange}
                        index={index}
                    />
                )}
            </div>
            <form>
                <p>
                    <label>
                        Вид ТО:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/types_of_maintenance/'
                            onChange={handleTypeOfMaintenanceChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Зав. номер машины:
                        <FilterSelect
                            apiUrl={`http://127.0.0.1:8000/api/machines/?client=${props.userId}&service_company=${props.serviceCompanyId}`}
                            onChange={handleMachineChange}
                            additionalHandler={handleMachinesChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Сервисная компания:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/service_companies/'
                            onChange={handleServiceCompanyChange}
                        />
                    </label>
                </p>
            </form>
            <div>
                <Maintenances
                    userMashinesFiltered={userMashinesFiltered}
                    valueToM={valueToM}
                    valueM={valueM}
                    valueSC={valueSC}
                    machines={machines}
                    machine_url={machine_url}
                    touch={touch}
                    setTouch={setTouch}
                    role={props.role}
                />
            </div>
        </>
    );
}

export default MaintenanceFilterForm;