import React, { useState } from 'react';
import axios from 'axios';

import Complaint from './Complaint';
import Table from 'react-bootstrap/Table';

import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Complaints.css"

function Complaints(props) {
    const [response, setResponse] = useState([]);
    const [requested, complaintReq] = useState(false);
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');

    const LINK = `http://127.0.0.1:8000/api/complaints/?failure_node=${props.valueFN}&recovery_method=${props.valueRM}&service_company=${props.valueSC}`;

    let complaints = [];

    function ReqComplaints(){
        axios.get(LINK).then(res => {
            setResponse(res.data.results);
        });
    }

    for (let i = 0; i < response.length; i+=1) {
        complaints.push(response[i]);
    }

    if (requested === false) {
        ReqComplaints();
        complaintReq(true);
    }

    const handleSubmitChange = () => {
        ReqComplaints();
    };

    const handleSort = (column) => {
        if (sortColumn === column) {
            return setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        }

        setSortColumn(column);
        setSortDirection('asc');
    };

    const userMashinesFiltered =
        props.machines.filter(({ client }) => client === props.formUsername);
    const filteredMaintenances = complaints.filter(complaint =>
       userMashinesFiltered.some(userMachine => userMachine.machine_factory_number === complaint.machine)
    );
    
    return (
        <>
            <div className='button'><button onClick={handleSubmitChange}>Найти</button></div>
            <p>Информация о рекламациях</p>
            {!complaints.length ?
                <p className='nothing_found'>По вашему запросу ничего не найдено</p> :
                <Table variant='' striped bordered hover className='complaints'>
                    <thead>
                        <tr>
                            <th onClick={() => handleSort('machine')}>
                                    Зав. № машины
                                    {sortColumn === 'machine' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('date_of_failure')}>
                                    Дата отказа
                                    {sortColumn === 'date_of_failure' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('operating_time')}>
                                    Наработка, м/час
                                    {sortColumn === 'operating_time' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('failure_node')}>
                                    Узел отказа
                                    {sortColumn === 'failure_node' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('description_of_failure')}>
                                    Описание отказа
                                    {sortColumn === 'description_of_failure' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('recovery_method')}>
                                    Способ восстановления
                                    {sortColumn === 'recovery_method' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('spare_parts_used')}>
                                Запасные части
                                {sortColumn === 'spare_parts_used' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('date_of_recovery')}>
                                Дата восстановления
                                {sortColumn === 'date_of_recovery' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('technic_downtime')}>
                                Время простоя техники
                                {sortColumn === 'technic_downtime' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                            <th onClick={() => handleSort('service_company')}>
                                    Сервисная компания
                                    {sortColumn === 'service_company' && (sortDirection === 'asc' ? ' ▲' : ' ▼')}
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredMaintenances.map((complaint) => <Complaint key={complaint.id} complaint={complaint} />)}
                    </tbody>
                </Table>
            }
        </> 
    );
}

export default Complaints;