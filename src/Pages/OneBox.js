import React from 'react';
import {AiFillCaretDown} from "react-icons/all";
import {box} from './dataBox'

const OneBox = () => {
    return (
        <>
            {
                box.map((item, index) => {
                    const Icon = item.icon
                    const Chart = item.chart
                    return (
                        <div className="box" key={index}>
                            <div className="info">
                                <div className="top">
                                    <p className="title">
                                        <span>{item.price}</span>
                                        <span className={`${item.increase ? 'green' : 'red'}`}>
                                            {item.percent} <AiFillCaretDown/>
                                        </span>
                                    </p>
                                    <Icon className={'coin'}/>
                                </div>
                                <p className={'name'}>{item.coinName}</p>
                            </div>
                            <div className="chart">
                                <Chart/>
                            </div>
                        </div>
                    )
                })
            }
        </>
    );
};

export default OneBox;