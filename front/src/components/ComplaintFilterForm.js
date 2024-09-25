import React, { useState } from "react";

import Complaints from "./Complaints";
import FilterSelect from "./FilterSelect";

function ComplaintFilterForm(props) {
    const [valueFN, setValueFN] = useState('');
    const [valueRM, setValueRM] = useState('');
    const [valueSC, setValueSC] = useState('');

    const handleFailureNodeChange = (valueFN) => {
        setValueFN(valueFN);
    };

    const handleRecoveryMethodChange = (valueRM) => {
        setValueRM(valueRM);
    };

    const handleServiceCompanyChange = (valueSC) => {
        setValueSC(valueSC);
    };

    return(
        <>
            <form>
                <p>
                    <label>
                        Узел отказа:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/failure_nodes/'
                            onChange={handleFailureNodeChange}
                        />
                    </label>
                </p>
                <p>
                    <label>
                        Способ восстановления:
                        <FilterSelect
                            apiUrl='http://127.0.0.1:8000/api/recovery_methods/'
                            onChange={handleRecoveryMethodChange}
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
                <Complaints valueFN={valueFN} valueRM={valueRM} valueSC={valueSC} machines={props.machines} formUsername={props.formUsername}/>
            </div>
        </>
    );
}

export default ComplaintFilterForm;