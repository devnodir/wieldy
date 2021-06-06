import React, {useEffect} from 'react';

const AlertForm = ({alert,setAlert,text,icon,color}) => {
    
    useEffect(()=>{
        if(alert===true)
            setTimeout(()=>{
                setAlert(false)
            },1500)
    },[alert,setAlert])

    const Icon = icon

    return (
        <div className={`alert ${alert?'show':null}`}>
            <Icon style={{color:color}}/>
            <p className={'text'}>{text}</p>
        </div>
    );
};

export default AlertForm;