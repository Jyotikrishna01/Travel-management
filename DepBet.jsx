import React, { useState } from "react";


export default function DepartBetween() {


    const [disable, setDisable] = useState(true);
    const [start, setStart] = useState([]);
    const [end, setEnd] = useState([]);

    const [startFormat, setStartFormat] = useState('');
    const [endFormat, setEndFormat] = useState('');

    const handleStartDate = (e) => {
        const getStartDateValue = e.target.value;


        const [setDateformat] = getStartDateValue.split('-');

        const setstartyear = setDateformat[0];
        const setstartmonth = setDateformat[1];
        const setstartdate = setDateformat[2];

        // start date we get on console
        const setstartdateformat = setstartyear + "" + setstartmonth + "" + setstartdate;
        setStart(getStartDateValue);
        setStartFormat(setstartdateformat);
        setDisable(false);

    }

    const handleEndDate = (e) => {
        const getEndDateValue = e.target.value;

        const [setEndformat] = getEndDateValue.split('-');
        const setendyear = setEndformat[0];
        const setendmonth = setEndformat[1];
        const setenddate = setEndformat[2];

        setEndformat = setendyear + "" + setendmonth + "" + setenddate;
        setEnd(getEndDateValue);
        setEndFormat(setEndformat);
        
        
    }

    return (
        <div className="text-primary">
            <div className="mb-2">
                <h6 className="">Start-date: {start}</h6>
                <input className="ms-2" type="date" id="db1" name="start" min="02-07-2024" max="31-12-2025" onChange={handleStartDate} />
            </div>
            <div>
                <h6 className="">End-date: {end} </h6>
                <input className="ms-2" type="date" id="db2" name="end"  disabled={disable} onChange={ handleEndDate} />
            </div>
        </div>
    )

}