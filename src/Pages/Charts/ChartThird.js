import React from 'react';
import {dataCarts} from "./data";
import {AreaChart, Area, Tooltip,ResponsiveContainer} from "recharts";


const ChartThird = () => {

    return (
        <ResponsiveContainer height={75} width={'100%'}>
            <AreaChart data={dataCarts}>
                <defs>
                    <linearGradient id="color3" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#e81a24" stopOpacity="0.8"></stop>
                        <stop offset="95%" stopColor="#FEEADA" stopOpacity="0.8"></stop>
                    </linearGradient>
                </defs>
                <Tooltip />
                <Area dataKey="price" stroke="#4D95F3" strokeWidth={0} fill="url(#color3)" fillOpacity={'1'}/>
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default ChartThird;