import React, {useEffect} from 'react';
import {FaCheckCircle,FaTimesCircle} from 'react-icons/all'

const AlertForm = ({alert, setAlert, text, status=false}) => {

    useEffect(() => {
        if (alert === true)
            setTimeout(() => {
                setAlert(false)
            }, 2000)
    }, [alert, setAlert])

    const Icon = status ? FaCheckCircle : FaTimesCircle

    const color = status ? 'green' : '#f5222d'

    return (
        <div className={`alert ${alert ? 'show' : null}`}>
            <Icon style={{color: color}}/>
            <p className={'text'}>{text}</p>
        </div>
    );
};

export default AlertForm;